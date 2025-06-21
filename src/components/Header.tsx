import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { addUser, removeUser } from '../utils/userSlice';
import { logo, userIcon } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    //  cleanup function when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img src={logo} alt="Netflix logo" className="w-44" />
      {user && (
        <div className="p-2 flex items-center gap-10">
          <img
            src={user?.photoURL || userIcon}
            alt="user icon"
            className="w-10 h-10 rounded-full"
          />
          <button onClick={handleSignOut} className="bg-red-600 text-white px-2 py-2 rounded-md">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
