import React from "react";
import Services from "../components/Services.jsx";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { t, i18n } = useTranslation("services"); // Destructure i18n from useTranslation()

  return (
    <>
      <div className=" bg-[] bg-blend-multiply">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-12 pb-16">
            <div className="text-center">
              <a
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                href="#"
                rel="ugc"
              >
                {t("SERVICES")}
              </a>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {t("ServiceHeading")}
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                {t("ServiceParagraph")}
              </p>
            </div>
          </div>
        </div>
        <Services />
      </div>
    </>
  );
};

export default ServicePage;
