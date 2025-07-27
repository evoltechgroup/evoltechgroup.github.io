import React from "react";

interface TechCardWithChip {
  id: number;
  title: string;
  description: string[];
  bgColor: string;
  paragraphPadding?: string;
  icon?: React.ReactNode;
}

const TechCardWithChip: React.FC<TechCardWithChip> = ({
  id,
  title,
  description,
  bgColor,
  icon,
  paragraphPadding,
}) => {
  const safeDescription = Array.isArray(description)
    ? description
    : [description];
  return (
    <div
      key={id}
      className="flex flex-col gap-4 md:max-w-[290px] w-full mx-auto">
      {icon && (
        <div className="flex justify-start">
          <div className="w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}

      <div
        className="p-1.5 w-fit px-3 flex rounded-full rounded-bl-none font-semibold text-black text-base"
        style={{ backgroundColor: bgColor }}>
        {title}
      </div>
      {safeDescription.map((paragraph, idx) => (
        <p
          key={idx}
          className={`text-sm text-[#444444] font-medium md:max-w-[280px] ${paragraphPadding}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default TechCardWithChip;
