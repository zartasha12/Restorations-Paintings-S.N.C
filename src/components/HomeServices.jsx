import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServicesData } from "../constant/ServicesData.js";
import "../constant/Custom.css";

const HomeServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick-slider", // Custom class for the slider
    slide: "slick-slide", // Custom class for individual slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="bg-gray-100 py-10 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <Slider {...settings}>
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg border text-card-foreground shadow-sm bg-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              data-v0-t="card"
            >
              <div className="p-6">
                <img
                  src={service.img}
                  alt={service.altText}
                  className="w-full h-auto rounded-lg mb-4"
                  width={300}
                  height={200}
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
                {service.details && (
                  <ul className="list-inside list-disc space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-10">
          <button className="text-sm bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
