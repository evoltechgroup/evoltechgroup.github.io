
import { LogoBg } from '@/assets/svg';
import Image from 'next/image';
import React from 'react';

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
                return 'h-24 w-24';
            case 1:
                return 'h-32 w-32';
            case 2:
                return 'h-38 w-38';
            case 3:
                return 'h-34 w-34';
            default:
                return 'h-30 w-30';
        }
    };

    return (
        <div aria-hidden="true" className="pointer-events-none relative">
            <div className="absolute inset-0 top-20 w-lvw h-lvh flex items-center justify-center z-0">
                {LogoBg}
            </div>
            <div className="relative z-10">
                <div className="flex items-center gap-x-2">
                    {images.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="grid flex-shrink-0 grid-cols-1 gap-y-2 z-20"
                        >
                            {column.map((image, imageIndex) => {
                                return (
                                    <div
                                        key={imageIndex}
                                        className={`${getImageSizeClasses(columnIndex)} overflow-hidden rounded-4xl  ${columnIndex === 0 && imageIndex === 0
                                            ? 'sm:opacity-0 lg:opacity-100'
                                            : ''
                                            }`}>
                                        <img
                                            src={image.src}
                                            alt={image.alt || ''}
                                            className="h-full w-full object-cover object-center grayscale brightness-100 contrast-90"
                                        />


                                        <div className="absolute top-21 left-[-1rem] w-28 h-28 border-l-6 border-t-6 border-[#8DCAFF] rounded-[2.5rem] z-10"></div>


                                        <div className="absolute top-6 right-[-1rem] w-43 h-44 border-r-6 border-t-6 border-[#8DCAFF] rounded-[3rem] z-10"></div>


                                        <div className="absolute bottom-[-1rem] left-22 w-36 h-36 border-l-6 border-b-6 border-[#8DCAFF] rounded-[2.5rem] z-10"></div>


                                        <div className="absolute bottom-6 right-[-1rem] w-42 h-44 border-r-6 border-b-6 border-[#8DCAFF] rounded-[3rem] z-10"></div>

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
