import { getServiceDetails } from '@/Services/getServices';
import Image from 'next/image';
import React from 'react';

const page = async({params}) => {
    const serviceDetails = await getServiceDetails(params.id);
    // console.log(serviceDetails);
    // const {img, price, title, description, facility} = serviceDetails.service
    return (
        <section>
            <div className='gradientBackground rounded-lg'>
                <Image className='' src='/details.png' alt='image' height={300} width={1137}/>
            </div>
            <h2 className='relative bottom-44 left-28 lato text-5xl font-bold text-white'>Service Details</h2>
            <div></div>
        </section>
    );
};


export default page;