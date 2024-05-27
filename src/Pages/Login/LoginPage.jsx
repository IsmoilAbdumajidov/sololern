import React, { useState } from 'react'
import Input from '../../Components/Input/Simple'
import Password from '../../Components/Input/Password'
import BorderedBtn from '../../Components/Button/Border'
import Button from '../../Components/Button/Bg'
import CustomBtn from '../../Components/Button/Custom'
import { Link, Navigate } from 'react-router-dom'


const LoginPage = () => {
    const [password, setPassword] = useState(false)
    return (
        <div className="flex registerBg flex-col min-h-screen justify-center h-full w-full">
            <div className="flex justify-center h-full w-full">
                <div className="w-auto h-auto bg-indigo-600/60 backdrop-blur border-blue-600 rounded border-2 p-4">
                    <div className="flex flex-col gap-6">
                        <center><h1 className="text-2xl md:text-3xl text-white font-semibold">Log In</h1></center>
                        <form className='flex flex-col gap-4'>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 w-full flex-col sm:flex-row">
                                    <Input isRequired={true} text="Email" inputType="email" />
                                    <Password isRequired={true} text="Password" inputChoose="secondary" func={() => setPassword(!password)} password={password} />
                                </div>
                            </div>

                            <div className="flex gap-3 justify-between sm:justify-end">
                                <BorderedBtn btnType="reset" text="Reset"></BorderedBtn>
                                <Button btnType="submit" text="Sign In"></Button>
                            </div>

                        </form>
                        <div className="flex justify-center items-center gap-3 sm:px-5">
                            <hr className="flex-1" />
                            <p className="text-xl font-medium text-white">or</p>
                            <hr className="flex-1" />
                        </div>
                        <center><p className="">New to Sololearn? <span><Link to="/register" className='text-cyan-500 font-medium transition-all duration-300 hover:underline'>Create an accout</Link></span> </p></center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage