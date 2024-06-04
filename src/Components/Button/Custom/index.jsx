import React from "react";
import apple1 from "/apple-logo.png";
import google1 from "/google.png";
import facebook1 from "/facebook.png";

const CustomBtn = ({ text, logo, link, facebook, apple, google }) => {
  return (
    <div>
      <a href={link} className="">
        <button
          className={`${
            facebook
              ? "bg-blue-600 border-blue-600"
              : "bg-slate-300 border-slate-300"
          } border-2 py-2 w-full transition-all delay-300 flex items-center justify-center relative`}
        >
          <img
            src={`${
              apple ? apple1 : google ? google1 : facebook ? facebook1 : ""
            }`}
            alt="logo"
            className="left-1 top-[3px] absolute w-5 h-5 text-"
          />
          <p>{text}</p>
        </button>
      </a>
    </div>
  );
};

export default CustomBtn;
