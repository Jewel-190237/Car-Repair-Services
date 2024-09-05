'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const MyBookings = () => {
    const { data } = useSession();

    const [bookings, setBookings] = useState([])

    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/myBookings/api/${data?.user?.email}`)
        const book = await resp.json();
        setBookings(book)
    }

    useEffect(() => {
        loadData()
    }, [data])


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
                            <tr className='font-bold text-black text-xl'>

                                <th>Name</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>phone</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(({ _id, index, title, date, prise, phone, name }) => (
                                    <tr className='font-bold text-black ' key={index} >

                                        <td>{name}</td>
                                        <td>{title}</td>
                                        <td>{date}</td>
                                        <td>{prise}</td>
                                        <td>{phone}</td>
                                        <td className='flex justify-between text-xl'>
                                            <button><FaEdit></FaEdit></button>
                                            <button><FaEdit></FaEdit></button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};


export default MyBookings;