import React from "react";

// spinner component
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-sky-300 border-t-sky-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-sky-700">
          Loading user data...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
