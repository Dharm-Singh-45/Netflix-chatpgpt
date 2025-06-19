import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
        alt="wallpaper"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="flex items-center justify-center h-screen text-white">
        <form className="w-5/12 bg-black/70 p-12 rounded-md shadow-lg">
          <h1 className="font-bold text-xl m-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 w-full bg-gray-600 rounded-xl"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-600 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            className=" p-4 m-2 w-full bg-gray-600 rounded-xl"
          />
          <button className="p-4 m-2 w-full bg-red-600 text-white rounded">
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
