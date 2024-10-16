
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain z-10 mt-0 w-full aspect-[1.01] max-md:mt-0 max-md:max-w-full"
    />
  );
};

export default ImageComponent;
