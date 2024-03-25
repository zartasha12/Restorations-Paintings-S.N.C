import React from "react";
import { Link } from "react-router-dom";
import HeroImageSlider from "./HeroImageSlider";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 mt-8 rounded-lg shadow-2xl bg-[#1f2937]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-10">
        <div className="lg:order-2">
          <h1 className="font-poppins font-semibold text-[28px] lg:text-[58px] text-[white]">
            {t("HeroHeading")}
          </h1>
          <p className="font-poppins font-normal text-gray-300 text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30.8px] max-w-[470px] mt-5">
            {t("HeroParagraph")}
          </p>
          <Link
            to="/aboutus"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-white disabled:pointer-events-none disabled:opacity-50 bg-[#ef4444] h-10 px-4 py-2 mt-10"
          >
            {t("More About")}
          </Link>
        </div>
        <div className="lg:order-1">
          <HeroImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
