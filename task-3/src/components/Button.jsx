import React from "react";

// passing customization props into the Button component
const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  const baseStyle =
    "px-6 py-3 font-semibold rounded-lg transition duration-200 focus:outline-none cursor-pointer";

  const primaryStyle =
    "bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500";
  const secondaryStyle =
    "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50";

  const style = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${style} w-full`}
    >
      {label}
    </button>
  );
};

export default Button;
