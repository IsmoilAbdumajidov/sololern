import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Password = ({ text, addClass, func, password, isRequired }) => {
    return (
        <div className='relative group'>
            <input type={password ? "text" : "password"} className={`outline-none py-1 px-2 text-base placeholder:text-base font-medium transition-all duration-300 focus:bg-transparent focus:text-white focus:placeholder:text-cyan-600 border-2 border-white focus:border-cyan-500 rounded pr-8 flex-1 ${addClass}`} required={isRequired} placeholder={text} />
            <button type='button' onClick={func} className='absolute top-[10px] right-3 text-cyan-500'>
                {password ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    )
}

export default Password