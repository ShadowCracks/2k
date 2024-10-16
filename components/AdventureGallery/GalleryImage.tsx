
import React from "react";

interface GalleryImageProps {
  src: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Adventure gallery image"
      className="object-contain shrink-0 max-w-full rounded-xl aspect-[1.78] w-[242px]"
    />
  );
};

export default GalleryImage;
