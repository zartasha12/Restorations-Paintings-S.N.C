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
    <div className="relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:w-[400px] xl:w-[520px]">
      {images.map((image, index) => (
        <img
          key={`slide-${index}`}
          src={image.img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroImageSlider;
