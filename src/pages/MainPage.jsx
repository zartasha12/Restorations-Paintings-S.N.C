import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import HeroSection from "../components/HeroSection";
import Highlight from "../components/Highlight";
import Feature from "../components/Feature";
import { useTranslation } from "react-i18next";
import Stats from "../components/Stats";

import Bussines from "../components/Bussines";
import Testimonial from "../components/Testimonial";
import AboutCompanyCeo from "../components/AboutCompanyCeo";
import HomeServices from "../components/HomeServices";

const MainPage = () => {
  const { t, i18n } = useTranslation("translation"); // Destructure i18n from useTranslation()

  return (
    <div className="container w-full">
      <HeroSection />
      <Stats />
      <Highlight />
      <Feature />
      <AboutCompanyCeo />

      <HomeServices />
      <section className="bg-red-500 text-white py-10 mt-10 mb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">{t("helpingTeam_title")}</h3>
          <p className="mb-6 px-10">{t("helpingTeam_Paragraph")}</p>
          <Link
            to="/contact#top"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            {t("Contact Us")}
          </Link>
        </div>
      </section>

      <Testimonial />
    </div>
  );
};

export default MainPage;
