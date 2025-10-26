import React, { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { animate } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    link: { label: string; href: string }
  ) => {
    e.preventDefault();
    const id = link.href.replace("#", "");
    const el = document.getElementById(id);
    const isHome = id === "home";
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY + (isHome ? -50 : 0);
      animate(window.scrollY, y, {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 flex justify-center transition-all duration-300">
      <div
        className={`transition-all duration-300 shadow-lg text-white ${
          scrolled
            ? "max-w-5xl rounded-b-2xl w-full bg-gray-900"
            : "w-full bg-gray-900"
        }`}
        style={{ maxWidth: scrolled ? "80rem" : "100%" }}
      >
        <div
          ref={headerRef}
          className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
            scrolled ? "mx-auto" : "w-full "
          }`}
        >
          <span className="text-2xl font-extrabold tracking-tight select-none">
            Tuan Ung
          </span>
          <nav className="flex gap-4 md:gap-8 text-base font-semibold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-2 py-1 hover:text-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
