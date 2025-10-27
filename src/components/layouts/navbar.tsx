import React, { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0].href);
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
        el.getBoundingClientRect().top + window.scrollY + (isHome ? -100 : 0);
      animate(window.scrollY, y, {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }
    setDrawerOpen(false);
    setActiveSection(link.href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      // Section detection
      let found = NAV_LINKS[0].href;
      for (const link of NAV_LINKS) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = link.href;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-4 md:gap-8 text-base font-semibold relative">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-2 py-1 hover:text-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 ${
                    isActive ? "text-yellow-300" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-0.5"
                    style={{
                      background: isActive
                        ? "linear-gradient(90deg, #facc15 60%, #fbbf24 100%)"
                        : "transparent",
                      borderRadius: 2,
                      transition: "background 0.3s",
                    }}
                  />
                </a>
              );
            })}
          </nav>
          {/* Mobile menu icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-800 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
        {/* Mobile drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-60 flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="ml-auto w-64 bg-gray-900 h-full shadow-lg flex flex-col p-6"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              >
                <button
                  className="self-end mb-6 p-2 rounded hover:bg-gray-800"
                  aria-label="Close menu"
                  onClick={() => setDrawerOpen(false)}
                >
                  <X size={28} strokeWidth={2} />
                </button>
                <nav className="flex flex-col gap-6 text-lg font-semibold">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={`px-2 py-1 hover:text-yellow-300 transition ${
                          isActive ? "text-yellow-300" : ""
                        }`}
                        onClick={(e) => handleNavClick(e, link)}
                      >
                        {link.label}
                        {isActive && (
                          <span
                            className="block h-0.5 mt-1 w-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #facc15 60%, #fbbf24 100%)",
                              borderRadius: 2,
                            }}
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
