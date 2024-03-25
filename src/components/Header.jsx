import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/R.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English(US)");
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation()

  const [open, setOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Use i18n object to change the language
  };

  return (
    <header className="mx-auto container shadow-xl h-[100px] ">
      <nav key="1" className="px-2 sm:px-4 rounded">
        <div className="flex justify-between items-center mx-auto">
          <div className="z-50  md:w-auto w-full flex justify-between">
            <Link to="" className="flex items-center">
              <img src={logo} className="mr-3 w-[100px]" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                {t("LANGUAGE")}{" "}
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {/* Dropdown menu for language selection */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {/* Example language options */}
                    <button
                      onClick={() => changeLanguage("en")} // Call changeLanguage function
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("it")} // Call changeLanguage function
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      italian
                    </button>
                    {/* Add more language options as needed */}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2   dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              data-collapse-toggle="mobile-menu-2"
              type="button"
            >
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
              {open && (
                <div
                  className={`
                md:hidden bg-gray-200 fixed w-full top-0 overflow-y-auto bottom-0 py-32 pl-20 
                duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
                >
                  <div className="py-2">
                    <Link
                      to="/home"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {t("HOME")}
                    </Link>
                    <Link
                      to="/aboutus"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {t("ABOUT US")}
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {t("SERVICES")}
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      {t("CONTACT")}
                    </Link>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 ">
              <li>
                <Link
                  to="/home"
                  className="block py-2  text-[18px] font-bold text-black rounded lg:bg-transparent lg:p-0 hover:text-[#ff3e00]"
                  aria-current="page"
                >
                  {t("HOME")}
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block py-2  text-[18px] font-bold texttext-black rounded  lg:bg-transparent lg:p-0 hover:text-[#ff3e00]"
                >
                  {t("ABOUT US")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2  text-[18px] font-bold texttext-black rounded  lg:bg-transparent lg:p-0 hover:text-[#ff3e00]"
                >
                  {t("SERVICES")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2  text-[18px] font-bold texttext-black rounded lg:bg-transparent lg:p-0 hover:text-[#ff3e00]"
                >
                  {t("CONTACT")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
