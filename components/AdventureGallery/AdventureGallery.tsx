
import React from "react";
import GalleryImage from "./GalleryImage";
import NavigationArrow from "./NavigationArrow";

interface AdventureGalleryProps {
  images: string[];
}

const AdventureGallery: React.FC<AdventureGalleryProps> = ({ images }) => {
  return (
    <section className="flex flex-col">
      <div className="flex relative flex-col px-5 py-10 w-full min-h-[638px] rounded-[40px] shadow-[0px_10px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/982717cd3bcbf4d44a98e94dbaa532b2afce61989d7eae7b93750be304c34b8f?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative ml-12 w-full max-w-[1060px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
              <h1 className="relative self-stretch px-16 pt-11 pb-40 my-auto w-full text-5xl font-bold text-orange-200 rounded-3xl bg-stone-600 bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:text-4xl">
                Go on and <br /> adventure
              </h1>
            </div>
            <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66bc3843b05ea9e3ee54d3a16700a4ced26acbc0ce278844d4709b5da2855a8a?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                alt="Adventure landscape"
                className="object-contain grow w-full rounded-3xl aspect-[1.78] max-md:mt-7 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex relative gap-5 justify-between mt-10 max-md:max-w-full">
          <NavigationArrow direction="left" />
          {images.map((src, index) => (
            <GalleryImage key={index} src={src} />
          ))}
          <NavigationArrow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default AdventureGallery;
