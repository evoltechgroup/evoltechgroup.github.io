import React from "react";
interface ImageTextBlockProps {
  imageSrc: string;
  altText?: string;
  title: string;
  subtitle: string;
  description: string[];
  extraContent?: React.ReactNode;
  index?: number;
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imageSrc,
  altText = "",
  title,
  subtitle,
  description,
  extraContent,
  index = 0,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 w-full mx-auto px-4 py-4">
      <div
        className="sticky top-28 w-full sm:w-fit md:w-fit p-0 pt-0 flex justify-end items-start"
        style={{
          zIndex: 10 + index,
        }}>
        <div
          className="rounded-3xl w-[400px] h-[280px] overflow-hidden"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            borderRadius: "48px",
          }}>
          <div className="relative">
            <img
              src={imageSrc}
              alt={altText}
              className="w-[400px] h-[280px] object-cover"
              style={{
                borderRadius: "48px",
              }}
            />
            <div
              style={{ mixBlendMode: "plus-lighter" }}
              className="absolute inset-0 bg-gradient-to-b from-[#190670] to-[#1B0A41] opacity-100 pointer-events-none rounded-[48px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col h-full md:w-1/2 space-y-4 items-start">
        <div>
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <h4 className="text-lg font-semibold max-w-dvh text-[#333333]">
            {subtitle}
          </h4>
        </div>
        <div className="space-y-4">
          {description.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-gray-700 leading-relaxed max-w-[590px] font-normal text-base"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
        {extraContent && <div>{extraContent}</div>}
      </div>
    </div>
  );
};

export default ImageTextBlock;
