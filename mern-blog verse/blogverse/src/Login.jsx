import React, { useState } from 'react'
import { Eye, EyeOff, Key, Mail } from 'lucide-react'
import NavBar from './NavBar'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-50 to-blue-50'>
      <NavBar />
      
      <div className='flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <div className='w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden'>
          {/* Header */}
          <div className='px-6 py-8 sm:px-8'>
            <div className='text-center mb-8'>
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
              <p className='text-sm sm:text-base text-gray-600'>Sign in to your account</p>
            </div>

            <div className='space-y-6'>
              {/* Email Field */}
              <div className='space-y-2'>
                <label htmlFor="email" className='block text-sm font-semibold text-gray-700'>
                  Email Address
                </label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base'
                    placeholder='Enter your email'
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className='space-y-2'>
                <label htmlFor="password" className='block text-sm font-semibold text-gray-700'>
                  Password
                </label>
                <div className='relative'>
                  <Key className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base'
                    placeholder='Enter your password'
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0'>
                <div className='flex items-center space-x-2'>
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                  />
                  <label htmlFor="rememberMe" className='text-sm text-gray-600 font-medium'>
                    Remember me
                  </label>
                </div>
                <a href="#" className='text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors'>
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className='w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-base'
              >
                Sign In
              </button>

              {/* Divider */}
              <div className='relative my-6'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>or</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className='text-center'>
                <p className='text-sm text-gray-600'>
                  Don't have an account?{' '}
                  <a href="#" className='text-blue-600 hover:text-blue-700 font-semibold transition-colors'>
                    Create one here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login