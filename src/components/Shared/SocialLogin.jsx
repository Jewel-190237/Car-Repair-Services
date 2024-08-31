import { signIn } from 'next-auth/react';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLogin = () => {

    const handleSocialLogin = async(provider) => {
        const resp = await signIn(provider);

    }

    return (
        <div>
            <div className='mt-5 flex text-3xl justify-center text-blue-800 gap-3'>
                <button onClick={() => handleSocialLogin('gitHub')}> <FaGithub/> </button>
                <button onClick={() => handleSocialLogin('google')}><AiFillGoogleCircle /> </button>
                <button onClick={() => handleSocialLogin('facebook')}> <FaFacebook /> </button>
            </div>
        </div>
    );
};


export default SocialLogin;