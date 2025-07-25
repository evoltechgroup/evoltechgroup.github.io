import Image, { StaticImageData } from 'next/image';

interface PolaroidFrameProps {
  src: StaticImageData | string;
  alt: string;
  caption: string;
  className?: string;
}

const PolaroidFrame = ({ src, alt, caption, className = "" }: PolaroidFrameProps) => {
  return (
    <div className={`bg-white p-4 pb-12 shadow-xl transition-transform duration-300 hover:scale-105 ${className}`}>
      {/* Photo */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          placeholder="blur"
        />
      </div>
      {/* Caption */}
      <div className="mt-4">
        <p
          className="text-[#1761A0] text-2xl font-medium text-center"
          style={{
            fontFamily: "'HanziPen TC', cursive",
            transform: "rotate(-1deg)",
          }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
};

export default PolaroidFrame;