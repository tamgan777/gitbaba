import React from 'react'

import {Eye,EyeOff,Key,Mail} from 'lucide-react'
import NavBar from './NavBar'
const Login = () => {
  return (
    <div className='w-screen flex flex-col items-center  min-h-screen bg-purple-100'>
        <NavBar />
      <div className='w-[90%] md:w-1/3  flex  flex-col items-center mt-10  bg-white border-1 border-gray-300  rounded-2xl shadow-2xl'>
       <h1 className='mt-5 text-xl font-bold'>Login</h1>
       <p className='text-sm text-gray-700'>Access your account</p>
       <form action="" className='w-[80%] my-5 h-100 '>
        <div className='w-[95%] mb-'>
            <p className='text-sm text-gray-700 font-semibold pb- '>Email Address</p>
            <Mail className='flex relative top-9 left-2 text-gray-400'/>
            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-9 focus:outline-none focus:border-black text-sm focus:border-1.8 duration-200' type="text" placeholder='email.com' />
        </div>
        <div className='w-[95%] '>
          <Key className='flex relative top-21 left-2 text-gray-400'/>
            <p className='text-sm text-gray-700 font-semibold pb-1.5'>Password<Eye className="flex text-gray-400 relative top-9 left-88"/>
            </p>
            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-9 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' type="text" placeholder='password' />
        </div >
        <div className=' flex justify-between  mt-4'>
            <div className='flex   gap-1'>
                <input type="checkbox" />
                <p className='text-sm text-gray-400 font-semibold '>Remember me</p>
            </div>
            <div className=''>
                <p className='text-sm text-blue-600 font-semibold hover:cursor-pointer'>Forgot Password?</p>
            </div>
        </div>
        <button className=' w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200'>Sign In</button>
        <div className='w-full flex justify-center my-4 border-1 border-gray-200 '></div>

        <p className='text-sm text-center text-gray-700'>Don't have an account?<span className='text-blue-600 font-semibold hover:cursor-pointer'>Create one here</span></p>
       </form>
      </div>
    </div>
  )
}

export default Login