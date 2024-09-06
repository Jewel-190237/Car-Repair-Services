// import React from "react";

// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer bg-base-200 dark:bg-black text-base-content p-10">
//                 <aside>
//                     <svg
//                         width="50"
//                         height="50"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         className="fill-current">
//                         <path
//                             d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//                     </svg>
//                     <p>
//                         ACME Industries Ltd.
//                         <br />
//                         Providing reliable tech since 1992
//                     </p>
//                 </aside>
//                 <nav>
//                     <h6 className="footer-title">Services</h6>
//                     <a className="link link-hover">Branding</a>
//                     <a className="link link-hover">Design</a>
//                     <a className="link link-hover">Marketing</a>
//                     <a className="link link-hover">Advertisement</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title">Company</h6>
//                     <a className="link link-hover">About us</a>
//                     <a className="link link-hover">Contact</a>
//                     <a className="link link-hover">Jobs</a>
//                     <a className="link link-hover">Press kit</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title">Legal</h6>
//                     <a className="link link-hover">Terms of use</a>
//                     <a className="link link-hover">Privacy policy</a>
//                     <a className="link link-hover">Cookie policy</a>
//                 </nav>
//             </footer>
//         </div>
//     )
// }
// export default Footer;


// components/Footer.js
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto ">
                {/* Footer Sections */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Section 1: Company Info */}
                    <div>
                        <div className="flex items-center">
                            <Image src='/assets/logo.svg' alt='logo' height={50} width={120}></Image>
                            <span className="text-xl font-bold">Company Name</span>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="mailto:info@company.com" className="text-white hover:text-gray-400">
                                <FaEnvelope />
                            </a>
                            <a href="tel:+1234567890" className="text-white hover:text-gray-400">
                                <FaPhoneAlt />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Section 2: Useful Links 1 */}
                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Section 3: Useful Links 2 */}
                    <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Useful Links 3 */}
                    <div>
                        <h3 className="text-lg font-semibold">Products</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Demo</a></li>
                        </ul>
                    </div>

                    {/* Section 5: Subscribe */}
                    <div>
                        <h3 className="text-lg font-semibold">Subscribe</h3>
                        <p className="mt-4 text-gray-400">
                            Sign up to get the latest updates and offers.
                        </p>
                        <form className="mt-4 flex sm:w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full text-gray-900 focus:outline-none"
                            />
                            <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
