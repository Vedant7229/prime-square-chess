"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import Accordion from "@/components/ui/Accordion";

function MobileAnimatedCard({
  children,
  className,
  delayMs,
}: {
  children: React.ReactNode;
  className?: string;
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

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${isIntersecting
        ? "max-md:opacity-100 max-md:translate-y-0"
        : "max-md:opacity-0 max-md:translate-y-5"
        }`}
      style={{
        transitionDelay: isIntersecting ? `${delayMs}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
import Level1 from "./Level 1.png";
import Level2 from "./Level 2.png";
import Level3 from "./Level 3.png";
import Level4 from "./Level 4.png";
import Level5 from "./Level 5.png";


// Levels data
const levels = [
  {
    num: "01",
    title: "Beginner I",
    level: "Level 01",
    desc: "Introduce your child to chess and its great possibilities. By the end, they know how to play by rules and basic strategies.",
    icon: Level1,
    alt: "Pawn Icon",
    bullets: [
      "Standard International Chess Rules",
      "Piece movement and Importance",
      "Center Control",
      "Basic checkmates and Types of Draws",
    ],
  },
  {
    num: "02",
    title: "Beginner II",
    level: "Level 02",
    desc: "Master piece coordination, king safety and piece development. Learn basic tactical motifs like fork, pin, and skewer.",
    icon: Level2,
    alt: "Knight Icon",
    bullets: [
      "Master Piece Coordination",
      "King Safety",
      "Piece Development",
      "Simple Tactics",
    ],
  },
  {
    num: "03",
    title: "Intermediate I",
    level: "Level 03",
    desc: "Master concepts of endgame. Improve game planning & advance move calculation. Exploring piece sacrifices and central control.",
    icon: Level3,
    alt: "Rook Icon",
    bullets: [
      "Master concepts of endgame",
      "Improve game planning",
      "Advance move calculation",
      "Piece sacrifices",
    ],
  },
  {
    num: "04",
    title: "Intermediate II",
    level: "Level 04",
    desc: "Elevate to professional skills with mastery of tactics. Compete to win with advanced competitive skills.",
    icon: Level4,
    alt: "Queen Icon",
    bullets: [
      "Advanced Tactics",
      "Multi Move calculation",
      "Game Analysis",
      "Tournament Winning Strategies",
    ],
  },
  {
    num: "05",
    title: "Advanced",
    level: "Level 05",
    desc: "Game analysis and insights from games of top GMs and World Chess Champions. Excel in deep calculation with advanced traps and tricks.",
    icon: Level5,
    alt: "Swords Icon",
    bullets: [
      "Advanced tactical patterns",
      "Grandmaster game analysis",
      "Advanced positional planning",
    ],
  },
];

// Ecosystem features
const ecosystem = [
  {
    title: "Structured Curriculum",
    desc: "A structured learning roadmap aligned with international standards and personalized for every student.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3d7fLQNGB21atNSWq9Rzf6Me6i04Bs_tkeZ43TqZWyXQCungUM0eG5q1WO9tvTBnfyeFggm-WJc0Uk923eIqzhIKPyZozmuzVPhSMRJ7E6mPd93Oy5xvOZQJUtCykcHTuNHCh7vvlFB_we55TupxOpN-sXwQClMkPk0nwQD2Q8IQ5jVG5s1mnaezX8054OEkhYBrp-ebHj8CbV1LJdZD5HO8URKgj4R5XBuFz_goQAFn0TO-76OnuR1sPMZFxw8iMJXSMMivij7da",
  },
  {
    title: "Regular Practice",
    desc: "Weekly practice sessions during live session to sharpen tactical skills under real game pressure.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG_vqOeGjHYq-wi8isfO2KLibG7uHJaZjVsBj-TFbqrMjN3_LUwvaiN_hzFX6kpfKdtpvtYM1OPs0mAy4V6lRtreQWh5adgFPalwE2NCn7gQy9mb_iStja2zsKUsZMpV2Jgj5BMQ-w4CfjSnP0S6t7iNJd5XQhuQakWUUEH0VMyJl-giBsecT_vfeK_UdOrt_m1hNE43rsoKkKPuqC7JpGDiUHtyj2GR-Fpf3NxywyDyeb7GsGXuJjDMWRqZetUlS7GIX40WxYYHy0",
  },
  {
    title: "Personalized Feedback",
    desc: "Detailed game analysis and improvement insights after every training session.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0B7THKcpKL3tDnPvzmOgOFqGLG7ikSoeOa2XwIbh-YxzBplSaZaf4beG6Yr5JPKdND2ygFsxmMU-q5obxR2LHNVeD2bt2YmOGMz6qNj4vENPUEM6FD7mIdL5dsvTrxB4es4vaMKEPFRXtnR_Mwtia_4T3PGaSxtFWg8ZxAyWgIiSJ8Cpv5eooLgwKcuv1P0TTjjJDzt_KSgmImZear0vpB1g5HYevOnLQLrJZkBskcujhqJfKT3BFp1g4oR_QsS9lPH4LNYO9jUK4",
  },
  {
    title: "Tournament Prep",
    desc: "Extra preparation classes, targeted practice games, and strategic guidance before tournaments.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVor8FP-kHJzc6uQ7d-uVpoAB1v6YaWv227vhp9flVrZImVdpa_ul9J7dSy3unGcrnrSldgGp6J_xUQ_pUsFuukkDhTwgyIONVE3PdYfNK2UiFNiZC3L5maLAiqhPi7svIVuBzW8rMWBfSuNzxcq_TXGUk18G7nPEZfMQ2B-3AG8JVLh6bF_Mnr-0Vy9_YGHurcrSgkUL_5J8HgjgmRvskEz1IOAZ-zlBcaYSyF6W9xER7EjdoLJaS2dEGjh4MucqFqi35va8cgUl",
  },
  {
    title: "Progress Meetings",
    desc: "Regular parent meetings to discuss progress, answer questions, and align on your child's journey.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBG0DBTiUUsRndeOYHOuDDVTkcj8DHlC-TZK0MNAwacQmcJzwvcv5DX8G6_WBNmisaYaemZge26NXOAotmCvKwtuuzFSjo6OaR17NwX_PgYQ31lQiHwaM7V14dZHVTHk9Kqi1wXUEfBAq-EMtLWNoxHTnm32FwruX-8i88ccQqhfwfTFU-0vUgEKokqT81L7nrGhA2jqaC3UX1T2ZvmJgh00m36xHhSHp4Ppqcg23n65Je5sYOCdJHEFTC_avnCW3ELWDEiyqnjXLG",
  },
  {
    title: "Homework",
    desc: "Curated chess puzzles provided regularly for better retention and improved training.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVOUjtkF0NtLGtbwDaw5Hb2adR8XfR_WDsqhfRPbSJkSHsmcn_6FGYXhafIvxqi7VTmqfXeGV7zyiRGXolgP_oM9taCwVW2LD5k213JLSUsO52-MATASQUzaGVn7algn7ZPZrbwAA-pmhkK6hm7WgtRJfdtrSt7Sehk7IMClMujXHT_vzDWe8KQqlYQ_Zkh_PsQRw88tfNVRRKf9dtDsm7ckJcmv2a2FeYAZsh5Ei7EDZD_s6hf5gULKOavKaurWYjJZx3Ji2GGI9g",
  },
];

// FAQs data
const faqs = [
  {
    question: "How do you determine my child's starting level?",
    answer:
      "Every student begins with an assessment session where we evaluate their current understanding, playing strength, and learning style. Based on this, we recommend the most suitable program and create a personalized learning path.",
  },
  {
    question: "My child has never played chess before. Can they still join?",
    answer:
      "Absolutely. Many of our students begin with no prior chess experience. We start with strong fundamentals and gradually build confidence, critical thinking, and game understanding through our structured curriculum.",
  },
  {
    question: "How do I know whether One-to-One or Group Classes are right?",
    answer:
      "Both programs follow the same structured curriculum. One-to-One Coaching offers personalized attention and flexible scheduling, while Group Classes encourage collaborative learning and healthy competition.",
  },
  {
    question: "How do you measure my child's progress?",
    answer:
      "Every student follows a milestone-based learning path. Progress is tracked through regular game analysis, practice performance, skill assessments, and parent review meetings.",
  },
  {
    question: "What if my child misses a class?",
    answer:
      "We understand that unexpected situations can arise. If you're able to inform us in advance, we'll do our best to reschedule. Otherwise, we provide the recording so your child can catch up.",
  },
  {
    question: "How are students placed into the right group?",
    answer:
      "Students are carefully matched based on both their age and current playing level. This ensures every child learns alongside peers with similar abilities, creating a comfortable, engaging, and productive learning environment.",
  },
];

export default function Programs() {
  return (
    <main className="flex flex-col">
      {/* 1. Header Hero Banner */}
      <section className="bg-primary text-white py-11 md:py-24 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="text-secondary font-label-md uppercase tracking-[0.25em] text-[10px] md:text-sm">
              Programs
            </span>
            <div className="h-px w-6 md:w-8 bg-secondary/50"></div>
          </div>
          <h1 className="font-display text-2xl md:text-display-lg text-white mb-4 md:mb-6">
            Our Programs
          </h1>
          <p className="hidden md:block font-sans text-sm md:text-body-lg text-white/80 max-w-[540px] leading-relaxed">
            Explore our structured learning pathways designed to help every child
            progress with confidence, from beginner fundamentals to advanced
            competitive play.
          </p>
          <p className="md:hidden font-sans text-[13px] text-white/80 max-w-[540px] leading-relaxed">
            Structured chess coaching from beginner fundamentals to advanced competitive play.
          </p>
        </div>

        {/* Large Decorative Chess Knight Watermark */}
        <div className="absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.05] pointer-events-none text-white hidden lg:block">
          <Image
            src="/knight-watermark.svg"
            alt="Chess Knight Watermark"
            fill
            className="object-contain invert"
            priority
          />
        </div>
      </section>

      {/* 2. Choose Your Starting Point */}
      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <span className="text-secondary font-label-md uppercase tracking-[0.2em] mb-3 text-xs">
              CURRICULUM PATH
            </span>
            <h2 className="font-display text-2xl md:text-headline-lg text-primary">
              Choose Your Child&apos;s Starting Point
            </h2>
            <p className="text-body-muted text-sm md:text-base mt-3 max-w-2xl">
              Every student is assessed during the trial class and placed in the
              level that best matches their current ability.
            </p>
          </div>

          {/* Connected dots on desktop */}
          <div className="max-w-4xl mx-auto mb-16 hidden md:block">
            <div className="flex justify-between items-center">
              {levels.map((l, index) => (
                <React.Fragment key={l.num}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-white text-primary font-bold text-base shadow-sm relative z-10 hover:bg-primary hover:text-white transition-colors duration-300">
                    {l.num}
                  </div>
                  {index < levels.length - 1 && (
                    <div className="flex-grow h-[2px] bg-primary/20 mx-4 relative flex items-center">
                      <div className="absolute right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-primary/30 rotate-45 -translate-y-[1px]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {levels.map((l, idx) => (
              <MobileAnimatedCard
                key={idx}
                delayMs={idx * 80}
                className="w-full h-full"
              >
                <div
                  className="bg-surface-white p-5 md:p-6 rounded-2xl border border-border-warm hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col max-md:active:scale-[0.98] max-md:min-h-[225px] max-md:h-auto h-full"
                >
                  <div className="flex items-start gap-3 md:gap-4 flex-col h-full">
                    <div className="w-12 h-10 rounded-lg bg-[#F8F5F0] border border-[rgba(12,49,38,0.08)] flex items-center justify-center relative">
                      <Image
                        src={l.icon}
                        alt={l.alt}
                        width={45}
                        height={38}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-lg md:text-xl text-primary leading-tight">
                        {l.title}
                      </h3>
                      <span className="text-secondary font-label-md text-[10px] md:text-xs uppercase tracking-widest block mt-1">
                        {l.level}
                      </span>
                    </div>
                    <p className="hidden md:block text-sm text-body-muted leading-relaxed mt-2">
                      {l.desc}
                    </p>
                    <div className="md:hidden mt-0.5 w-full">
                      <ul className="space-y-1.5 text-xs text-body-muted list-disc pl-4 leading-relaxed">
                        {l.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MobileAnimatedCard>
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex items-center justify-center gap-2 text-body-muted">
            <MaterialIcon
              name="emoji_events"
              className="text-secondary text-lg"
              fill
            />
            <p className="text-xs md:text-sm">
              Levels are flexible. Your child may move based on performance and
              learning progress.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Class Formats */}
      <section className="bg-surface-container-low py-12 md:py-24 border-y border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <span className="text-secondary font-label-md uppercase tracking-[0.2em] mb-3 text-xs">
              Learning Format
            </span>
            <h2 className="font-display text-2xl md:text-headline-lg text-primary">
              <span className="hidden md:inline">Choose the Learning Style That Fits Your Child</span>
              <span className="md:hidden">Choose Your Learning Format</span>
            </h2>
            <p className="text-body-muted text-sm md:text-base mt-3 max-w-xl">
              Two proven formats. One mission — to make your child a confident
              chess thinker.
            </p>
          </div>

          {/* Formats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
            {/* One-to-One Card */}
            <div className="bg-primary p-6 md:p-10 rounded-[20px] text-white flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-14 h-14 bg-cta-deep-green rounded-xl flex items-center justify-center relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqkk_rMC9_a1HS9Sn7RGZ2R5l3sAQkDMNiDrocIAnM2vweyDY_lVaQFV0zcX4NVGF7QCSjS3IJ_iEEncacCFySw-4MUhHMn27KfwtQ_XqnddYzeCE5glETQ4BLP4YRirfbwnKdtFTJljzyofkb6GaROlUed74waNd1aim71SNAz2fZRd9SGi02CUN2nR-iaxf3ZGHD9CXRZpFrHlQonUec_phwRMPHl-CKA7AOTTeAiap4LZrhLClLknRkjXqZb9vsLVVj0zhlRmfN"
                    alt="One-to-One Coaching icon"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-0.5 bg-secondary text-white font-label-md uppercase tracking-wider text-[7.5px] md:text-[10px] px-1.5 py-0.5 md:px-3 md:py-1 rounded-full">
                  <MaterialIcon name="star" className="text-[8px] md:text-xs" fill /> MOST
                  EFFECTIVE
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 md:mb-6">
                One-to-One Coaching
              </h3>
              <div className="h-0.5 w-10 bg-secondary mb-6 md:mb-8"></div>
              <ul className="space-y-3.5 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {[
                  "Personalized curriculum at child's pace",
                  "Flexible scheduling for busy families",
                  "Ideal for tournament preparation and ambitious learners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <MaterialIcon
                      name="check_circle"
                      className="text-secondary text-xl flex-shrink-0"
                      fill
                    />
                    <span className="text-sm md:text-base text-white/95">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/20 pt-5 md:pt-6">
                <p className="text-secondary font-label-md uppercase tracking-wider text-xs mb-2">
                  Recommended For
                </p>
                <p className="text-white/80 text-xs md:text-sm">
                  Students who need personalized attention, faster progress, or
                  tournament preparation.
                </p>
              </div>
            </div>

            {/* Group Classes Card */}
            <div className="bg-surface-white p-6 md:p-10 rounded-[20px] border border-border-warm flex flex-col relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-14 h-14 bg-on-primary-container/5 rounded-xl flex items-center justify-center relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1bqH86K-8gDGW8mPqLEq1lgAZFi-lIWlIav3noy3u7QOpQJSouEJDeFgb5UQsUsxAyLZ_iqyW7tzZxl8wAWoAZPy6K5exdGSjYGC6APcF_B8yGX5H7y06WW0xZLhlbK-rL3nkWVqwynLjMiHNNmvv8ApyKBcxlkhKVNiaVK0SHAhn_x2dCyxOGMa_C31u_eQP0IcMJW00tRAadtYH1SCTQzF6LYNZepLIMq-AIjDc49R1CCthjroQFGHnIXvKfjlvkzCwRjrCxQ_Z"
                    alt="Group Classes icon"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-secondary font-label-md uppercase tracking-wider text-[8px] md:text-[10px] bg-secondary/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                  Social Learning
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-primary mb-4 md:mb-6">
                Group Classes
              </h3>
              <div className="h-0.5 w-10 bg-border-warm mb-6 md:mb-8"></div>
              <ul className="space-y-3.5 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {[
                  "Small batches of 3–4 students",
                  "Interactive peer-based learning",
                  "Practice regularly with peers of similar skill levels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <MaterialIcon
                      name="check_circle"
                      className="text-secondary text-xl flex-shrink-0"
                      fill
                    />
                    <span className="text-sm md:text-base text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border-warm pt-5 md:pt-6">
                <p className="text-secondary font-label-md uppercase tracking-wider text-xs mb-2">
                  Recommended For
                </p>
                <p className="text-on-surface-variant text-xs md:text-sm">
                  Students who enjoy learning with peers and thrive in a
                  collaborative environment.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-body-muted text-sm max-md:bg-secondary/5 max-md:border max-md:border-secondary/15 max-md:rounded-xl max-md:py-3.5 max-md:px-4 max-md:max-w-md max-md:mx-auto max-md:shadow-sm">
            <p className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-1.5 max-md:text-xs">
              <span className="max-md:text-body-muted">Not sure which to choose?</span>{" "}
              <Link
                href="/book"
                className="text-primary font-bold border-b border-primary hover:text-secondary hover:border-secondary transition-all max-md:text-secondary max-md:border-b-secondary max-md:mt-0.5"
              >
                Speak to an Expert Coach →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem features */}
      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="mb-10 md:mb-16">
            <span className="text-secondary font-label-md uppercase tracking-[0.2em] mb-3 text-xs block">
              OUR ECOSYSTEM
            </span>
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-3 md:mb-4">
              What Every Student Receives
            </h2>
            <p className="text-body-muted text-sm md:text-base max-w-xl">
              Every student gets more than weekly coaching; they get a complete
              system built around consistent and measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ecosystem.map((item, idx) => (
              <MobileAnimatedCard
                key={idx}
                delayMs={idx * 80}
                className="w-full"
              >
                <div
                  className="border border-border-warm rounded-xl p-6 md:p-8 bg-surface-white hover:border-primary/20 transition-all duration-300 flex max-md:flex-row max-md:items-start max-md:gap-4 max-md:pb-6 max-md:border-b max-md:border-b-border-warm/60 max-md:last:border-b-0 max-md:last:pb-0 max-md:bg-transparent max-md:border-0 max-md:rounded-none flex-col gap-4 md:gap-6"
                >
                  {/* Icon Wrapper */}
                  <div className="w-[50px] h-[50px] md:w-14 md:h-14 rounded-2xl bg-surface-container-low flex items-center justify-center transition-colors hover:bg-primary group relative flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain transition-all group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  {/* Text Wrapper */}
                  <div className="flex flex-col gap-1.5 md:gap-3">
                    <h4 className="font-headline-md text-base md:text-xl text-primary font-semibold leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-body-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </MobileAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-12 md:py-20 bg-surface-bright border-t border-border-warm">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-secondary font-label-md uppercase tracking-[0.2em] mb-3 text-xs block">
              FAQS
            </span>
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-3 md:mb-4">
              Questions Parents Often Ask
            </h2>
            <p className="text-body-muted text-sm md:text-base">
              Clear answers to help you choose the right program.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="text-center bg-cta-deep-green text-surface-bright py-12 md:py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-on-primary-container/5 rounded-full blur-3xl"></div>
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
              Help Your Child Discover Their <br className="hidden md:inline" /> Potential Through Chess.
            </h2>
            <p className="font-sans text-sm md:text-body-lg mb-8 text-white/95 leading-relaxed">
              Experience a personalized trial lesson with experienced tournament
              players. <br className="hidden md:inline" /> Discover how structured coaching helps children improve
              with confidence.
            </p>
            <Link
              href="/book"
              className="inline-block bg-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-button text-base md:text-lg text-primary hover:bg-surface-bright transition-all shadow-lg font-bold"
            >
              Book Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
