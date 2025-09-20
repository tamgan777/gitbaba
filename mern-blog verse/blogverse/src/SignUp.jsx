import React, { useState } from "react";
import NavBar from "./NavBar";
import { Eye, EyeOff } from 'lucide-react';
import { Key } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { usestate } from 'react'
const SignUp = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
        setError("");
        setSuccess("");
    }
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password do not match");
        } else {
            setError("");
            setSuccess("Account created successfully!");
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
    }
    return (
        <div className="bg-purple-100 min-h-screen gap-2 flex flex-col">
            <NavBar />
            
          <div>
            <img src="C:\Users\Mern devastra\OneDrive\Desktop\gitbaba\mern-blog verse\blogverse\src\git.png" className=""/>
          </div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="shadow-2xl gap-5 pt-7 pb-5 px-4 mb-5 bg-white w-1/2 flex flex-col justify-center items-center md:rounded-3xl">
                    <div className="flex gap-3 w-[90%]">
                        <div className=" w-[50%] flex flex-col gap-2">
                            <p className="text-md text-gray-700 font-semibold">Full Name</p>
                            <input
                                required
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500"
                                type="text"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className=" w-[50%] flex flex-col gap-2">
                            <p className="text-md text-gray-700 font-semibold">Email Address</p>
                            <input
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500"
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>
                    <div className="flex w-[90%] gap-3">
                        <div className="w-[50%] flex flex-col gap-2 relative  ">
                            <p className="text-md text-gray-700 font-semibold">Password</p>
                            <div className="relative left-2">
                                <Key className="absolute left-2 top-4 text-amber-400" />
                                <input
                                    name="password"
                                    value={formData.password}
                                    autoComplete="new-password"
                                    required
                                    onChange={handleChange}
                                    className="rounded-xl px-12 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12 relative right-2"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                />
                                <span
                                    className="absolute right-4 bottom-4 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}
                                </span>
                            </div>
                        </div>
                        <div className="w-[50%] flex flex-col gap-2 relative ">
                            <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                            <div className="relative">
                                <p><Key className="text-amber-400 absolute top-4 left-2.5" /></p> <input
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    required
                                    onChange={handleChange}
                                    className="rounded-xl px-10  py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                />
                                <span
                                    className="absolute right-4 top-4 cursor-pointer"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg pl-5 items-center border-gray-300 flex border w-[90%] py-3 px-2  bg-gray-100">
                        <input required type="checkbox" className="h-5 w-5 " /><p className="pl-3 text-gray-700">I agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    {/* <div className=""> */}

                    <button type="submit" className=" cursor-pointer w-[90%] flex justify-center py-5 text-white bg-purple-600 rounded-xl items-center gap-2"><CircleUserRound className="" />
                        Create Account</button>
                    {/* </div> */}
                    <div className="border-[0.5px] my-5 w-[90%] text-gray-200 "></div>
                    <div className="flex flex-col items-center gap-3 w-[90%] ">
                        <div>
                            <p className="text-gray-600 ">Already have an account? <span className="text-purple-600 font-semibold">Sign In Here</span> </p>
                        </div>
                        <div className="">
                            <button className="text-gray-600 p-4 hover:bg-gray-200 rounded-lg">Back to Home</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;