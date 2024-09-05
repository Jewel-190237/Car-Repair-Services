'use client'
import { getServiceDetails } from '@/Services/getServices';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({ params }) => {
    const [service, setService] = useState({});
    const loadService = async () => {
        const details = await getServiceDetails(params.id)
        setService(details)
    }
    // console.log(service)
    const { _id, img, price, description } = service || {};

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        loadService()

    }, [params])

    return (
        <section>
            <div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('/banner.png')`,
                        backgroundSize: 'cover',
                    }}
                    className="w-[100%] h-56 bg-no-repeat rounded-lg w-full h-56 bg-no-repeat rounded-lg flex items-center justify-center"
                >
                    <h2 className='lato text-5xl font-bold text-white'>Check Out</h2>
                </div>
                <div className='bg-[#FF3811] bg-area max-w-[330px] h-[200px] relative bottom-[200px] mx-auto flex items-end justify-center'>
                    <h4 className='text-xl font-bold text-white px-2 py-1 lato'>Home/Checkout</h4>
                </div>
            </div>
            <div className='bg-[#F3F3F3] py-10 px-10 -mt-20'>
                <form onSubmit={handleSubmit} action="">
                    <div className='flex gap-5'>
                        <input
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            className="mt-3 w-full lato bg-white border border-[#FF3811] p-3 rounded-lg"
                        />

                        <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            className="w-full mt-3 lato bg-white border border-[#FF3811] p-3 rounded-lg"
                        />

                    </div>
                    <div className='flex gap-5 mt-5'>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="lato mt-3 w-full bg-white border border-[#FF3811] p-3 rounded-lg"
                        />

                        <input
                            type="number"
                            name="prise"
                            defaultValue={price}
                            placeholder="Prise"
                            className="lato w-full mt-3 bg-white border border-[#FF3811] p-3 rounded-lg"
                        />

                    </div>
                    <input
                            type="text"
                            name="message"
                            placeholder="Write Your Message"
                            className="lato mt-10 w-full h-32 bg-white border border-[#FF3811] p-3 rounded-lg"
                        />

                    <button
                        type="submit" className='lato font-bold mt-10 rounded-lg w-full p-3 border border-[#FF3811] bg-[#FF3811] text-white'>
                        Order Confirm
                    </button>
                </form>
            </div>
        </section>
    );
};


export default CheckoutPage;