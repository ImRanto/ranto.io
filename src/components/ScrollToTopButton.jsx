"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all 
      bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Retour en haut"
    >
      <FaArrowUp size={20} />
    </button>
  );
}

export default ScrollToTopButton;