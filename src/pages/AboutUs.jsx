import React from "react";

import { useTranslation } from "react-i18next";
import Aboutsection1 from "../components/Aboutsection1.jsx";

const AboutUs = () => {
  const { t } = useTranslation(); // Hook for accessing translation functions
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
        <Aboutsection1 />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-md shadow-lg">
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
                      className="h-6 w-6 text-white"
                    >
                      <path d="M5 7 3 5" />
                      <path d="M9 6V3" />
                      <path d="m13 7 2-2" />
                      <circle cx={9} cy={13} r={3} />
                      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
                      <path d="M16 16h2" />
                    </svg>
                  </span>
                </div>

                <p className="mt-5 text-base text-gray-500">
                  In the realm of artistic painting, our team of talented
                  artists specializes in creating captivating works that breathe
                  life into interiors, elevate atmospheres, and inspire
                  admiration.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-lg">
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
                      className="h-6 w-6 text-white"
                    >
                      <line x1={12} x2={12} y1={2} y2={22} />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </span>
                </div>

                <p className="mt-5 text-base text-gray-500">
                  From renovations and remodeling to interior and exterior
                  painting, structural repairs, and new construction projects,
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-md shadow-lg">
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
                      className="h-6 w-6 text-white"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1={12} x2={12} y1={15} y2={3} />
                    </svg>
                  </span>
                </div>

                <p className="mt-5 text-base text-gray-500">
                  Whether it's enhancing a room with a splash of color or
                  constructing a new building from the ground up, we combine
                  creativity, craftsmanship, and professionalism to achieve
                  results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Our values
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to embark on a journey with us
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Reach out to us today to discuss your project requirements and
              experience firsthand how Restorations & Paintings S.N.C can bring
              your vision to life.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg">
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
                        className="h-6 w-6 text-white"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Excellence
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    We are committed to excellence in every aspect of our work,
                    striving to exceed expectations and deliver exceptional
                    results that showcase our dedication to craftsmanship and
                    quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md shadow-lg">
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
                        className="h-6 w-6 text-white"
                      >
                        <polyline points="9 17 4 12 9 7" />
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Client Satisfaction
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    We prioritize client satisfaction above all else,
                    understanding that our success is intricately linked to the
                    success of our clients. We listen attentively to their
                    needs, communicate openly, and go above and beyond to ensure
                    their expectations are not only met but exceeded.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-md shadow-lg">
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
                        className="h-6 w-6 text-white"
                      >
                        <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
                        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Sustainability
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    From responsibly sourced materials to eco-friendly
                    construction methods, we strive to uphold environmental
                    stewardship in all our endeavors.easure what matters with
                    Untitled's easy-to-use reports. You can filter, export, and
                    drill down on the data in a couple clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-md shadow-lg">
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
                        className="h-6 w-6 text-white"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Integrity
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Integrity forms the foundation of our interactions with
                    clients, partners, and team members. We conduct ourselves
                    with honesty, transparency, and respect, fostering trust and
                    long-lasting relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
