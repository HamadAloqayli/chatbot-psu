import React from "react";

function CustomInput({ ...props }) {
  return (
    <input
      className="w-full bg-gray-100 text-gray-800 rounded-md outline-gray-300 p-2"
      {...props}
    />
  );
}

export default CustomInput;
