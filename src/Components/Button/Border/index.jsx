import React from 'react'

const BorderedBtn = ({text, extraClass, func, btnType}) => {
    return (
        <div>
            <button type={btnType} className={`bg-transparent py-[5px] px-8 hover:bg-orange-500 hover:text-white text-orange-500 transition-all duration-300  border-2 border-orange-500 rounded`}>{text}</button>
        </div>
    )
}

export default BorderedBtn