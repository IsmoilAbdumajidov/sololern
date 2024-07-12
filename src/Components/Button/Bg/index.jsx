import React from "react";

const Button = ({ text, extraClass, variant, func, btnType, ...res }) => {
  const VARIANTS = {
    primary:
      "focus:ring-blue-300 bg-cyan-500 hover:bg-cyan-700",
    yellow: "focus:ring-yellow-300 bg-yellow-400 hover:bg-yellow-500",
    red: "focus:ring-red-300 bg-red-700 hover:bg-red-800",
    green: "bg-green-700 hover:bg-green-800 focus:ring-green-300",
    dark: "bg-white border-gray-300  hover:bg-gray-100 focus:ring-gray-100",
  }
  return (
    <button
      onClick={func}
      type={btnType}
      className={`${variant ? VARIANTS[variant] : VARIANTS.primary} text-white  focus:ring-4  font-normal rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  ${extraClass}`}
      {...res}
    >
      {text}
    </button>
  );
};

export default Button;
