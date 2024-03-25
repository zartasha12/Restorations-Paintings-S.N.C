import React from "react";
import { testimonials } from "../constant/ServicesData.js";

const Testimonial = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto gap-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our customers have nice things to say about us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ready to transform your space with our artistic painting or
            construction services? Contact us today to discuss your project
            requirements and discover how Restorations & Paintings S.N.C can
            bring your vision to life.
          </p>
        </div>

        <div className="my-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform opacity-100 scale-100`}
            >
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <img
                      src={testimonial.img}
                      alt=""
                      className="h-full w-auto"
                      style={{ maxHeight: "100%" }}
                    />
                  </span>

                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {testimonial.name}
                  </h3>

                  <p className="mt-5 text-base text-gray-500">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
