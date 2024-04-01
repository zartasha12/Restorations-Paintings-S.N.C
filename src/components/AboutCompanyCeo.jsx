import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { construction5, heroimg } from "../assets/index.js";
import { useTranslation } from "react-i18next";

const AboutCompanyCeo = () => {
  const { t } = useTranslation("company");

  return (
    <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 py-8 bg-slate-100 shadow-xl rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-center ">
        <div className="md:flex md:items-center">
          <img
            src={construction5}
            alt="Business"
            className="rounded-lg mb-4 "
          />
        </div>
        <div className="md:flex md:flex-col  items-center">
          <div className="item-center lg:p-10 lg:mt-6">
            <h2 className=" text-xl md:text-2xl font-semibold mb-4">
              {t("aboutCompany")}
            </h2>
            <p className="mb-6">{t("companyDetails")}</p>
            <Link
              to="/aboutus#top"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#ff3e00] text-white"
            >
              {t("companyButton")}
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0   items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img className="aspect-square h-full w-full" alt="" src={heroimg} />
          </span>
          <div className="md:ml-4 md:mt-0">
            <h3 className="text-lg font-semibold mt-4 mb-2">{t("CEO_Name")}</h3>
            <p className="text-sm mb-2">{t("CEO_company")}</p>
            <p className="text-sm mb-4">{t("CEO_pargraph")}</p>
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="font-semibold">{t("Mobile")} + 39 3288818283</p>
                <p>restauritinteggi.snc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyCeo;
