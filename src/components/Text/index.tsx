import React, { type ReactElement } from "react";
import cx from "clsx";

type TextTag =
  | "p"
  | "span"
  | "label"
  | "small"
  | "li"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface TextProps {
  tag?: TextTag;
  children?: React.ReactNode;
  className?: string;
  truncate?: boolean;
  alignment?: "left" | "center" | "right" | "justify";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold" | string;
  width?: string;
  textColor?: string;
  customColor?: string;
  id?: string;
  scale?: boolean;
  title?: string;
  style?: React.CSSProperties;
}

const Text = ({
  tag = "p",
  children = "index",
  className = "",
  truncate = false,
  alignment = "left",
  fontWeight = "normal",
  width = "",
  textColor = "",
  customColor = "",
  id = "",
  scale = true,
  title = "",
  style = {},
}: TextProps): ReactElement => {
  const Tag = tag;

  const textClass = cx(
    {
      truncate,
      [`text-${alignment}`]: alignment,
      [`font-${fontWeight}`]: fontWeight,
      [`text-${customColor}`]: customColor,
    },
    className
  );

  return (
    <Tag
      id={id}
      className={textClass}
      title={title}
      style={{ width, color: textColor, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Text;
