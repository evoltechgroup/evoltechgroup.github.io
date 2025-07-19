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
    <div className="pt-20">
      <div
        className={`relative rounded-2xl p-8 max-w-2xl mx-auto shadow-lg ${
          className || ""
        }`}
        style={{ backgroundColor }}
      >
        {/* Large triangle pointing up with rounded tip */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className="w-10 h-10 rotate-45 rounded-sm"
            style={{ backgroundColor }}
          />
        </div>

        <p
          className="text-center text-lg leading-relaxed italic font-normal"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
