"use client";

import React, { useState } from "react";
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

  return (
    <header className="sticky top-0 w-full z-50 bg-surface-bright/90 backdrop-blur-md border-b border-border-warm editorial-shadow">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-margin-desktop h-[92px]">
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
                className={`font-label-md text-label-md transition-colors duration-300 ${isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="hidden md:inline-block bg-primary text-on-primary font-button text-button px-6 py-3 rounded-lg hover:bg-primary-container active:scale-95 duration-150 transition-all text-center"
          >
            Book Your Free Trial
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-surface-container rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <MaterialIcon
              name={mobileMenuOpen ? "close" : "menu"}
              className="text-2xl"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[92px] left-0 w-full h-[calc(100vh-92px)] bg-surface-bright/95 backdrop-blur-lg z-40 border-t border-border-warm flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-headline-md text-2xl transition-colors duration-300 py-2 border-b border-border-warm/50 ${isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto mb-16">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-primary text-on-primary font-button text-button px-6 py-4 rounded-lg hover:bg-primary-container active:scale-95 duration-150 transition-all text-center"
            >
              Book Your Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
