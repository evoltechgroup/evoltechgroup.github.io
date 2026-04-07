"use client";
import Image, { StaticImageData } from "next/image";
import PhotoAlbum, { type Photo } from "react-photo-album";

interface EventPhotoAlbumProps {
  images: StaticImageData[];
  eventTitle: string;
}

export const getPhotos = (
  images: StaticImageData[],
  eventTitle: string,
): Photo[] => {
  return images.map((img, index) => ({
    src: img.src,
    width: img.width,
    height: img.height,
    alt: `${eventTitle} - Photo ${index + 1}`,
  }));
};

const EventPhotoAlbum: React.FC<EventPhotoAlbumProps> = ({
  images,
  eventTitle,
}) => {
  const photos = getPhotos(images, eventTitle);

  return (
    <PhotoAlbum
      layout="masonry"
      photos={photos}
      defaultContainerWidth={960}
      columns={(containerWidth) => {
        if (containerWidth < 640) return 1;
        if (containerWidth < 1024) return 2;
        return 3;
      }}
      spacing={16}
      padding={4}
      componentsProps={{
        wrapper: () => ({
          className:
            "group overflow-hidden  border border-[#E7EBF3] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]  hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
        }),
      }}
      render={{
        image: ({ alt, title, sizes, className, style, loading }, context) => (
          <Image
            src={context.photo.src}
            alt={alt ?? context.photo.alt ?? eventTitle}
            title={title}
            width={context.width}
            height={context.height}
            sizes={sizes}
            loading={loading}
            style={style}
            className={`w-full object-cover ${className ?? ""}`}
          />
        ),
      }}
    />
  );
};

export default EventPhotoAlbum;
