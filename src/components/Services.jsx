import React from "react";
import { useTranslation } from "react-i18next";
import { ServicesData } from "../constant/ServicesData.js"; // Importing service data

const Services = () => {
  const { t } = useTranslation("services");
  const services = t("services", { returnObjects: true });
  const servicesArray = Object.values(services);

  return (
    <section className="bg-gray-100 py-10 rounded-xl shadow-lg">
      <div id="top"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 flex justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[rgba(255,64,0,0.66)] text-white hover:bg-secondary/80 px-4 py-2 ">
            {t("our services")}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
