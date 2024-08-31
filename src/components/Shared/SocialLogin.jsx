import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div className='mt-5 flex text-3xl justify-center text-blue-800 gap-3'>
                <button> <FaFacebook /> </button>
                <button><FaLinkedin /> </button>
                <button><AiFillGoogleCircle /> </button>
            </div>
        </div>
    );
};


export default SocialLogin;