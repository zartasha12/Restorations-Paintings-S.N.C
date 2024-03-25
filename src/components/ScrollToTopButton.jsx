import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Function to check if user has scrolled enough to show the button
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener to check scroll position
    window.addEventListener("scroll", toggleVisibility);

    // Clean up function
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsScrolling(false);
    }, 300); // Adjust delay time as needed
  };

  return (
    <div>
      {isVisible && (
        <button
          className={`fixed bottom-8 right-8 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg z-10 flex items-center justify-center transition-opacity duration-500 hover:opacity-80 ${
            isScrolling && "pointer-events-none" // Disable button during scrolling
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
