"use client"
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import SocialLogin from '@/components/Shared/SocialLogin';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleSignUp = async (values) => {
        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        
    };

    return (
        <section className='mt-5'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='flex-1'>
                    <Image src='/assets/images/login/login.svg' width={540} height={640} alt='login' />
                </div>
                <div className='flex-1'>
                    <div className='ml-5 lg:ml-20 border px-10 py-5'>
                        <h1 className='lato text-5xl text-black font-bold text-center'>Sign Up</h1>
                        <Form
                            onFinish={handleSignUp} // This handles the form submission
                        >
                            <div className='mt-10'>
                                <p className='lato text-xl'>Name:</p>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        { required: true, message: 'Please input your Name!' },
                                    ]}
                                >
                                    <Input className='border border-[#FF3811] p-3' placeholder='Name' />
                                </Form.Item>
                            </div>
                            <div className='mt-10'>
                                <p className='lato text-xl'>Email:</p>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, type: 'email', message: 'Please input a valid email!' },
                                    ]}
                                >
                                    <Input className='border border-[#FF3811] p-3 lato bg-white' placeholder='Email' />
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
                                    <Input.Password className='border border-[#FF3811] bg-white p-3' placeholder='Password' />
                                </Form.Item>
                            </div>

                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    className="lato font-bold mt-5 w-full p-5 border border-[#FF3811] bg-[#FF3811] text-white hover:bg-green-500"
                                >
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className='lato mt-5 text-center'>or continue with</p>
                        <SocialLogin />
                        <p className='mt-5 lato text-[#737373] text-center'>Already have an account <span className='text-[#FF3811] font-bold'> <Link href='/login'>Login</Link> </span> </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
