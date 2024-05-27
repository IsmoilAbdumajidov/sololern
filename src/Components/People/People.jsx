import React from 'react'

const People = () => {
    return (
        <div className='py-5 blob min-h-[70vh] backdrop-blur-md'>
            <div className="main-container">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div></div>
                    <center>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Platform Users</h1>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">70,344,572</h1>
                            <p className="">Share your code or questions and get instant feedback or become a creator and spread your knowledge and experience with our global community of learners.</p>
                            <div>
                                <button className='transition-all duration-300 bg-green-500 border-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 py-3 px-10 rounded-sm w-auto'>Join today</button>
                            </div>
                            <img src="/people.png" alt="people" className="" />
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default People