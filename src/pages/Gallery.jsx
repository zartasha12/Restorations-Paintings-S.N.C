import React, { useState } from "react";
import { ImagesData } from "../constant/ImagesData.js";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation("translation");
  const [visibleImages, setVisibleImages] = useState(12); // Number of initially visible images
  const totalImages = ImagesData.length;

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 12); // Increase by 12 when "Load More" is clicked
  };

  return (
    <div className="gallery-container mt-16">
      <h1 className="text-center text-3xl font-bold mb-6">{t("ourGallery")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ImagesData.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={image.img} // Assuming `id` contains image source
              alt={`Image ${index + 1}`} // Alt text with the image index
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      {visibleImages < totalImages && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreImages}
            className="load-more-button inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 h-10 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-16 mt-5"
          >
            {t("loadMore")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
