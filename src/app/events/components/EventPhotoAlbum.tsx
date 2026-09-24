"use client";
import Image, { StaticImageData } from "next/image";
import PhotoAlbum, { type Photo } from "react-photo-album";
import { useState, useEffect, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type MediaPhoto = Photo & { videoSrc?: string };

interface EventPhotoAlbumProps {
  images: StaticImageData[];
  eventTitle: string;
  videos?: string[];
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
  videos,
}) => {
  // Image-only array — used for lightbox navigation
  const photos = useMemo(
    () => getPhotos(images, eventTitle),
    [images, eventTitle],
  );

  // Mixed array — videos randomly inserted among images for masonry display
  const allMedia = useMemo<MediaPhoto[]>(() => {
    if (!videos?.length) return photos;
    const result: MediaPhoto[] = [...photos];
    videos.forEach((src, index) => {
      const pos = Math.floor(Math.random() * (result.length + 1));
      result.splice(pos, 0, {
        src,
        videoSrc: src,
        width: 1920,
        height: 1080,
        alt: `${eventTitle} - Video ${index + 1}`,
      });
    });
    return result;
  }, [photos, videos, eventTitle]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null)),
    [],
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? Math.min(photos.length - 1, i + 1) : null,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={allMedia}
        onClick={({ photo }) => {
          const p = photo as MediaPhoto;
          if (p.videoSrc) return; // videos play inline, no lightbox
          const imgIndex = photos.findIndex((img) => img.src === p.src);
          if (imgIndex >= 0) setLightboxIndex(imgIndex);
        }}
        defaultContainerWidth={960}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        spacing={16}
        padding={4}
        componentsProps={{
          wrapper: ({ photo }) => ({
            className: `group overflow-hidden border border-[#E7EBF3] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]${!(photo as MediaPhoto).videoSrc ? " cursor-pointer" : ""}`,
          }),
        }}
        render={{
          image: (
            { alt, title, sizes, className, style, loading },
            context,
          ) => {
            const photo = context.photo as MediaPhoto;
            if (photo.videoSrc) {
              return /\.(mp4|webm|ogg)$/i.test(photo.videoSrc) ? (
                <video
                  src={photo.videoSrc}
                  controls
                  style={style}
                  className={`w-full h-full object-cover ${className ?? ""}`}
                />
              ) : (
                <iframe
                  src={photo.videoSrc}
                  style={style}
                  className={`w-full h-full ${className ?? ""}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              );
            }
            return (
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
            );
          },
        }}
      />

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm select-none">
            {lightboxIndex + 1} / {photos.length}
          </span>

          {lightboxIndex > 0 && (
            <button
              className="absolute left-3 md:left-6 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition z-10"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div
            className="max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt ?? eventTitle}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {lightboxIndex < photos.length - 1 && (
            <button
              className="absolute right-3 md:right-6 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition z-10"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default EventPhotoAlbum;
