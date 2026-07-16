import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLogoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCX-vaOihRrs0VH5_rna6FulGyZxI_cyUJ0PZrZw60ZCRBbB9-54i_1AJrIW0JJMji4S233pok-PNQUG7qewEJ6Bmd09WpKXT4_xXwG2LsgC-68Ej2GifMyHRHR_io6TUUbHQBhKBO7SJ7PPzOUZL7xDh6QvveIpBVkme0bhKuVDXvMilLkSTh4pIp1TT-VhhQqtXq1YrtVmXYH1pQt8YpMo7phmc5X3AeA9LwvxD_DOf_lvsZ6zLnn_fQzVSe-bn_AbU27tHFmQSD9";



export default function Footer() {
  return (
    <footer className="bg-primary pt-12 md:pt-section-gap pb-12 max-md:pb-8 text-surface-bright/80">
      <div className="max-w-container-max mx-auto px-6 max-md:px-5 md:px-margin-desktop">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-gutter mb-12 md:mb-20 items-start">
          {/* Logo & Info — centered on mobile */}
          <div className="space-y-5 md:space-y-6 md:pr-8 flex flex-col max-md:items-center max-md:text-center">
            <div className="relative w-48 md:w-56 h-14 md:h-16 max-md:mx-auto">
              <Image
                src={footerLogoUrl}
                alt="Prime Square Logo"
                fill
                className="object-contain brightness-0 invert -ml-4 max-md:ml-0"
                sizes="230px"
              />
            </div>
            <p className="text-[13px] md:text-sm leading-relaxed text-surface-bright/70 max-w-md">
              Prime Square Chess Academy offers structured online chess
              education through personalized coaching from experienced
              tournament players and FIDE-rated coaches. Proudly supporting
              students across the USA, UK, Canada, Qatar, India, and beyond.
            </p>
            <div className="pt-1 md:pt-2 space-y-4 max-md:text-center w-full">
              <p className="text-[13px] md:text-sm text-surface-bright/90 font-medium break-all max-md:break-normal">
                Email - primesquarechessacademy@gmail.com
              </p>
              {/* Social Icons — larger touch targets on mobile */}
              <div className="flex gap-3 md:gap-4 items-center max-md:justify-center">
                <a
                  href="#"
                  className="w-12 h-12 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 active:bg-surface-bright/25 transition-all p-2.5 active:scale-95"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-full h-full">
                    <path fill="rgb(255, 248, 248)" d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=918980635996&text=Hi%21+I+am+interested+in+chess+classes.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 active:bg-surface-bright/25 transition-all p-2.5 active:scale-95"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-full h-full">
                    <path fill="rgb(255, 248, 248)" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/primesquarechess?igsh=MWgzdmExNzNsaXluNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface-bright/10 hover:bg-surface-bright/20 active:bg-surface-bright/25 transition-all p-2.5 active:scale-95"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-full h-full">
                    <path fill="rgb(255, 248, 248)" d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider on mobile between brand info and link columns */}
          <div className="max-md:col-span-1 max-md:border-t max-md:border-surface-bright/10 max-md:-mt-4 max-md:pt-0 md:hidden" aria-hidden="true" />

          {/* Link columns — stacked vertically on mobile, individual cols on desktop */}
          <div className="max-md:flex max-md:flex-col max-md:gap-8 md:contents">
            {/* Programs Links */}
            <div className="max-md:text-center flex flex-col max-md:items-center">
              <h6 className="font-label-md text-label-md text-surface-bright pb-2 border-b border-surface-bright/10 mb-5 md:mb-6 uppercase tracking-widest text-[11px] md:text-label-md w-fit max-md:mx-auto">
                Programs
              </h6>
              <ul className="space-y-1 md:space-y-2.5">
                {[
                  "Beginner Foundations",
                  "Intermediate Masterness",
                  "Advanced Pro",
                  "One to One Classes",
                  "Group Classes",
                ].map((p) => (
                  <li key={p}>
                    <Link
                      href="/programs"
                      className="hover:text-surface-bright transition-colors text-[13px] md:text-sm py-2 md:py-1.5 block"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Links */}
            <div className="max-md:text-center flex flex-col max-md:items-center">
              <h6 className="font-label-md text-label-md text-surface-bright pb-2 border-b border-surface-bright/10 mb-5 md:mb-6 uppercase tracking-widest text-[11px] md:text-label-md w-fit max-md:mx-auto">
                Explore
              </h6>
              <ul className="space-y-1 md:space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Success Stories", href: "/success-stories" },
                  { label: "Programs", href: "/programs" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-surface-bright transition-colors text-[13px] md:text-sm py-2 md:py-1.5 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="max-md:text-center flex flex-col max-md:items-center">
              <h6 className="font-label-md text-label-md text-surface-bright pb-2 border-b border-surface-bright/10 mb-5 md:mb-6 uppercase tracking-widest text-[11px] md:text-label-md w-fit max-md:mx-auto">
                Support
              </h6>
              <ul className="space-y-1 md:space-y-2.5">
                {[
                  { label: "Contact Us", href: "/book#help" },
                  { label: "Book Your Free Trial", href: "/book" },
                  { label: "FAQs", href: "/faqs" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-surface-bright transition-colors text-[13px] md:text-sm py-2 md:py-1.5 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-surface-bright/10 text-center text-[11px] md:text-xs max-md:px-2 text-surface-bright/50">
          <p>© 2026 Prime Square Chess Academy. All rights reserved. Globally Trusted.</p>
        </div>
      </div>
    </footer>
  );
}
