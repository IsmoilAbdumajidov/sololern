import React from 'react'
import Signup from './Signup'
import { Outlet } from 'react-router-dom'

const Login = () => {
    return (
        <div className="flex registerBg  flex-col min-h-screen justify-center h-full w-full sm:min-w-[600px]">
            <div className="flex justify-center h-full w-full">
                <div className="h-auto bg-black/20 backdrop-blur  rounded-lg border p-4">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Login