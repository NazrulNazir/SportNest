'use client'
import { authClient } from '@/lib/auth-client';
import { FcGoogle } from 'react-icons/fc'
// import { toast } from 'react-toastify';

const SigninGoogle = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        if(data){
            // toast.success('Login with google successfully.');
            alert('Login with google successfully.');
        }else{
            // toast.error('Login Faild.')
            alert('Login Faild.');
        }
    }

    return (
        <div className='mt-6'>
            <button onClick={handleGoogleSignin} className='btn w-full flex justify-center items-center gap-2 text-[15px]'>
                <FcGoogle />
                Signin with Google</button>
            <div className="flex items-center gap-0 mt-4">
                <hr className="flex-2 border-t border-gray-300" />
                <p className='text-center'>or</p>
                <hr className="flex-2 border-t border-gray-300" />
            </div>
        </div>
    )
}

export default SigninGoogle
