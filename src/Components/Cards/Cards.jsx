import React from 'react'

const Cards = () => {
    return (
        <div className='py-8'>
            <div className="main-container">
                <div className="flex justify-center gap-2 mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Why</h1>
                    <div className="bg-[#d8f8e3] p-[2px]">
                        <h1 className="text-[#35a2de] text-xl sm:text-2xl md:text-3xl">programming?</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 pt-[100px] gap-6">
                    <div className="card bg-[#f0f3f6] rounded-md">
                        <div className="flex justify-center">
                            <img src="/people.png" alt="minicard-img" className="w-[80%] h-[80%]" />
                        </div>
                        <div className="flex flex-col justify-end p-3">
                            <center>
                                <h1 className="text-2xl md:text-3xl font-semibold mt-auto">
                                    It's popular
                                </h1>
                            </center>
                            <center>
                                <p className="">
                                    <span className='font-semibold'>Technical skills are high in demand.</span>Over 60% of new jobs worldwide will require tech skills.
                                </p>
                            </center>
                        </div>
                    </div>

                    <div className="card bg-[#f0f3f6] rounded-md">
                        <div className="flex justify-center">
                            <img src="/Gaming.png" alt="minicard-img" className="w-[80%] h-[80%]" />
                        </div>
                        <div className="flex flex-col justify-end p-3">
                            <center>
                                <h1 className="text-2xl md:text-3xl font-semibold mt-auto">
                                    It's promising
                                </h1>
                            </center>
                            <center>
                                <p className="">
                                    Unlock your earning potential! Entry-level programmers in the U.S. earn on<span className='font-semibold'> average over $75,000 in salary. skills are high in demand.</span>
                                </p>
                            </center>
                        </div>
                    </div>

                    <div className="card bg-[#f0f3f6] rounded-md">
                        <div className="flex justify-center">
                            <img src="/high_five.png" alt="minicard-img" className="w-[80%] h-[80%]" />
                        </div>
                        <div className="flex flex-col justify-end p-3">
                            <center>
                                <h1 className="text-2xl md:text-3xl font-semibold mt-auto">
                                    It's fun
                                </h1>
                            </center>
                            <center>
                                <p className="">
                                    Imagine combining your passion and skill with your creativity and, <span className='font-semibold'>making something new every day!</span>
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 justify-center mb-10">
                    <button className="trasition-all duration-300 py-2 px-8 bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-transparent">I want to code</button>
                </div>
            </div>
        </div>
    )
}

export default Cards