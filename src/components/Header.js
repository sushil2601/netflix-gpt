import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () =>{

    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName ,photoURL} = user;
        dispatch(
          addUser(
            {
              uid : uid,
              email : email,
              displayName : displayName , 
              photoURL : photoURL
            }
          )
        )
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();

   },[])

  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src={LOGO}
        alt='logo'
        />
      {user && (
        <div className='flex p-2'>
        <img 
          className='w-8 h-8 m-2'
          src={user?.photoURL}
          alt='user-icon'
        />
        <button 
          className='text-red-600 font-bold w-[50%] h-[100%] bg-black'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  )
}

export default Header
