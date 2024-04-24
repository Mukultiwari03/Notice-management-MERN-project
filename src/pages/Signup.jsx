import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("Submitting");
        const signData = { name, email, password }; // Create an object with the form data
        console.log(signData);
        try {
          const response = await axios.post(
            "http://localhost:4000/api/v1/signup",
            signData
          );
          console.log(response);
            if (response.status === 200) {
                toast.success("Signup successful");
            }
        } catch (err) {
          console.error(err);
        }
    };

    return (
        <div className="bg-white">
            <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
                    <h1 className="text-3xl font-extrabold text-gray-900">Sign up</h1>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Email address</label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 rounded border-gray-300  dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                </div>
                                <div className="text-sm">
                                    <a href="/" className="font-medium text-black-600 hover:text-black-500">Forgot your password?</a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                                   Sign up
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                                    
                                    <FcGoogle  width={100} height={100}/>
                                </button>
                               
                            </div>
                        </div>
                        <div className="m-auto mt-6 w-fit md:mt-8">
                            <span className="m-auto text-gray-500">Don't have an account?
                                <Link to="/login" className="font-bold text-black underline">Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;