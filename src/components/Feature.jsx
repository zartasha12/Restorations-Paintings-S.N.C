import React from "react";
import featureimg from "../assets/fecture.svg";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t, i18n } = useTranslation("translation"); // Destructure i18n from useTranslation()

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="md:order-1">
          <h3 className="font-poppins font-semibold text-xl  text-black  mb-4">
            {t("featureTitle")}
          </h3>

          <ul className="list-disc pl-5 space-y-2  ">
            <li>{t("feature_1")}</li>
            <li> {t("feature_2")}</li>
            <li> {t("feature_3")}</li>
            <li> {t("feature_4")}</li>
            <li> {t("feature_5")}</li>
            <li> {t("feature_6")}</li>
            <li> {t("feature_7")}</li>
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
