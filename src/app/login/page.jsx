"use client"
import Image from 'next/image';
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const Page = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className='mt-10'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='flex-1'>
                    <Image src='/assets/images/login/login.svg' width={640} height={640} alt='login' />
                </div>
                <div className='flex-1'>
                    <div className='ml-5 lg:ml-20 border px-10 py-5'>
                        <Form
                            
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >


                            <div className=''>
                                <p className='lato text-xl'>Name:</p>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        { required: true, message: 'Please input your Name!' },
                                    ]}
                                >
                                    <Input className='border p-3' placeholder='Name' />
                                </Form.Item>
                            </div>
                            <div className=''>
                                <p className='lato text-xl'>Email:</p>
                                <Form.Item className=''
                                    name="email"
                                    rules={[
                                        { required: true, type: 'email' },
                                    ]}
                                >
                                    <Input className='border p-3' placeholder='Email' />
                                </Form.Item>
                            </div>
                            <div className=''>
                                <p className='lato text-xl'>Password:</p>
                                <Form.Item
                                name="password"

                                rules={[
                                    { required: true, message: 'Please input your password!' },
                                ]}
                            >
                                <Input.Password className='border p-3' placeholder='Password' />
                            </Form.Item>
                            </div>
                            

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{ offset: 8, span: 16 }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button className=''>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
