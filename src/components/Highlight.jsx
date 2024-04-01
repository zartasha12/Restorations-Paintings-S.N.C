import React from "react";
import { useTranslation } from "react-i18next";

const Highlight = () => {
  const { t, i18n } = useTranslation("translation"); // Destructure i18n from useTranslation()

  return (
    <section className="conatiner bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">{t("homeHighlightTitle")}</h3>
          <p>{t("homeHighlightParagraph")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="rounded-lg border text-card-foreground shadow-sm bg-white"
            data-v0-t="card"
          >
            <div className="p-6">
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
                className="text-gray-500 mb-4"
              >
                <path d="M7 13h4" />
                <path d="M15 13h2" />
                <path d="M7 9h2" />
                <path d="M13 9h4" />
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
              </svg>
              <h4 className="font-bold mb-2">{t("homeHighlight_1_title")}</h4>
              <p>{t("homeHighlight_1_Paragraph")}</p>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground shadow-sm bg-white"
            data-v0-t="card"
          >
            <div className="p-6">
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
                className="text-gray-500 mb-4"
              >
                <polyline points="9 17 4 12 9 7" />
                <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              </svg>
              <h4 className="font-bold mb-2">{t("homeHighlight_2_title")}</h4>
              <p>{t("homeHighlight_2_Paragraph")}</p>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground shadow-sm bg-white"
            data-v0-t="card"
          >
            <div className="p-6">
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
                className="text-gray-500 mb-4"
              >
                <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
                <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
                <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
              </svg>
              <h4 className="font-bold mb-2">{t("homeHighlight_3_title")}</h4>
              <p>{t("homeHighlight_3_Paragraph")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
