import Image from 'next/image';
import React from 'react';

import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const page = () => {
    return (
        <section className='mt-10'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='flex-1'>
                    <Image src='/assets/images/login/login.svg' width={640} height={640} alt='login' />
                </div>
                <div className='flex-1'>
                    <div>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />

                            </Form.Item>
                        </Form>
                    </div>

                </div>

            </div>
        </section>
    );
};


export default page;