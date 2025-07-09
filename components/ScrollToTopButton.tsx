"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-2xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gradient-to-r from-blue-500 to-green-400 text-white text-2xl hover:scale-110 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none '}`}
      style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.15)' }}
    >
      ↑
    </button>
  );
} 