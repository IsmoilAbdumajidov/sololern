import React from 'react'

const Button = ({text, extraClass, func, btnType}) => {
  return (
    <div>
        <button onClick={func} type={btnType} className={`bg-cyan-500 py-[5px] px-8 hover:bg-transparent hover:text-cyan-500 text-white transition-all duration-300  border-2 border-cyan-500 rounded`}>{text}</button>
    </div>
  )
}

export default Button