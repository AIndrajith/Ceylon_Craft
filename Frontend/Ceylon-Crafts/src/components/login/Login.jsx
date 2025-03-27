import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Signup from '../sign-up/Signup';


const Login = ({PopupClose}) => {
    const [isSignupMode, setIsSignupMode] = useState(false);

    const toggleAuthMode = () => {
        setIsSignupMode(!isSignupMode);
    }

    // If signup mode is active, render Signup component
    if (isSignupMode) {
        return <Signup 
            PopupClose={PopupClose}
            switchToLogin={() => setIsSignupMode(false)}
        />;
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center font-outfit min-h-screen'>
            <div className='relative flex flex-col m-6 space-y-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
                <div className='flex flex-col justify-center p-8 md:p-14'>
                    <button onClick={PopupClose}
                            className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
                        X
                    </button>
                    <span className='mb-3 text-4xl text-[#8A2846] font-semibold flex justify-center'>
                        Sign In
                    </span>
                    <div className='py-4'>
                        <input type="text"
                               name='email'
                               placeholder='Email address'
                               className='w-full border border-gray-300 rounded-md p-2' />
                    </div>
                    <div className='py-4'>
                        <input type="password"
                               name='password'
                               placeholder='Password'
                               className='w-full border border-gray-300 rounded-md p-2' />
                    </div>
                    <div className='flex items-center gap-2 sm:gap-10 justify-between w-full py-4'>
                        <div className='mr-24'>
                            <input type="checkbox" 
                                   name='checkbox'
                                   className='mr-2'/>
                            <span className='sm:text-sm text-xs text-[#8A2846]'>Remember me</span>
                        </div>
                        <span className='font-bold sm:text-sm text-[10px] text-[#8A2846]'>
                            Forgot password
                        </span>
                    </div>
                    <button className='bg-[#8A2846] text-white rounded-lg p-2 font-semibold text-lg hover:bg-[#8A2846]/70'>
                        Login
                    </button>
                    
                    <div className='text-sm text-center text-gray-500 pt-6'>
                        Don't have an account? 
                        <span 
                            onClick={toggleAuthMode}
                            className='ml-2 font-bold text-[#8A2846] cursor-pointer hover:underline'
                        >
                            Sign Up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login