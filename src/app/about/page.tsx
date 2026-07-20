import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import Ad1 from "./Ad1.png";
import Ad2 from "./Ad2.jpeg";
import Vd from "./Vd1.jpeg";
import Vd2 from "./Vd2.jpeg";
import St3 from "./Story3.png"

// Static image URLs
const aboutHeroImg = St3;
const story1 = Ad1;
const story2 = Vd2;
const coachAmit = Ad2;
const coachVedant = Vd;
export default function About() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="py-10 md:py-24 px-5 md:px-margin-desktop max-w-container-max mx-auto mt-8 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-md:text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase text-[10px] md:text-sm">
                About Prime Square
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-secondary"></div>
              <MaterialIcon name="chess" className="text-secondary text-sm md:text-base" fill />
            </div>
            <h1 className="font-display text-[28px] md:text-display-lg text-primary mb-5 md:mb-8 max-w-xl leading-tight">
              Where Young Minds Learn to Think Like Champions
            </h1>
            <div className="font-sans text-[13px] md:text-body-lg text-body-muted space-y-4 md:space-y-6 max-w-lg mb-6 md:mb-8 leading-relaxed max-md:text-left">
              <p>
                At Prime Square Chess Academy, we believe chess is more than a
                game; it&apos;s a powerful way to help children think independently,
                solve problems with confidence, and make thoughtful decisions.
              </p>
              <p>
                By combining the values of traditional coaching and modern
                online learning, we create a supportive environment where every
                child can grow, both as a chess player and as a thinker.
              </p>
            </div>
            <Link
              href="/book"
              className="max-md:w-full max-md:block inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-button text-button hover:bg-primary-container active:scale-95 duration-150 transition-all shadow-sm text-center text-sm md:text-base"
            >
              Book Free Trial
            </Link>
          </div>
          <div className="relative w-full aspect-[1.34] rounded-xl overflow-hidden shadow-lg border border-border-warm bg-primary/5 max-md:rounded-lg">
            <video
              className="w-full h-full object-cover"
              src="/about-video.mp4"
              preload="metadata"
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="bg-surface-container-low py-14 md:py-24 border-y border-border-warm">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-secondary/50"></div>
              <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase text-[10px] md:text-sm">
                Our Story
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-secondary/50"></div>
            </div>
            <div className="flex justify-center mb-4 md:mb-6">
              <MaterialIcon name="chess" className="text-secondary text-3xl md:text-4xl" fill />
            </div>
            <h2 className="font-display text-2xl md:text-display-lg text-primary leading-tight">
              A Passion Passed Through Generations
            </h2>
            <p className="font-sans text-[13px] md:text-body-lg text-body-muted mt-4 md:mt-6 max-w-2xl mx-auto">
              The journey of Prime Square Chess Academy is a story of passion,
              mentorship, and a belief in every child&apos;s potential.
            </p>
          </div>

          {/* Chronological Blocks */}
          <div className="space-y-16 md:space-y-32 max-w-5xl mx-auto">
            {/* Block 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[3/4] max-md:aspect-[4/3] rounded-xl max-md:rounded-lg overflow-hidden shadow-md border border-border-warm max-w-sm mx-auto lg:mx-0 w-full">
                <Image
                  src={story1}
                  alt="Where It All Began"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="font-display text-3xl md:text-4xl text-secondary">01</span>
                  <div className="h-px w-12 md:w-16 bg-secondary/50"></div>
                </div>
                <h3 className="font-headline-md text-xl md:text-3xl text-primary mb-4 md:mb-6">
                  Where It All Began
                </h3>
                <div className="space-y-3 md:space-y-4 font-sans text-[13px] md:text-base text-body-muted leading-relaxed">
                  <p>
                    Chess has always been more than a game in our family. Long
                    before Prime Square Chess Academy was founded, it was a
                    passion shared around our home.
                  </p>
                  <p>
                    My father, a dedicated chess coach and lifelong student of the
                    game, introduced me to my first chessboard when I was just six
                    years old.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="flex flex-col items-start order-2 lg:order-1">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="font-display text-3xl md:text-4xl text-secondary">02</span>
                  <div className="h-px w-12 md:w-16 bg-secondary/50"></div>
                </div>
                <h3 className="font-headline-md text-xl md:text-3xl text-primary mb-4 md:mb-6">
                  Discovering My Journey
                </h3>
                <div className="space-y-3 md:space-y-4 font-sans text-[13px] md:text-base text-body-muted leading-relaxed">
                  <p>
                    As I grew as a player, my tournament experiences and
                    achievements sparked the curiosity of my younger cousins, who
                    were nearly ten years younger than me.
                  </p>
                  <p>
                    Watching my journey inspired them to pick up the game. Guiding
                    them, sharing ideas, discussing games, and helping them
                    improve, those simple moments made me realize how rewarding
                    it was to help someone else discover the beauty of chess.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[3/4] max-md:aspect-[4/3] rounded-xl max-md:rounded-lg overflow-hidden shadow-md border border-border-warm max-w-sm mx-auto lg:mx-0 order-1 lg:order-2 w-full">
                <Image
                  src={story2}
                  alt="Discovering My Journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Block 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-video rounded-xl max-md:rounded-lg overflow-hidden shadow-md border border-border-warm w-full">
                <Image
                  src={aboutHeroImg}
                  alt="From Passion to Prime Square"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="font-display text-3xl md:text-4xl text-secondary">03</span>
                  <div className="h-px w-12 md:w-16 bg-secondary/50"></div>
                </div>
                <h3 className="font-headline-md text-xl md:text-3xl text-primary mb-4 md:mb-6">
                  From Passion to Prime Square
                </h3>
                <div className="space-y-3 md:space-y-4 font-sans text-[13px] md:text-base text-body-muted leading-relaxed">
                  <p>
                    Years later, while pursuing my college education, I began
                    coaching students professionally.
                  </p>
                  <p>
                    Every lesson reinforced a simple belief: the right mentor can
                    shape not only a stronger chess player, but also a more
                    confident, disciplined, and thoughtful child.
                  </p>
                  <p>
                    With online learning making quality coaching accessible from
                    anywhere, we saw an opportunity to bring the same values of
                    personal mentorship to families across the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="mt-14 md:mt-24 max-w-3xl mx-auto">
            <div className="bg-surface-white p-5 md:p-8 rounded-xl max-md:rounded-lg border-l-4 border-secondary shadow-sm text-center">
              <p className="font-sans text-[13px] md:text-body-lg italic text-primary flex justify-center items-center gap-2">
                <MaterialIcon name="format_quote" className="text-secondary text-xl md:text-2xl rotate-180 flex-shrink-0" />
                It started with one chessboard. Today, it&apos;s a journey we share
                with young minds across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Coaches */}
      <section className="py-14 md:py-24 px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center md:text-left mb-10 md:mb-16">
          <h2 className="font-display text-2xl md:text-headline-lg text-primary">
            Meet the Coaches
          </h2>
          <p className="font-sans text-[13px] md:text-body-lg text-body-muted mt-2 md:mt-3">
            Experienced mentors dedicated to your child&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Amit Dalal */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center bg-surface-white p-5 md:p-8 border border-border-warm rounded-xl max-md:rounded-lg hover:shadow-md transition-shadow">
            <div className="relative max-md:w-28 max-md:h-28 max-md:rounded-full md:w-48 w-full h-64 bg-surface-container-high rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={coachAmit}
                alt="Amit Dalal portrait"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
            <div className="flex flex-col max-md:items-center max-md:text-center items-start">
              <h3 className="font-headline-md text-lg md:text-2xl text-primary font-bold">
                Amit Dalal
              </h3>
              <p className="font-label-md text-[10px] md:text-sm text-secondary uppercase tracking-wider mt-1">
                Founder and Senior Chess Coach
              </p>
              <p className="font-sans text-[13px] md:text-sm text-body-muted mt-3 md:mt-4 leading-relaxed max-md:text-center items-start">
                With years of coaching experience, Amit has mentored numerous young
                learners through personalized offline coaching. He is passionate
                about teaching young minds.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 max-md:justify-center">
                <span className="font-label-md text-[10px] md:text-xs bg-secondary/10 text-secondary px-3 py-1 rounded">
                  <b>1540 Rating</b>
                </span>
                <span className="font-label-md text-[10px] md:text-xs bg-secondary/10 text-secondary px-3 py-1 rounded">
                  <b>10+ Years Experience</b>
                </span>
              </div>
            </div>
          </div>

          {/* Vedant Dalal */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center bg-surface-white p-5 md:p-8 border border-border-warm rounded-xl max-md:rounded-lg hover:shadow-md transition-shadow">
            <div className="relative max-md:w-28 max-md:h-28 max-md:rounded-full md:w-48 w-full h-64 bg-surface-container-high rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={coachVedant}
                alt="Vedant Dalal portrait"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
            <div className="flex flex-col max-md:items-center max-md:text-center items-start">
              <h3 className="font-headline-md text-lg md:text-2xl text-primary font-bold">
                Vedant Dalal
              </h3>
              <p className="font-label-md text-[10px] md:text-sm text-secondary uppercase tracking-wider mt-1">
                Co-founder & Lead Online Chess Coach
              </p>
              <p className="font-sans text-[13px] md:text-sm text-body-muted mt-3 md:mt-4 leading-relaxed max-md:text-center items-start">
                Played competitively in international tournaments and worked at
                multiple chess academies. Vedant specializes in engaging online
                coaching for students internationally.
                <br />Represented Gujarat 3x in Nationals
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 max-md:justify-center">
                <span className="font-label-md text-[10px] md:text-xs bg-secondary/10 text-secondary px-3 py-1 rounded">
                  <b>1489 Rating</b>
                </span>
                <span className="font-label-md text-[10px] md:text-xs bg-secondary/10 text-secondary px-3 py-1 rounded">
                  <b>Online Chess Coach</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teaching Philosophy */}
      <section className="bg-surface-container py-14 md:py-24 border-y border-border-warm">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-6 md:mb-16 max-w-3xl mx-auto">
            <span className="font-label-md text-[10px] md:text-xs text-secondary uppercase tracking-[0.2em] mb-3 md:mb-4 block">
              Our Teaching Philosophy
            </span>
            <h2 className="font-display text-2xl md:text-display-lg text-primary">
              Our 3 Principles
            </h2>
            <div className="flex justify-center items-center gap-3 md:gap-4 my-4 md:my-6">
              <div className="h-[1px] w-8 md:w-12 bg-secondary/30"></div>
              <MaterialIcon name="chess" className="text-secondary text-sm md:text-base" fill />
              <div className="h-[1px] w-8 md:w-12 bg-secondary/30"></div>
            </div>
            <p className="font-sans text-[13px] md:text-body-lg text-body-muted">
              At Prime Square Chess Academy, we believe chess is a powerful tool
              to build confident minds and strong character. Our teaching approach
              focuses on developing skills that last a lifetime.
            </p>
          </div>

          {/* Stacked on mobile, grid on desktop */}
          <div className="flex flex-col gap-6 max-w-[350px] sm:max-w-md mx-auto w-full md:grid md:grid-cols-3 md:gap-8 md:max-w-none md:mx-0">
            {/* Principle 1 */}
            <div className="bg-surface-white p-6 md:p-10 rounded-xl md:rounded-2xl border border-border-warm text-center flex flex-col items-center hover:shadow-md transition-shadow w-full">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Image
                  src="/philosophy-knight.png"
                  alt="Think. Plan. Move."
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3 md:mb-4 font-semibold">
                Think. Plan. Move.
              </h3>
              <p className="font-sans text-[13px] md:text-sm text-body-muted leading-relaxed">
                We focus on strategic thinking and problem solving over
                memorization. Every session is designed to make children
                independent and confident on the board and in life.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-surface-white p-6 md:p-10 rounded-xl md:rounded-2xl border border-border-warm text-center flex flex-col items-center hover:shadow-md transition-shadow w-full">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <MaterialIcon name="groups" className="text-primary text-2xl md:text-3xl" fill />
              </div>
              <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3 md:mb-4 font-semibold">
                Every Child Matters
              </h3>
              <p className="font-sans text-[13px] md:text-sm text-body-muted leading-relaxed">
                We understand that every child learns differently. Our
                personalized coaching ensures individual attention, nurtures
                curiosity, and helps each student grow at their own pace.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-surface-white p-6 md:p-10 rounded-xl md:rounded-2xl border border-border-warm text-center flex flex-col items-center hover:shadow-md transition-shadow w-full">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <MaterialIcon name="trending_up" className="text-primary text-2xl md:text-3xl" fill />
              </div>
              <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3 md:mb-4 font-semibold">
                Growth Over Results
              </h3>
              <p className="font-sans text-[13px] md:text-sm text-body-muted leading-relaxed">
                We celebrate progress, not just ratings. Our goal is to build
                discipline, patience and a growth mindset that helps children
                enjoy the journey of becoming better every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="py-14 md:py-24 px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="font-label-md text-[10px] md:text-xs text-secondary uppercase tracking-[0.2em] mb-3 md:mb-4 block">
            Our Impact
          </span>
          <h2 className="font-display text-2xl md:text-display-lg text-primary mb-4 md:mb-6">
            Building a Global Community of Young Minds
          </h2>
          <p className="font-sans text-[13px] md:text-body-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Over the years, we have had the privilege of guiding students from
            different cities and countries, helping them grow into confident
            thinkers and passionate players.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: "100+", title: "Students Mentored", desc: "And counting...", icon: "groups" },
            { num: "2+", title: "Years of Coaching", desc: "Experience you can trust", icon: "calendar_month" },
            { num: "5+", title: "Countries Reached", desc: "Students from around the world", icon: "public" },
            { num: "800+", title: "Hours of Coaching", desc: "Dedicated to shaping minds", icon: "schedule" },
          ].map((m, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <MaterialIcon name={m.icon} className="text-secondary text-2xl md:text-3xl" />
              </div>
              <div className="font-display text-3xl md:text-[44px] text-primary font-normal mb-1">
                {m.num}
              </div>
              <div className="font-label-md text-[10px] md:text-sm text-on-surface font-semibold uppercase tracking-wider mb-1">
                {m.title}
              </div>
              <div className="font-sans text-[10px] md:text-xs text-body-muted">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Final CTA Banner */}
      <section className="py-14 md:py-24 bg-cta-deep-green text-surface-bright relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/linen.png")`,
          }}
        />
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop text-center relative z-10">
          <h2 className="font-display text-2xl md:text-5xl mb-4 md:mb-6 max-w-3xl mx-auto leading-tight">
            Help Your Child Discover Their <br className="hidden md:block" />Potential Through Chess.
          </h2>
          <p className="font-sans text-[13px] md:text-body-lg mb-8 md:mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
            Experience a personalized trial lesson with experienced tournament
            players. <br className="hidden md:block" /> Discover how structured coaching helps children improve with
            confidence.
          </p>
          <Link
            href="/book"
            className="max-md:w-full max-md:block inline-block bg-surface-bright text-primary font-button text-button px-8 md:px-10 py-4 md:py-5 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-md font-bold text-center text-sm md:text-base"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}
