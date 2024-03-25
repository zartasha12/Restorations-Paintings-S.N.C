import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="container rounded-xl bg-slate-50 mt-10 mb-10 text-black min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg mb-12">
                We'd love to hear from you! Whether you have questions about our
                services contact us.
              </p>
              <form className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your email"
                />
                <input
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Phone Number"
                />
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:col-span-2"
                  placeholder="Your message"
                  defaultValue={""}
                />

                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#1f2937]  text-white h-10 px-4 py-2 lg:col-start-1">
                  Send message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center md:items-start">
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
                    className="text-gray-400 mb-4"
                  >
                    <rect width={20} height={16} x={2} y={4} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Email us:</h3>
                  <p>
                    Email us for general queries, including marketing and
                    partnership opportunities.
                  </p>
                  <a className="text-[#dc2626] mt-2" href="#" rel="ugc">
                    restauritinteggi.snc@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center md:items-start">
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
                    className="text-gray-400 mb-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Call us:</h3>
                  <p>
                    Call us to speak to a member of our team. We are always
                    happy to help.
                  </p>
                  <a className="text-[#dc2626] mt-2" href="#" rel="ugc">
                    +3288818283
                  </a>
                </div>
                <div className="flex flex-col items-center md:items-start md:col-span-2">
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
                    className="text-gray-400 mb-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p>
                    Email us for general queries, including marketing and
                    partnership opportunities.
                  </p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-[#1f2937]  text-white h-10 px-4 py-2 mt-2">
                    Support center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
