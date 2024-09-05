import React from 'react';

const MyBookings = () => {
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
                    <h2 className='lato text-5xl font-bold text-white'>My Bookings</h2>
                </div>
                <div className='bg-[#FF3811] bg-area max-w-[330px] h-[200px] relative bottom-[200px] mx-auto flex items-end justify-center'>
                    <h4 className='text-xl font-bold text-white px-2 py-1 lato'>Home/MyBookings</h4>
                </div>
            </div>
        </section>
    );
};


export default MyBookings;