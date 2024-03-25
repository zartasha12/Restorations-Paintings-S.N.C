import React from "react";

const Highlight = () => {
  return (
    <section className="conatiner bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            The Highlighting Part Of Our Solution
          </h3>
          <p>
            whether it's adding eye-catching paintings to interior spaces or
            having skilled builders maintain the stability of structures.
          </p>
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
              <h4 className="font-bold mb-2">Artistic Painting Expertise:</h4>
              <p>
                The company boasts a team of talented artists who specialize in
                creating captivating paintings that enhance interiors.
              </p>
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
              <h4 className="font-bold mb-2">
                Comprehensive Construction Services
              </h4>
              <p>
                Offers a comprehensive range of construction services, covering
                renovations, remodeling, interior and exterior painting,
                structural repairs, and new construction projects.
              </p>
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
              <h4 className="font-bold mb-2">Tailored Solutions</h4>
              <p>
                tailored solutions that meet the unique preferences and visions
                of their clients. Their ability to understand and execute on
                client requirements ensures that each project is completed to
                the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
