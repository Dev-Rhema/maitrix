import React from "react";

export default function Button({ name, buttonFunction, className }) {
  return (
    <button
      className={`relative px-2 py-1 text-lg bg-transparent inline-block text-[#00f61d] overflow-hidden hover:bg-[#00f61d] hover:text-black font-medium transition-colors duration-250 ease-in-out cursor-pointer ${className}`}
      onClick={buttonFunction}
    >
      {name}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-1 border-l-1 border-[#00f61d]"></span>
      <span className="absolute top-0 right-0 w-3 h-3 border-t-1 border-r-1 border-[#00f61d]"></span>
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
    </button>
  );
}
