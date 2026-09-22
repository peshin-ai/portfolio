"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useTheme } from "next-themes";
import {
  navigation,
  profile,
  socialLinks,
} from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll,
      );
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4">
        <div
          className={[
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled
              ? "border-border/80 bg-background/78 shadow-panel backdrop-blur-xl"
              : "border-transparent bg-background/40 backdrop-blur-md",
          ].join(" ")}
        >
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.24em] text-foreground sm:text-base"
          >
            {profile.name}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-full"
            >
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="rounded-full"
            >
              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="rounded-full"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(
                  isDark ? "light" : "dark",
                )
              }
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(
                  isDark ? "light" : "dark",
                )
              }
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Open navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-border/70 bg-background p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
                  Menu
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Close navigation"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="mt-10 flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-border/60 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex gap-3 pt-8">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full"
                >
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex-1 rounded-full"
                >
                  <a
                    href={socialLinks[1].href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
