import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navigating = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-slate-900 text-white py-4'>
            <div className="main-container">
                <div className="flex justify-between md:items-center flex-col md:flex-row">
                    <div className={`${toggle ? "pb-3" : "pb-0"} flex w-full md:w-auto justify-between transition-all duration-300`}>
                        <div className="flex items-center justify-between">
                            <img src="/icon.png" alt="logo" className="w-10 h-10" />
                            <Link to="/" className="text-[18px] lg:text-2xl font-semibold">Sololearn</Link>
                        </div>
                        <button onClick={() => setToggle(!toggle)}>
                            <FiMenu className={`w-9 h-9 md:hidden transition-all duration-300 ${toggle ? "rotate-90" : "rotate-0"}`} />
                        </button>
                    </div>
                    <div className={` ${toggle ? "h-[200px]" : "h-0"} flex gap-4 md:items-center flex-col md:flex-row overflow-hidden transition-all duration-300 md:h-auto text-[14px] lg:text-base`}>
                        <Link to="/" className="cursor-pointer transition-all duration-300 hover:text-cyan-500">Subjects</Link>
                        <div className="flex cursor-pointer transition-all duration-300 hover:text-cyan-500 items-center gap-1">
                            <Link to="/" >Code Compiler</Link>
                            <IoIosArrowDown />
                        </div>
                        <Link to="/" className="cursor-pointer transition-all duration-300 hover:text-cyan-500">Discuss</Link>
                        <Link to="/" className="cursor-pointer transition-all duration-300 hover:text-cyan-500">Teams</Link>
                        <div className="flex gap-3">
                            <button className='py-[4px] md:py-2 px-5 md:px-6 border-2 border-blue-500 rounded-sm text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white'><Link to="/login">Let's start</Link></button>
                            <button className='py-[4px] md:py-2 px-3 md:px-4 border-2 border-blue-500 rounded-sm bg-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 '><Link to="/register">Register</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigating