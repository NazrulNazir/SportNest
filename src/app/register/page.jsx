'use client';
import SigninGoogle from '@/components/SigninGoogle';
// import SigninGoogle from '@/components/SigninGoogle';
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { toast } from 'react-toastify';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [errPass, setErrPass] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form Data:", userData);

        // password condition
        const password = userData.password;
        const hasMinLength = password.length >= 6;

        // console.log(errPass)
        setErrPass('');
        if (!hasMinLength) {
            setErrPass("Password must be at least 8 characters long");
        }



        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photo_URL,
            callbackURL: '/login'
        });
        // console.log('Signup Failed:', { data, error });
        if (data) {
            alert("Create account Successfullly")
            router.push("/login");
        }

        if (error) {
            alert('Signup Failed: ' + error.message);
            // toast.error('Signup Failed: ' + error.message)
        }
    }

    return (
        <div className='mt-8'>
            <div className="hero min-h-[80vh] flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form action="" onSubmit={onSubmit}>
                            <h1 className='text-4xl font-bold text-center text-green-600'>Register</h1>
                            <SigninGoogle></SigninGoogle>
                            <fieldset className="fieldset flex flex-col gap-3 px-3">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input border border-gray-200" placeholder="Your Name" required />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input border border-gray-200" placeholder="Your Email" required />

                                <label className='label'>Photo URL</label>
                                <input className='input border border-gray-200' type="text" name='photo_URL' placeholder='Enter Photo URL' required />

                                <div>
                                    <label className="label mb-2">Password</label>

                                    <div className="relative w-full max-w-sm">
                                        <TextField
                                            isRequired
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            validate={(value) => {
                                                if (value.length < 6) {
                                                    return "Password must be at least 6 characters";
                                                }

                                                if (!/[A-Z]/.test(value)) {
                                                    return "Password must contain at least one uppercase letter";
                                                }

                                                if (!/[a-z]/.test(value)) {
                                                    return "Password must contain at least one lowercase letter";
                                                }

                                                return null;
                                            }}
                                        >
                                            <Input
                                                placeholder="Enter your password"
                                                className="pr-12"
                                            />

                                            {/* <p className="text-red-600 font-semibold mt-2 text-[15px]">
                                            {errPass}
                                        </p> */}

                                            <Description>
                                                {
                                                    errPass ? <p className="text-red-600 font-semibold mt-2">
                                                        {errPass}
                                                    </p> :
                                                        <p>Must be at least 6 characters with 1 uppercase and 1 lowercase letter</p>
                                                }
                                            </Description>

                                            <FieldError />
                                        </TextField>

                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-[28%] -translate-y-1/2 cursor-pointer text-gray-500 z-10 text-lg"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <Button type='submit' className="btn bg-green-400 rounded-lg w-full text-gray-800 mt-4 text-lg font-semibold">Register</Button>
                                <p className='text-md'>have an account? <Link className='text-green-700 font-bold underline' href={'/login'}>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
