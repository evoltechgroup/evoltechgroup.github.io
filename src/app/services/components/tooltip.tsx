import React from "react";

interface MessageBoxProps {
  content: string;
  bgColor: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ content, bgColor }) => {
  return (
    <div
      className={`relative ${bgColor} rounded-4xl p-6 max-w-xl mx-auto text-center text-black font-sans text-lg shadow-2xl`}
    >
      <div
        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-b-${bgColor.replace(
          "bg-",
          ""
        )} border-l-transparent border-r-transparent italic`}
      ></div>
      {content}
    </div>
  );
};

export default MessageBox;
