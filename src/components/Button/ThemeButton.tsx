import React from "react";
import Button from ".";

interface ThemeButtonProps {
  text: string;
  onClick?: () => void;
  extraStyles?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  text,
  startIcon,
  endIcon,
  onClick,
  extraStyles,
  disabled
}) => {
  const themeStyles =
    "cursor-pointer w-fit text-black items-center gap-1 font-medium justify-center sm:justify-start flex pl-6 pr-2 py-2 bg-[#FFBB00] rounded-full text-sm sm:text-base transition-colors duration-800 hover:brightness-110";
  return (
    <Button onClick={onClick} className={`${themeStyles} ${extraStyles}`} disabled={disabled}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </Button>
  );
};

export default ThemeButton;
