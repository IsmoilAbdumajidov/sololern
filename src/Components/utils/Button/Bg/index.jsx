import React from "react";

const Button = ({ text, extraClass, variant, func, btnType, children, ...res }) => {
  const VARIANTS = {
    primary:
      "focus:ring-blue-300 bg-cyan-500 hover:bg-cyan-700 focus:ring-4 text-white px-5 py-2.5",
    yellow: "focus:ring-yellow-300 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 text-white px-5 py-2.5",
    red: "focus:ring-red-300 bg-red-700 hover:bg-red-800 focus:ring-4 text-white px-5 py-2.5",
    green: "bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-4 text-white px-5 py-2.5",
    dark: "bg-white border-gray-300  hover:bg-gray-100 focus:ring-gray-100 focus:ring-4 text-white px-5 py-2.5",
    simple: 'w-max h-max',
  }
  return (
    <button
      onClick={func}
      type={btnType}
      className={`${variant ? VARIANTS[variant] : VARIANTS.primary}   font-normal rounded-lg text-sm focus:outline-none  ${extraClass}`}
      {...res}
    >
      {text || children}
    </button>
  );
};

export default Button;
