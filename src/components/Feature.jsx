import React from "react";
import featureimg from "../assets/fecture.svg";

const Feature = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="md:order-1">
          <h3 className="font-poppins font-semibold text-xl  text-black  mb-4">
            Discover Restorations & Paintings S.N.C
          </h3>

          <ul className="list-disc pl-5 space-y-2  ">
            <li>Expert Restoration Services</li>
            <li>Creative Painting Solutions</li>
            <li>Comprehensive Construction Expertise</li>
            <li>Client-Centric Approach</li>
            <li>Years of Experience and Expertise</li>
            <li>Innovative Techniques and Materials</li>
            <li>Customer Satisfaction Guaranteed</li>
          </ul>
        </div>

        <div className="md:order-2">
          <div className="w-full h-full shadow-2xl rounded-lg overflow-hidden">
            <img src={featureimg} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
