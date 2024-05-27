import React from 'react'
import { FaEye } from "react-icons/fa";

const Input = ({text,addClass, inputType, isRequired}) => {
  return (
    <div>
        <input type={inputType} className={`outline-none py-1 px-2 text-base placeholder:text-base font-medium transition-all duration-300 focus:bg-transparent border-2 border-white focus:border-cyan-500 focus:text-white focus:placeholder:text-cyan-600 rounded flex-1 w-[264px] ${addClass}`} required={isRequired} placeholder={text} />
    </div>
  )
}

export default Input