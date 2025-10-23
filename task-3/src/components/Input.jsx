import React from "react";

// passing customization props into the Input component
const Input = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition duration-150 text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default Input;
