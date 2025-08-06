import { LogoBg } from "@/assets/svg";
import React from "react";

type ImageData = {
  src: string;
  alt?: string;
};

type ImageGridProps = {
  images: ImageData[][];
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const getImageSizeClasses = (columnIndex: number) => {
    switch (columnIndex) {
      case 0:
        return "h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24";
      case 1:
        return "h-18 w-18 sm:h-24 sm:w-24 lg:h-32 lg:w-32";
      case 2:
        return "h-22 w-22 sm:h-28 sm:w-28 lg:h-38 lg:w-38";
      case 3:
        return "h-20 w-20 sm:h-26 sm:w-26 lg:h-34 lg:w-34";
      default:
        return "h-18 w-18 sm:h-24 sm:w-24 lg:h-30 lg:w-30";
    }
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative overflow-visible">
      <div className="hidden lg:flex absolute inset-0 w-full h-full z-0 overflow-visible items-center justify-center">
        <div className="lg:w-full lg:h-full flex items-center justify-center scale-80 lg:scale-120 lg:mt-60">
          {LogoBg}
        </div>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-x-2">
          {images?.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="grid flex-shrink-0 grid-cols-1 gap-y-2 z-20">
              {column.map((image, imageIndex) => {
                return (
                  <div
                    key={imageIndex}
                    className={`${getImageSizeClasses(
                      columnIndex
                    )} overflow-hidden bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl ${
                      columnIndex === 0 && imageIndex === 0
                        ? "sm:opacity-0 md:opacity-100"
                        : ""
                    }`}>
                    <img
                      src={image.src}
                      alt={image.alt || ""}
                      className="h-full w-full object-cover object-center grayscale brightness-100 contrast-90"
                    />
                    <div className="absolute top-12 sm:top-16 lg:top-21 left-[-0.5rem] sm:left-[-0.75rem] lg:left-[-1rem] w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 border-l-3 sm:border-l-4 lg:border-l-6 border-t-3 sm:border-t-4 lg:border-t-6 border-[#8DCAFF] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] z-10"></div>

                    <div className="absolute top-3 sm:top-4 lg:top-6 right-[-0.5rem] sm:right-[-0.75rem] lg:right-[-1rem] w-24 h-26 sm:w-32 sm:h-34 lg:w-43 lg:h-44 border-r-3 sm:border-r-4 lg:border-r-6 border-t-3 sm:border-t-4 lg:border-t-6 border-[#8DCAFF] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] z-10"></div>

                    <div className="absolute bottom-[-0.5rem] sm:bottom-[-0.75rem] lg:bottom-[-1rem] left-12 sm:left-16 lg:left-22 w-20 h-20 sm:w-26 sm:h-26 lg:w-36 lg:h-36 border-l-3 sm:border-l-4 lg:border-l-6 border-b-3 sm:border-b-4 lg:border-b-6 border-[#8DCAFF] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] z-10"></div>

                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-[-0.5rem] sm:right-[-0.75rem] lg:right-[-1rem] w-24 h-26 sm:w-32 sm:h-34 lg:w-42 lg:h-44 border-r-3 sm:border-r-4 lg:border-r-6 border-b-3 sm:border-b-4 lg:border-b-6 border-[#8DCAFF] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] z-10"></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
