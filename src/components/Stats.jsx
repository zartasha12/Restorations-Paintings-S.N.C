import React from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container bg-white p-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-lg bg-black p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width={20} height={14} x={2} y={5} rx={2} />
              <line x1={2} x2={22} y1={10} y2={10} />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold "> {t("1000+")}</h3>
          <p className="text-sm text-gray-500">{t("1000+ Paragraph")}</p>
        </div>
        <div className="text-center">
          <div className="mb-4 inline-block rounded-lg bg-black p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold ">{t("24/7")}</h3>
          <p className="text-sm text-gray-400">{t("24/7 Paragraph")}</p>
        </div>
        <div className="text-center">
          <div className="mb-4 inline-block rounded-lg bg-black p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1={12} x2={12} y1={20} y2={10} />
              <line x1={18} x2={18} y1={20} y2={4} />
              <line x1={6} x2={6} y1={20} y2={16} />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold ">{t("40+")}</h3>
          <p className="text-sm text-gray-500">{t("40+ Paragraph")}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
