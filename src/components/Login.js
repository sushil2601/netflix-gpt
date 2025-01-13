import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const isToggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () =>{
    const message = checkValidateData(email.current.value,password.current.value,firstName.current.value,lastName.current.value);
    setErrorMessage(message);
    // if(message) return;
  }

  return (
    <div>
      <Header />
      <div className='absolute '>
        <img 
            className=''
            src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg'
            alt='background-logo'
        />  
      </div>
      
      <form onSubmit={(e)=> e.preventDefault()}
        className='absolute w-3/12 p-12 my-24 mx-auto left-0 right-0 bg-opacity-85 text-white bg-black rounded-md'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign Up" : "Sign In"}</h1>
        {
            isSignInForm && 
            <input 
                className='p-2 my-2 w-full bg-gray-800 bg-opacity-40 rounded-md'
                ref={firstName} 
                type='text' 
                placeholder='Enter first name'
            />   
        }
        {
            isSignInForm && 
            <input 
                className='p-2 my-2 w-full bg-gray-800 bg-opacity-40 rounded-md' 
                ref={lastName}
                type='text' 
                placeholder='Enter last name'
            />

        }
        <input 
            className='p-2 my-2 w-full bg-gray-800 bg-opacity-40 rounded-md'
            ref={email}
            type='text' 
            placeholder='Email or mobile number'
        />
        <input 
            className='p-2 my-2 w-full bg-gray-800 bg-opacity-40 rounded-md'
            ref={password}
            type='password' 
            placeholder='Password'
        />
        <p className='text-red-600 text-lg'>{errorMessage}</p>
        <button
            className='p-4 my-4 bg-red-700 w-full rounded-md'
            onClick={handleButtonClick}
        >{isSignInForm ? "Sign Up" : "Sign In"}</button>
        <p className='text-center text-gray-500'>OR</p>
        <button className='p-4 my-4 bg-gray-600 w-full rounded-md'>Use a sign-in-code</button>
        <span className='flex justify-center mb-2'>Forgot password ?</span>
        <input 
            className='w-4 h-4 my-4'
            type='checkbox'
        /><span className='mx-2'>Remember me</span>
        <p 
            className='p-3 -mx-2 cursor-pointer'
            onClick={isToggleSignInForm}
        >{isSignInForm ? "New to Netflix? Sign up now" : "Already register.Sign in now"}</p>
        <p className='p-2 text-sm -mx-1'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
      </form>
    </div>
  )
}

export default Login
