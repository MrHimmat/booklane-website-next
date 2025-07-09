"use client";
import { useState, useEffect } from "react";

const pages = [
  {
    title: (
      <>
        <span className="text-black">book </span>
        <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Lane</span>
      </>
    ),
    subtitle: "",
    caption: ""
  },
  {
    title: <span className="text-blue-700 font-bold">Welcome to BookLane!</span>,
    subtitle: "Find, Buy, Sell",
    caption: "Used Books Easily"
  },
  {
    title: <span className="text-green-700 font-bold">Start Your Journey</span>,
    subtitle: "Join the Community",
    caption: "Share Knowledge"
  }
];

export default function AnimatedBook() {
  const [page, setPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-scroll through pages
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPage((currentPage) => (currentPage + 1) % pages.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000); // Change page every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePageChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage((p) => (p + 1) % pages.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="flex justify-center items-center mb-8">
      <div
        className="relative w-48 h-64 bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl shadow-2xl animate-gradient cursor-pointer select-none transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rotate-1"
        onClick={handlePageChange}
        title="Click to turn the page"
      >
        {/* Book Page */}
        <div className={`absolute inset-0 bg-white rounded-2xl m-3 flex flex-col items-center justify-center z-10 transition-all duration-500 ease-in-out hover:bg-gray-50 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-center">
            <div className="text-2xl font-bold mb-3">
              {page === 0 ? (
                <div className="flex flex-col items-center">
                  <span className="text-black text-3xl">book</span>
                  <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-5xl">Lane</span>
                </div>
              ) : (
                pages[page].title
              )}
            </div>
            {page === 0 ? null : (
              <>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-3 rounded-full"></div>
                <div className="text-sm text-gray-600 font-medium">{pages[page].subtitle}</div>
                <div className="text-xs text-gray-500">{pages[page].caption}</div>
              </>
            )}
          </div>
        </div>
        {/* Page indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === page ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 bg-size-200 animate-gradient z-0 pointer-events-none transition-all duration-300 hover:opacity-80"></div>
      </div>
    </div>
  );
} 