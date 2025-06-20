import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? null : name.current?.value || '',
      email.current?.value || '',
      password.current?.value || ''
    );

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current!.value, password.current!.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: 'https://avatars.githubusercontent.com/u/77318351?v=4',
          })
            .then(() => {
              // Use manually set values instead of relying on auth.currentUser
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: name.current?.value || '',
                  photoURL: 'https://avatars.githubusercontent.com/u/77318351?v=4',
                })
              );
              navigate('/browse');
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message + ' ' + error.code);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current!.value, password.current!.value)
        .then((userCredential) => {
          const user = userCredential.user;

          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || '',
              photoURL: user.photoURL || '',
            })
          );

          navigate('/browse');
        })
        .catch((error) => {
          setErrorMessage(error.message + ' ' + error.code);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
        alt="wallpaper"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-center h-screen text-white"
      >
        <form className="w-4/12 bg-black/70 p-12 rounded-md shadow-lg">
          <h1 className="font-bold text-xl m-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 w-full bg-gray-600 rounded-xl"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-600 rounded-xl"
            ref={email}
          />

          <input
            type="password"
            placeholder="Password"
            className=" p-4 m-2 w-full bg-gray-600 rounded-xl"
            ref={password}
          />
          <p className="text-red-500 m-2">{errorMessage}</p>
          <button
            className="p-4 m-2 w-full bg-red-600 text-white rounded"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="m-2 py-4" onClick={toggleSignInForm}>
            {isSignInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
