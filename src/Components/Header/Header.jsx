import React from 'react'
import { CiSquareMore } from "react-icons/ci";
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='min-h-[70vh] bg-slate-900'>
            <div className="main-container">
                <div className="h-full py-3 items-center flex flex-col justify-center text-white gap-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-semibold">Learning to code got simplified</h1>
                    <p className="text-base md:text-xl py-1 md:py-4">Learning the latest technology with interactive, hands-on courses.<span className="font-bold">It is free!</span></p>
                    <div className="flex flex-col gap-6 pt-4">
                        <button className='trasition-all w-[280px] md:w-[350px] px-3 md:px-5 duration-300 border-2 border-blue-500 border-blue bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 py-2 md:py-3 flex gap-2 justify-center items-center rounded-md'>
                            <Link to="/login">Let's start!</Link>
                            <MdOutlineReadMore className='w-6 h-6' />
                        </button>
                        <div className="flex items-center gap-3">
                            <hr className='w-[50%]' />
                            <p className="">or</p>
                            <hr className='w-[50%]' />
                        </div>
                        <button className='transition-all w-[280px] md:w-[350px] px-3 md:px-5 duration-300 border-2 border-blue-500 border-blue bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white py-2 md:py-3 flex gap-2 justify-center items-center rounded-md'>
                            <Link to="/register">See more options</Link>
                            <CiSquareMore className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header