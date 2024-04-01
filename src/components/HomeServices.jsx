import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServicesData } from "../constant/ServicesData.js";
import "../constant/Custom.css";
import { useTranslation } from "react-i18next";

const HomeServices = () => {
  const { t } = useTranslation("services");
  const services = t("services", { returnObjects: true });
  const servicesArray = Object.values(services);

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
        <ul className="slick-dots" style={{ color: "black" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <section className="bg-gray-100 py-10 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("our services")}
        </h2>
        <Slider {...settings}>
          {servicesArray.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border text-card-foreground shadow-sm bg-white transition duration-300 ease-in-out transform hover:scale-105"
              data-v0-t="card"
            >
              <div className="p-6">
                {/* Image */}
                <img
                  src={ServicesData[index].img}
                  alt={ServicesData[index].altText}
                  className="w-full h-auto rounded-lg mb-4"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                {/* Service Title */}
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                {/* Service Description */}
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-10">
          <Link
            to="/services#top"
            className="text-sm bg-[#ef4444] text-white py-2 px-4 rounded-md hover:bg-red-400 focus:outline-none"
          >
            {t("See More")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
