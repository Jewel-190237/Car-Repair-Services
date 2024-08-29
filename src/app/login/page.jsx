"use client"
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from 'next/link';

const Page = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className='mt-5'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='flex-1'>
                    <Image src='/assets/images/login/login.svg' width={540} height={640} alt='login' />
                </div>
                <div className='flex-1'>
                    <div className='ml-5 lg:ml-20 border px-10 py-5'>
                        <h1 className='lato text-5xl text-black font-bold text-center'>Login</h1>
                        <Form

                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            {/* <div className='mt-10'>
                                <p className='lato text-xl'>Name:</p>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        { required: true, message: 'Please input your Name!' },
                                    ]}
                                >
                                    <Input className='border border-[#FF3811] p-3' placeholder='Name' />
                                </Form.Item>
                            </div> */}
                            <div className='mt-10'>
                                <p className='lato text-xl'>Email:</p>
                                <Form.Item className=''
                                    name="email"
                                    rules={[
                                        { required: true, type: 'email' },
                                    ]}
                                >
                                    <Input className='border border-[#FF3811] p-3' placeholder='Email' />
                                </Form.Item>
                            </div>
                            <div className='mt-10'>
                                <p className='lato text-xl'>Password:</p>
                                <Form.Item
                                    name="password"

                                    rules={[
                                        { required: true, message: 'Please input your password!' },
                                    ]}
                                >
                                    <Input.Password className='border border-[#FF3811] p-3' placeholder='Password' />
                                </Form.Item>
                            </div>

                            <Form.Item >
                                <Button className='lato font-bold mt-5 w-full p-5 border border-[#FF3811] bg-[#FF3811] text-white'>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className='lato mt-5 text-center'>or continue with</p>
                        <div className='mt-5 flex text-3xl justify-center text-blue-800 gap-3'>
                            <button> <FaFacebook/> </button>
                            <button><FaLinkedin/> </button>
                            <button><AiFillGoogleCircle/> </button>
                        </div>
                        <p className='mt-5 lato text-[#737373] text-center'>New Here ? Please <span className='text-[#FF3811] font-bold'> <Link href='/signup'>SignUp</Link> </span> </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
