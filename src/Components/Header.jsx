import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebaseConfig";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './Utils/userSlice';
import { toggleGptSearchView } from './Utils/gptSlice';
import { SUP_LAN } from './Utils/Constants';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);


  const handleOnGptSearch=()=>{
   
  dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // User signed out successfully
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='Netflix Logo'
      />z

      {user && (
        <div className="flex items-center gap-2">
         <select className="text-white bg-blue-700 mx-3 px-2 py-2 rounded-lg cursor-pointer" onChange={handleLanguageChange}>
          {SUP_LAN.map((lang) => (
          <option
          key={lang.identifier}
         value={lang.identifier}
          className="bg-slate-500 text-white"
           >
      {lang.name}
    </option>
  ))}
</select>
        <button onClick={handleOnGptSearch} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>GPT Search</button>
          <img
            className='w-8 h-8 rounded-full object-cover'
            alt="profile"
            src={user.photoURL || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
          />
          
          <p className="text-white">{user.displayName}</p>
          <button onClick={handleSignOut} className="ml-4 text-red-500 hover:underline">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;


