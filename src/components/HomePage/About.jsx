import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row mt-20 gap-10'>
                <div className='flex-1'>
                    <Image className='rounded-lg ' src='/assets/images/about_us/person.jpg' width={460} height={100} alt='person' />
                    <Image className='rounded-lg relative border-4 border-white bottom-36 left-48' src='/assets/images/about_us/parts.jpg' width={327} height={100} alt='person' />
                </div>
                <div className='flex-1'>

                </div>

            </div>
        </section>
    );
};


export default About;