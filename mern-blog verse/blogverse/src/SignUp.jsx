import React, { useState } from "react";
import NavBar from "./NavBar";
const   SignUp = () => {
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
        <div className="bg-gray-100 min-h-screen gap-5 flex flex-col">
            <NavBar/>
            <div className=" flex justify-center pt-5 ">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">Join BlogVerse</p>
            </div>
            <div className="flex justify-center">
                <p className="sm:md md:text-xl text-center text-gray-600">Create your account and <br />start your blogging journey today</p>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="shadow-2xl gap-5 pt-7 pb-5 px-4 mb-5 bg-white md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center md:rounded-3xl">
                    <div className=" w-[90%] flex flex-col gap-2">
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
                    <div className=" w-[90%] flex flex-col gap-2">
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
                    <div className="w-[90%] flex flex-col gap-2 ">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className="relative">
                            <input
                                name="password"
                                value={formData.password}
                                autoComplete="new-password"
                                required
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                            />
                            <span
                                className="absolute right-4 bottom-4 cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <span>Hide</span> : <span>Show</span>}
                            </span>
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col gap-2 relative">
                        <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                        <div className="relative">
                            <input
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                required
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                            />
                            <span
                                className="absolute right-4 top-4 cursor-pointer"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                {showConfirmPassword ? <span>Hide</span> : <span>Show</span>}
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg pl-5 items-center border-gray-300 flex border w-[90%] py-3 px-2  bg-gray-100">
                        <input required type="checkbox" className="h-5 w-5 " /><p className="pl-3 text-gray-700">I agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    {/* <div className=""> */}
                    <button type="submit" className="cursor-pointer w-[90%] flex justify-center py-4 text-white bg-purple-600 rounded-xl">Create Account</button>
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