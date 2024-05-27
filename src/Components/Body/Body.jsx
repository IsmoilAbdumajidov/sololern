import React from 'react'

const Body = () => {
    return (
        <div className='py-8'>
            <div className="main-container">
                <center>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-5 pb-7 font-bold">A great platform for independent learning!</h1>
                </center>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className='hidden lg:block'></div>

                    <div className="flex flex-col">
                        <div >
                            <img src="/man_working.png" alt="plane" className='scale-90' />
                        </div>
                        <div className="p-2 flex flex-col flex-1 gap-3">
                            <div className='flex-col flex gap-3'>
                                <center>
                                    <h1 className="text-xl md:text-2xl font-semibold">
                                        Students
                                    </h1>
                                </center>
                                <center>
                                    <p className="text-[14px]">
                                        Prepping for the big test or want to ace your first interview? Use Sololearn's real-world practice to reinforce what you've learned and get you ready for that big moment.
                                    </p>
                                </center>
                            </div>
                            <button className='mt-auto py-2 px-4 border-2 border-blue-500 text-white transition-all duration-300 w-auto bg-blue-500 hover:bg-transparent hover:text-blue-500 rounded-md'>Learn for free</button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div >
                            <img src="/woman_working.png" alt="plane" className='scale-90' />
                        </div>
                        <div className="p-2 flex flex-col flex-1 gap-3">
                            <div className='flex-col flex gap-3'>
                                <center>
                                    <h1 className="text-xl md:text-2xl font-semibold">
                                        Teachers
                                    </h1>
                                </center>
                                <center>
                                    <p className="text-[14px]">
                                        You can learn something totally new to advance your career. Or maybe you just want to knock off the rust. Try Sololearn to get access to a variety of courses, from machine learning to web development.</p>
                                </center>
                            </div>
                            <button className='mt-auto py-2 px-4 border-2 border-blue-500 text-white transition-all duration-300 w-auto bg-blue-500 hover:bg-transparent hover:text-blue-500 rounded-md'>Start your career</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body