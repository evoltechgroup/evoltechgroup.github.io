import { polygonIcon } from "@/assets/svg";
import React from "react";

interface MessageBoxProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
}

const MessageBox = ({
  text,
  backgroundColor = "#F1F2FF",
  textColor = "#1F2937",
  accentColor = "#EF4444",
  className,
}: MessageBoxProps) => {
  return (
    <div className="relative overflow-visible">
      <div
        className={`relative rounded-2xl p-8 max-w-xl mx-auto shadow-lg ${
          className || ""
        }`}
        style={{ backgroundColor }}>
        <div
          className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-[80px] h-[70px] z-1 `}
          style={{ color: backgroundColor }}>
          {polygonIcon}
        </div>
        <p
          className="text-center text-lg relative z-20 leading-relaxed italic font-normal"
          style={{ color: textColor }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
