'use client'
import { getServiceDetails } from '@/Services/getServices';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({ params }) => {
    const [service, setService] = useState({});
    const loadService = async () => {
        const details = await getServiceDetails(params.id)
        setService(details.service)
    }
    // console.log(service)
    // const { _id, img, price, description } = service || {};

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        loadService()

    }, [params])

    
    

    return (
        <section>

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
        </section>
    );
};


export default CheckoutPage;