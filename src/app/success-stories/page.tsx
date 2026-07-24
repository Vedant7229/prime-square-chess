"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

function AchievementCard({
  item,
  delayMs,
}: {
  item: {
    name: string;
    badge: string;
    alt: string;
    src: any;
  };
  delayMs: number;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsIntersecting(true);
      return;
    }

    let observerFired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        observerFired = true;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Fallback: trigger animation after a short delay in case observer is blocked
    const timeout = setTimeout(() => {
      if (!observerFired) {
        setIsIntersecting(true);
      }
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className={`group bg-white border border-border-warm p-4 overflow-hidden rounded-xl hover:-translate-y-2 hover:shadow-lg ${prefersReducedMotion
        ? "opacity-100"
        : isIntersecting
          ? "animate-fade-rise-mobile"
          : "opacity-100 max-md:opacity-0"
        }`}
      style={{
        animationDelay: isIntersecting && !prefersReducedMotion ? `${delayMs}ms` : "0ms",
      }}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover transition-transform duration-[700ms] group-hover:scale-105 ${prefersReducedMotion
            ? "opacity-100 scale-100"
            : isIntersecting
              ? "animate-zoom-mobile"
              : "opacity-100 max-md:opacity-0"
            }`}
          style={{
            animationDelay: isIntersecting && !prefersReducedMotion ? `${delayMs}ms` : "0ms",
          }}
          sizes="(max-width: 768px) 100vw, 350px"
        />
        <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 font-label-md text-xs rounded-full shadow-sm">
          {item.badge}
        </div>
      </div>
      <h3 className="font-headline-md text-lg md:text-xl text-primary text-center mt-2 font-semibold">
        {item.name}
      </h3>
    </div>
  );
}
import Ns from "./Ns.jpeg";
import Vs from "./Vs.jpeg";
import Ps from "./Ps.jpeg";
import Vs2 from "./Vs2.jpeg";
import Dj from "./Dj.jpeg";
import Kp from "./kp.jpeg";
import Ns2 from "./ns2.jpeg";
import Sg from "./Sg.jpeg";

// Achievement cards data
const achievements = [
  {
    name: "Prisha Shah",
    badge: "Champion",
    alt: "Prisha Shah smiling at chess board with trophies",
    src: Ps,
  },
  {
    name: "Vraj Shah",
    badge: "Champion",
    alt: "Vraj Shah deep in thought at chess board",
    src: Vs,
  },
  {
    name: "Nishanth Chamarthi",
    badge: "Runner Up",
    alt: "Two kids shaking hands at chess board",
    src: Ns,
  },
];

// Testimonials data
const testimonials = [
  {
    parent: "Varun Gupta (USA)",
    child: "Shiven",
    quote:
      "Vedant has been an excellent chess coach for our son, Shiven. His patient and encouraging teaching style made learning chess enjoyable while helping Shiven develop stronger strategic thinking and confidence. We’ve seen a noticeable improvement in both Shiven’s skills and his enthusiasm for the game. We sincerely appreciate Vedant’s dedication and highly recommend him to any parent looking for a passionate and effective chess coach.",
    src: Sg,
  },
  {
    parent: "Rupal Patel (IND)",
    child: "Karm",
    quote:
      "Karm was always curious about chess, but Prime Square Chess Academy turned that curiosity into genuine enthusiasm. The coaching made learning enjoyable, and we could see his interest grow with every class. He now looks forward to playing, practices on his own, and is much more engaged than before. We're delighted to see how much he enjoys the game and appreciate the encouragement and guidance he has received.",
    src: Kp,
  },
  {
    parent: "Sireesh Chamarthi (USA)",
    child: "Nishanth",
    quote:
      "We're thrilled with our experience at the academy! Nishanth's passion for chess has skyrocketed, and it's all thanks to the fantastic coaching. The instructors are not only knowledgeable but also incredibly supportive, making even the most complex strategies fun and accessible. It's been amazing to see Nishanth's confidence grow, and his critical thinking skills develop. We're so proud to be a part of this academy, and we highly recommend it to anyone looking for a great learning experience!",
    src: Ns2,
  },
  {
    parent: "Vinti Jain (IND)",
    child: "Daivik",
    quote:
      "Our goal was simply to introduce Daivik to chess as a hobby, but the experience exceeded our expectations. The classes were engaging, and encouraged him to enjoy the game rather than feel pressured. He now plays chess regularly for fun and has developed a genuine interest in learning more. We're grateful to Amit Sir for developing his interest in chess. What started as a vacation activity has now become a meaningful hobby that he truly enjoys throughout the year.",
    src: Dj,
  },
  {
    parent: "Dr. Vinay Shah (IND)",
    child: "Vraj",
    quote:
      "Vraj has been part of Prime Square since the beginning of his chess journey. Through Amit sir's structured guidance and regular practice, he built a strong foundation and steadily improved his game. It has been wonderful to see him perform well in competitive tournaments, win several prizes, and earn his FIDE rating. Amit sir's dedication played an important role in shaping Vraj's early chess journey.",
    src: Vs2,
  },
  {
    parent: "Surya Abhilash (QAT)",
    child: "Devdatt",
    quote:
      "We enrolled our son in chess classes with Vedant Sir about a year ago, and it has been a wonderful experience. His teaching style is engaging and easy to understand, which helped my son develop a genuine interest in chess. Vedant Sir is patient, friendly, and very supportive. Under his guidance, my son started participating in tournaments and has even won a few medals. We are very happy with his progress. I highly recommend Vedant Sir to anyone looking for a dedicated and excellent chess coach for their child.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl6TWEQ130iACgZQgBKsBLXWzVO-5gDCsaK8FKunitRc82b-bw3kCbCJ68OwFFQZpomLrRSHoOa8b9UoZAEygFKuAmKN9bF7toAqpaeTAHlic1Zfi0FG-tYAihkFjW41iLBiJgObSp2HwpfelLAtm5Kvgll_EIk-xbqj4bp9PXadHU-ww8IncHztDmG4DKbqmu--41ECZ20bVqMafkdmYKxTWzFnCqkBus1MjbWJJfdKUmpwpI6x5P78JPDmwF9kpsNznGrpdryesZnF8",
  },
];

export default function SuccessStories() {
  return (
    <main className="flex flex-col">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeRiseMobile {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoomMobile {
          from {
            transform: scale(0.96);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-rise-mobile {
          animation: fadeRiseMobile 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-fill-mode: backwards;
        }
        .animate-zoom-mobile {
          animation: zoomMobile 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-fill-mode: backwards;
        }
      ` }} />
      {/* 1. Hero Header Banner */}
      <section className="relative pt-12 pb-12 md:py-16 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent -z-10" />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center mt-1 md:mt-12">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em] mb-3 md:mb-4 block text-xs md:text-sm">
            Our Students
          </span>
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-8 max-w-3xl mx-auto">
            Success Stories
          </h1>
          <p className="font-sans text-sm md:text-body-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Every achievement starts with a single move. Discover how our
            students have built confidence, sharpened their thinking, and
            celebrated tournament success through consistent coaching.
          </p>
        </div>
      </section>

      {/* 2. Student Achievements Grid */}
      <section className="bg-surface-white py-12 md:py-16 border-t border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="mb-10 md:mb-16 text-center md:text-left">
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-3 md:mb-4">
              Celebrating Student Achievements
            </h2>
            <p className="font-sans text-sm md:text-body-lg text-body-muted max-w-xl">
              Our students continue to grow through dedication, practice, and
              tournament experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((item, idx) => (
              <AchievementCard
                key={idx}
                item={item}
                delayMs={idx * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Parent Testimonials Section */}
      <section className="py-12 md:py-24 bg-[#FAFAFA] border-t border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-secondary font-label-md text-xs uppercase tracking-widest block mb-2 md:mb-3">
              HEAR FROM OUR PARENTS
            </span>
            <h2 className="font-display text-2xl md:text-headline-lg text-primary max-w-2xl mx-auto">
              Real Stories of Growth and Achievement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-10 border border-border-warm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-md group rounded-2xl"
              >
                <div>

                  <p className="font-sans text-sm md:text-base text-on-surface mb-6 md:mb-8 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-border-warm/50 pt-5 md:pt-6 mt-auto">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border-warm transition-transform group-hover:scale-105 duration-300">
                    <Image
                      src={t.src}
                      alt={t.parent}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-label-md text-sm md:text-label-md text-primary font-bold">
                      {t.parent}
                    </h4>
                    <p className="text-[10px] md:text-xs text-body-muted uppercase tracking-wider">
                      Parent of {t.child}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-12 md:py-24 bg-cta-deep-green text-surface-bright relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-radial from-secondary-container/10 to-transparent" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <h2 className="font-display text-2xl md:text-5xl mb-4 md:mb-6 max-w-4xl mx-auto leading-tight">
            Help Your Child Discover Their
            <br className="hidden md:inline" />
            Potential Through Chess.
          </h2>
          <p className="font-sans text-sm md:text-body-lg mb-8 md:mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
            Experience a personalized trial lesson with experienced FIDE Rated Coaches. Discover how structured coaching helps children improve with
            confidence.
          </p>
          <Link
            href="/book"
            className="inline-block bg-surface-bright text-primary font-button text-button px-8 py-3.5 md:px-10 md:py-5 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-md font-bold text-center"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}
