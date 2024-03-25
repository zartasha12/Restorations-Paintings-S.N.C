import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation()
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg mb-4">
            Restorations & Paintings S.N.C
          </div>
          <p className="text-gray-400">{t("CompanyDetailFooter")}</p>
          <div className="mt-12">
            <h4 className="font-bold text-lg mb-4">Socials</h4>
            <div className="flex space-x-4">
              <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
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
                  className="w-6 h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
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
                  className="w-6 h-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
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
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width={4} height={12} x={2} y={9} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </Link>
              <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
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
                  className="w-6 h-6"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">{t("Quick Links")}</h4>
          <nav className="flex flex-col space-y-2">
            <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
              {t("HOME")}
            </Link>
            <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
              {t("ABOUT US")}
            </Link>
            <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
              {t("SERVICES")}
            </Link>
            <Link to="" className="hover:text-gray-300" href="#" rel="ugc">
              {t("CONTACT")}
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">{t("Location")}</h4>
          <address className="not-italic">
            <p className="mb-2">Via Giovanni Pascoli 11 Carpi (Mo)</p>
            <p className="mb-2">(+39) 3288818283</p>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.360744582911!2d10.873762675720151!3d44.77345037926162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ff2ce51268e1d%3A0x9fd4e41f72b295a3!2sVia%20Giovanni%20Pascoli%2C%2011%2C%2041012%20Carpi%20MO%2C%20Italy!5e0!3m2!1sen!2ses!4v1711288244034!5m2!1sen!2ses"
            width="600"
            height="250"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
