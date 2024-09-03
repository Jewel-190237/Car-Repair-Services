import { getServiceDetails } from '@/Services/getServices';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const serviceDetails = await getServiceDetails(params.id);
    // console.log(serviceDetails);
    // const {img, price, title, description, facility} = serviceDetails.service
    return (
        <section>
            <div>
                <div className='gradientBackground rounded-lg'>
                    <Image className='' src='/details.png' alt='image' height={100} width={1137} />
                </div>
                <h2 className='relative bottom-44 left-28 lato text-5xl font-bold text-white'>Service Details</h2>
                <div className='bg-[#FF3811] bg-area max-w-[330px] h-[200px] relative bottom-[248px] mx-auto flex items-end justify-center'>
                    <h4 className='text-xl font-bold text-white px-2 py-1 lato'>Home/Service Details</h4>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <Image className='' src='/carDetails.png' alt='image' height={400} width={752} />
                    <div className='mt-5'>
                        <h3 className='text-black lato text-2xl font-bold'>UniQue</h3>
                        <p>Description</p>
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-4'>
                        <div className='bg-[#F3F3F3] text-[#737373] lato p-5 border-4 rounded-xl border-t-red-500'>
                            <h3 className='text-2xl font-bold text-black'>Title</h3>
                            <p>Descroption</p>
                        </div>

                    </div>
                    <div className='mt-5 lato'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <h2 className='mt-10 lato text-4xl font-bold text-black'>
                        3 Simple Steps to Process
                    </h2>
                    <div className='mt-10 lato'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='lato mt-10 flex justify-between'>
                        <div className='flex flex-col items-center'>
                            <div className='border p-5'>
                                <div className='border-[15px] border-[#FF38111A] rounded-full '>
                                    <p className='rounded-full bg-[#FF3811] text-white text-2xl px-6 py-3'>
                                        1
                                    </p>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                </div>
                <div>

                </div>

            </div>

        </section>
    );
};


export default page;