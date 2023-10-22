import React from "react";

interface ButtonProps {
  text: string;
  colorClass: string;
}

const Button: React.FC<ButtonProps> = ({ text, colorClass }) => {
  return (
    <button
      className={`${colorClass}  text-white font-bold py-2 px-4 rounded shadow-md`}
    >
      {text}
    </button>
  );
};

export default Button;
