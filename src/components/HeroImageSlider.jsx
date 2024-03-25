import React, { useState, useEffect } from "react";
import { images } from "../constant/ServicesData.js";

const HeroImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg"
      style={{
        width: "600px",
        height: "400px",
        aspectRatio: "600/400",
        objectFit: "cover",
      }}
    >
      {images.map((image, index) => (
        <img
          key={`slide-${index}`}
          src={images.img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroImageSlider;
