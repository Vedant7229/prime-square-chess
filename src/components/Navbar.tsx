"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaterialIcon from "./MaterialIcon";

const logoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCX-vaOihRrs0VH5_rna6FulGyZxI_cyUJ0PZrZw60ZCRBbB9-54i_1AJrIW0JJMji4S233pok-PNQUG7qewEJ6Bmd09WpKXT4_xXwG2LsgC-68Ej2GifMyHRHR_io6TUUbHQBhKBO7SJ7PPzOUZL7xDh6QvveIpBVkme0bhKuVDXvMilLkSTh4pIp1TT-VhhQqtXq1YrtVmXYH1pQt8YpMo7phmc5X3AeA9LwvxD_DOf_lvsZ6zLnn_fQzVSe-bn_AbU27tHFmQSD9";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  // Hide navbar on scroll, show when at top
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setNavVisible(true);
        return;
      }
      if (window.scrollY > 50) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md max-md:border-b max-md:border-border-warm/60 max-md:shadow-sm md:bg-surface-bright/90 md:border-b md:border-border-warm md:editorial-shadow transition-transform duration-300 ease-in-out ${
      navVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-margin-desktop h-[80px] md:h-[92px]">
        {/* Logo */}
        <Link href="/" className="h-16 w-56 flex items-center relative">
          <Image
            src={logoUrl}
            alt="Prime Square Chess Academy Logo"
            fill
            className="object-contain -ml-4"
            priority
            sizes="(max-width: 768px) 180px, 230px"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 justify-center mx-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-label-md text-label-md py-2 px-1 transition-all duration-300 ease-out group ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <span>{link.label}</span>
                {/* Smooth Animated Active Underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-primary rounded-full transition-all duration-300 ease-out origin-left ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="hidden md:inline-block bg-primary text-on-primary font-button text-button px-6 py-3 rounded-lg hover:bg-primary-container active:scale-95 duration-150 transition-all text-center shadow-xs"
          >
            Book Your Free Trial
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-primary hover:bg-surface-container rounded-lg focus:outline-none transition-colors active:scale-95"
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}>
              <MaterialIcon
                name={mobileMenuOpen ? "close" : "menu"}
                className="text-2xl block"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu with smooth animation */}
      <div
        className={`md:hidden fixed top-[80px] md:top-[92px] left-0 w-full h-[calc(100vh-80px)] md:h-[calc(100vh-92px)] bg-surface-bright z-40 border-t border-border-warm flex flex-col p-6 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 mt-6">
          {navLinks.map((link, idx) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-headline-md text-xl md:text-2xl transition-all duration-300 py-3.5 px-4 rounded-xl flex items-center justify-between group active:scale-[0.98] ${
                  isActive
                    ? "text-primary font-bold bg-primary/10 shadow-xs"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                } ${mobileMenuOpen ? "opacity-0 animate-fade-up" : ""}`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{link.label}</span>
                <MaterialIcon
                  name="chevron_right"
                  className={`text-xl transition-transform duration-300 ${
                    isActive ? "text-primary translate-x-1" : "text-on-surface-variant/40 group-hover:translate-x-1"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className={`mt-auto mb-16 px-2 ${mobileMenuOpen ? "opacity-0 animate-fade-up" : ""}`} style={{ animationDelay: `${navLinks.length * 50}ms` }}>
          <Link
            href="/book"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full bg-primary text-on-primary font-button text-button px-6 py-4 rounded-xl hover:bg-primary-container active:scale-[0.98] duration-150 transition-all text-center shadow-md font-semibold text-lg"
          >
            Book Your Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
