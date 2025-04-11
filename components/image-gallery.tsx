"use client";
import { useState } from "react";
import Image from "next/image";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "",
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
          <p className="text-center text-lg">{images[activeImage].caption}</p>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white w-10 h-10 rounded-full cursor-pointer"
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white w-10 h-10 rounded-full cursor-pointer"
        aria-label="Next image"
      >
        &#10095;
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(index)}
            className={`w-3 h-3 rounded-full ${activeImage === index ? "bg-primary" : "bg-white/30"}`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
