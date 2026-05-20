'use client';

// import SigninGoogle from '@/components/SigninGoogle';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { toast } from 'react-toastify';

const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log('Login User Data..', userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log('get form data', {data, error});

        if (data) {
            alert('Login successfully..')
            // toast.success("Signin Sussessfully..");
        }
        if (error) {
            // toast.error(error.message);
            alert(error.message);
        }

    }

    return (
        <div className='flex justify-center items-cente'>
            <div className="hero bg-green-400">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body px-8">
                        <form onSubmit={onSubmit}>
                            <h1 className='text-4xl font-bold text-center text-primary mb-5'>Login</h1>
                            <div className='w-full'>
                                {/* <SigninGoogle></SigninGoogle> */}
                            </div>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Enter your email" />
                                <div>
                                    <label className="label mb-2">Password</label>
                                    <div className="relative w-full max-w-sm">
                                        <input
                                            name='password'
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="input w-full"
                                        />

                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 text-lg top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4" type='submit'>Login</button>
                                <p> Don’t have an account? <Link className='text-primary font-bold underline' href={'/register'}>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInPage
