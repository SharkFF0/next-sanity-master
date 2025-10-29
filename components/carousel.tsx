"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type CarouselProps = {
  images: {
    _key: string;
    asset: { url: string };
    alt?: string;
  }[];
  interval?: number; // optional autoplay interval in ms
};

export default function ProjectCarousel({
  images,
  interval = 6000, // default 4 seconds
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden rounded-xl">
  {images.map((img, index) => (
    <div
      key={img._key}
      className={`absolute inset-0 transition-opacity duration-[4000ms] ${
        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Image
        src={img.asset.url}
        alt={img.alt ?? "Project image"}
        fill
        className="object-contain"
      />
    </div>
  ))}
</div>

      );
      }