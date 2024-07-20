import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [inputType, setInputType] = useState('password');

    const handleTogglePassword = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };
    const handleRegister = async (e) => {

        e.preventDefault();

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            Swal.fire({
                title: "Registered Suceesfully!",

                icon: "success"
            });

            navigate("/Home");
        } catch (error) {
            console.log("Error signing in:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",

            });
        }
    }

    return (
        <div className=" bg-cover bg-center flex justify-center items-center h-[100vh] overflow-hidden" style={{ backgroundImage: `url('/Asset/fower-1.jpg')` }}>
            <div className="backdrop-brightness-100 bg-white/30 w-96 p-10 rounded-2xl">
                <div>
                    <h1 className="text-5xl text-center ml-20 gap-2 font-serif flex items-center">
                        Sign Up
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </h1>
                </div>

                <form >

                    <label htmlFor="email" className="text-2xl mt-3 font-serif">Email</label>
                    <input
                        className=" mt-3 border-2 rounded-lg focus:border-b-blue-600 w-full py-2 focus:outline-none"
                        type="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div>
                        <label htmlFor="password" className="text-2xl mt-3 font-serif">Password</label>
                        <input
                            className="border-2 rounded-lg mt-3 focus:border-b-blue-600 w-full py-2 focus:outline-none"
                            type={inputType}
                            placeholder="Enter Password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-12 mt-8  flex items-center cursor-pointer"
                            onClick={handleTogglePassword}
                        >
                            {inputType === 'password' ? <FaEye size={24}/> : <FaEyeSlash size={24}/>}
                        </div>
                    </div>
                </form>

                <div className="font-serif mt-4 flex justify-between">
                    <label>
                        <input type="checkbox" /> Remember me</label>
                    <Link to="/forgot-password" className="text">Forgot password?</Link>
                </div>

                <div className="text-xl font-serif mt-4">
                    <p>Already have an account? <Link to="/Signup">SignIn</Link></p>
                </div>

                <div className="mt-5">
                    <button type='submit' onClick={handleRegister} className="bg-blue-600 font-semibold w-full py-1 mt-2 rounded-md text-2xl text-white"><Link to="/Home">Sign Up</Link></button>

                </div>

            </div>
        </div>

    )
}

export default Register;
