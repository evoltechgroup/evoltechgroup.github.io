import React from "react";

interface LabelProps {
  text: string;
}

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <div className="flex border-l-3 border-l-[#4C96D7] bg-white shadow-[0_10px_10px_-10px_rgba(33,35,38,0.1)] p-2 items-center">
      <span className="text-sm font-medium text-gray-800">{text}</span>
    </div>
  );
};

export default Label;
