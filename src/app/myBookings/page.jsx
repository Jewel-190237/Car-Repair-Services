import { useSession } from 'next-auth/react';
import React from 'react';

const MyBookings = () => {
    const { data } = useSession();
    
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
            <div className='-mt-40 mb-20 lato text-black'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-2xl font-bold text-black'>
                            <tr className='font-bold text-black'>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th>1</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};


export default MyBookings;