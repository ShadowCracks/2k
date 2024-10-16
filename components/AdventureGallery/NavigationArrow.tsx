
import React from "react";

interface NavigationArrowProps {
  direction: "left" | "right";
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction }) => {
  const src =
    direction === "left"
      ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e64bce0a92fb59e51e31cfca3466f89f5a193c55ce7c883c0aba66be67a6dd76?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
      : "https://cdn.builder.io/api/v1/image/assets/TEMP/e89a7431c306b4aaf4d1e5ab27f9724efbf2f1316a53ec7318dcc2d0218aaae0?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11";
  const alt = `${direction} navigation arrow`;

  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 my-auto w-11 rounded-md aspect-[0.63]"
    />
  );
};

export default NavigationArrow;
