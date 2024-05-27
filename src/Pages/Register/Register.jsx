import React, { useState } from 'react'
import Input from '../../Components/Input/Simple'
import Password from '../../Components/Input/Password'
import BorderedBtn from '../../Components/Button/Border'
import Button from '../../Components/Button/Bg'
import CustomBtn from '../../Components/Button/Custom'
import { Link } from 'react-router-dom'



const Register = () => {
  const [password, setPassword] = useState(false)
  return (
    <div className="flex registerBg  flex-col min-h-screen justify-center h-full w-full sm:min-w-[600px]">
      <div className="flex justify-center h-full w-full">
        <div className="w-auto h-auto bg-indigo-600/60 backdrop-blur border-blue-600 rounded border-2 p-4">
          <div className="flex flex-col gap-6">
            <center><h1 className="text-2xl md:text-3xl text-white font-semibold">Registratsiya</h1></center>
            <form className='flex flex-col gap-4'>

              <div className="grid grid-cols-1 sm:grid-cols-2 flex-col gap-4">
                <Input isRequired={true} text="First Name" inputType="text" />
                <Input text="Last Name" inputType="text" />
                <Input isRequired={true} text="Email" inputType="email" />
                <Password isRequired={true} text="Password" inputChoose="secondary" func={() => setPassword(!password)} password={password} />
                <Input isRequired={true} text="Username" inputType="text" />
                <Input text="Group" inputType="text" />
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
            <center><p className="">Already have an account? <span><Link to="/login" className='text-cyan-500 font-medium transition-all duration-300 hover:underline'>Log In</Link></span> </p></center>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register