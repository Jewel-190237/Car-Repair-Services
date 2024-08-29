import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ service }) => {

    const { title, price, img } = service || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image className='rounded-lg' src={img} alt='img' width={350} height={120} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title lato text-xl">{title}</h2>
                    <div className="card-actions justify-between">
                        <p className='text-[#FF3811] mt-4 lato font-bold'>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ServiceCard;