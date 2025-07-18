import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children = "index",
  style,
  className,
  ...rest
}) => {
  return (
    <button style={style} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
