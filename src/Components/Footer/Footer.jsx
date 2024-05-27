import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
    return (
        <div className=''>
            <div className="bg-[#1d1c23] py-5 text-white">
                <div className="main-container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-3 items-center">
                        <div className="flex items-center gap-2">
                            <FaLinkedinIn className='text-blue-500 w-8 h-8' />
                            <a href="#" className="text-[17px]">Follow us on LinkedIn</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFacebookF className='text-sky-800 w-8 h-8' />
                            <a href="#" className="text-[17px]">Check out our facebook</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsTwitterX className='text-cyan-500 w-8 h-8' />
                            <a href="#" className="text-[17px]">See what we tweet about</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuInstagram className='text-violet-600 w-8 h-8' />
                            <a href="#" className="text-[17px]">Join our instagram</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaYoutube className='text-red-500 w-8 h-8' />
                            <a href="#" className="text-[17px]">Watch our Youtube</a>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex gap-3 flex-col sm:flex-row items-start">
                                <a href="#">
                                    <div className="flex gap-2 border rounded-md bg-black p-1 px-3">
                                        <img src="/apple-logo.png" alt="download" className="w-8 h-8" />
                                        <div className="flex flex-col">
                                            <p className="text-[8px]">Download on the</p>
                                            <p className="text-[15px]">App Store</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="flex gap-2 border rounded-md bg-black p-1 px-3">
                                        <img src="/google-play.png" alt="download" className="w-8 h-8" />
                                        <div className="flex flex-col">
                                            <p className="text-[8px]">GET IT ON</p>
                                            <p className="text-[15px]">Google Play</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#17171b] py-2">
                <div className="main-container">
                    <div className="flex justify-between gap-5 flex-col lg:flex-row lg:gap-3">
                        <ul className="flex gap-3 flex-col md:flex-row  text-[14px] text-gray-500">
                            <div className="flex gap-4">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pro</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact</a></li>
                            </div>
                            <div className="flex gap-4">
                                <li><a href="#">Bug</a></li>
                                <li><a href="#">Bounty Program</a></li>
                            </div>
                            <div className="flex gap-4">
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </div>
                            <div className="flex gap-4">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sololearn Mobile</a></li>
                            </div>
                        </ul>
                        <div className="flex items-center gap-1">
                            <p className="text-gray-500 text-[14px]">Made with </p><IoIosHeart className='text-red-500' /><p className="text-gray-500 text-[14px]">by Sololearn | 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer