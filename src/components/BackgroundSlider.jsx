import React, { useState, useEffect } from "react";

const images = [
  "url(src/assets/construction2.jpg)",
  "url(src/assets/painting4.jpg)",
  "url(src/assets/construction9.jpg)",
]; // Replace 'image1.jpg', 'image2.jpg', 'image3.jpg' with your image paths

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-center bg-no-repeat w-full bg-cover bg-gray-700
      bg-blend-multiply"
      style={{ backgroundImage: images[currentImageIndex] }}
    ></div>
  );
};

export default BackgroundSlider;
