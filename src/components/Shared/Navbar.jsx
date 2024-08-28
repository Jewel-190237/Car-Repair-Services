"use client";
import { LuUser2 } from "react-icons/lu";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";



const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Services', path: '/' },
        { name: 'Blogs', path: '/' },
        { name: 'Contact', path: '/' },
    ];
    return (
        <div className="border border-b-red-400 border-dashed ">
            <div className="navbar relative z-10 max-w-[1230px] mx-auto my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col  dropdown-content  mt-3 w-36 p-2 text-[16px] ">
                            {links.map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className={activeLink === link.name ? 'text-[#B68C5A]' : ''}
                                        onClick={() => setActiveLink(link.name)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image src='/logo.png' height={46} width={157} alt="logo image"></Image>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex flex-row px-1 space-x-[30px] text-[16px]">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className={activeLink === link.name ? 'text-[#B68C5A]' : ''}
                                    onClick={() => setActiveLink(link.name)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300">
                        Get Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;