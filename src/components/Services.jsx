import React from "react";
import { ServicesData } from "../constant/ServicesData.js";

const Services = () => {
  return (
    <section className="bg-gray-100 py-10 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 flex justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[rgba(255,64,0,0.66)] text-white hover:bg-secondary/80 px-4 py-2 ">
            Our Services
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => (
            <div
              key={index} // Use index as the key
              className="rounded-lg border text-card-foreground shadow-sm bg-white transition duration-300 ease-in-out transform hover:scale-105"
              data-v0-t="card"
            >
              <div className="p-6">
                <img
                  src={service.img}
                  alt={service.altText}
                  className="w-full h-auto rounded-lg mb-4"
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
        </div>
      </div>
    </section>
  );
};

export default Services;
