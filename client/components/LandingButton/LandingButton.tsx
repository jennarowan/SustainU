import React from "react";

interface LandingButtonProps {
  text: string;
  colorClass: string;
}

const LandingButton: React.FC<LandingButtonProps> = ({ text, colorClass }) => {
  return (
    <button className={`${colorClass}  text-white font-bold py-2 px-4 rounded`}>
      {text}
    </button>
  );
};

export default LandingButton;
