import React from "react";
import { construction5, heroimg } from "../assets/index.js";

const AboutCompanyCeo = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 py-8 bg-slate-100 shadow-xl rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 ">
        <div className="md:flex md:items-center">
          <img
            src={construction5}
            alt="Business"
            className="rounded-lg mb-4 md:mb-0 md:mr-4"
          />
        </div>
        <div className="md:flex md:flex-col  items-center">
          <div className="item-center lg:p-10 lg:mt-10">
            <h2 className=" text-xl md:text-2xl font-semibold mb-4">
              About Our Company
            </h2>
            <p className="mb-6">
              Restorations & Paintings S.N.C. is a famous business known for its
              proficiency in providing construction services and artistic
              painting. With a long history of fine craftsmanship and a
              dedication to quality, we provide a wide range of services that
              are specifically designed to satisfy the various demands of our
              customers.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#ff3e00] text-white">
              MORE ABOUT OUR COMPANY
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0  lg:w-[520px] items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full"
            alt="Shahid Gondal"
            src={heroimg}
          />
        </span>
        <div className="md:ml-4 md:mt-0">
          <h3 className="text-lg font-semibold mt-4 mb-2">AFTAB</h3>
          <p className="text-sm mb-2">CEO of Coompany</p>
          <p className="text-sm mb-4">
            To be the premier provider of targeted specialized financial
            services in the Italy.
          </p>
          <div className="flex justify-between items-center text-sm">
            <div>
              <p className="font-semibold">Mob. + 32 88818283</p>
              <p>restauritinteggi.snc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyCeo;
