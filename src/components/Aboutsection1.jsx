import React from "react";
import constructionImage from "../assets/construction2.jpg";
import { Link } from "react-router-dom";

const Aboutsection1 = () => {
  return (
    <div
      className="bg-center bg-no-repeat w-full bg-cover bg-gray-600 bg-blend-multiply"
      style={{ backgroundImage: `url(${constructionImage})` }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to Restorations & Paintings S.N.C
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          where artistic excellence meets construction expertise. With a rich
          legacy of craftsmanship and a dedication to quality, we stand as a
          distinguished company renowned for our proficiency in artistic
          painting and construction services.{" "}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/contact"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-blue-800 dark:focus:ring-blue-900"
          >
            Contact
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection1;
