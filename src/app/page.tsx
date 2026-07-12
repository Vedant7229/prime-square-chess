import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

// Static Assets URLs
const heroImg = "/Website_Header_Img.jpg";

const schoolLogos = [
  {
    name: "Hillwoods School",
    label: "Radiant School",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyGH6OStBK0aBc_btHIGXEgIPw1B7wBodWgMT2ex6bOTkBLgLnJwF8NwIhJ6OiaxweoRZzd4eEQa8SlxsJbYlF7qFNxBS-j_1-tkedGqQ7v38Klb9O5T9JfUEy4ftHVShaYVwUHpKjfQBexyrKAx8JaZUYyME3BxdtAt_Scs6jEeFv-FpT37UOA5-Hgg7MWcryC-u4kFXDjZAIgc3-pGrCqIdVnvWN71X7Wyh6CLSpy0am50ONy_A375m2cMSvj_oOD2TqJy2SqkW",
  },
  {
    name: "New Era Senior Secondary School",
    label: "New Era Senior Secondary School",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUM3-6y-547p3ouY-Xf0NF-3q7ScuxMfxoDJYsETWZsVSkHDq5WpaQ19U&s=10",
  },
  {
    name: "St. Xavier's School",
    label: "St. Xavier's School",
    src: "https://play-lh.googleusercontent.com/-4kaOBE9MuhxPrVJFztHNUrN5XoiMKJd2DFokoUwLEZ2KsHdb8--6pYNbHAJAErZdn4",
  },
];

const features = [
  {
    title: "Structured Curriculum",
    desc: "Every child follows a clear learning path based on their current skill level, ensuring steady progress.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD54lU924ZiVoHJEdyqOo8XhjqPJSjJwo7YZrzrU-r6o0LjqP7yjAyA_uB-tueBpoPnUgAsCLXR_DlrLtZqCCwDam1WjVmjvcAybLEZMbFGV7-C5aDDzzwEVRs9xZEAodTRnaaR_x1Ly7W9Bi845MbrNSahdJWlf835TJpLGkoAGnwIbt8sPrTcgMt2EwznrXyyQ_I9ct_ckdFmB_Oe5UbCTR_2Y8Z4zzDE5XkP-vDicsqHSXXHXk3ZkSvbmpgbmyc1z5c88DNTGL2S",
  },
  {
    title: "Engaging Live Classes",
    desc: "Interactive online sessions that keep children motivated through chess puzzles and practice games.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8YVD313cTpMNvz1PBMYnG009z1sWMdHkZxllHiNbQwdtzQK37f2WZnJjluuvy9WbWt_NTmbES3UdTUtApcAHBS7ZbIweRyBvRoj3XVGvQla0w409MSxrzUwOB9lycOHsY4MvcCIa8kHAR-8vLHU2M-nWPUJFYL5sBSgllAA1lQEUUT7T80g7c_CgYAY8imncmYp_LXlAe1Z2vUJje9xISdlxZtmGUS7LwCL29_ooW9TFnXDIRERA8YvRKAHA373qUqL2WNjrmztw",
  },
  {
    title: "FIDE - Rated Coaches",
    desc: "Learn from experienced tournament players who are passionate about teaching chess to young minds.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeuOPTzAOyVe6JmcLzVeEcVgcDqArNNhFFY0hKE7cpt-cgSHIc3S_hVK656uIo2gOASUWQ0wkMzIv6gztnEs-96zDicIscWKnmXWZRN15Jf9b6KzZyRPYgwNOOe2gUzhEPlFuksSaGqZRXZT5iL3gY7ECUQKBdkvdv12Rg5jzWywFZ03W3pZshsD-k-1hpz6m11hKkyCF-fcAIgcFM_Kz4UEy-5IpdKy8fNwtcvtObXWcunqDktZcDcO3jUqU7vab4AP9pJ_H1Inbn",
  },
  {
    title: "Personalized Coaching",
    desc: "Lessons are adapted to each student's pace, strengths, and goals ensuring steady progress and consistent growth.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFhS-A0wjz7gEBaOSKt8Ltrnhz0b0pN4f6xR-X0lPYuFjzwU_OHXrjkZn9h0y1Ka9JZ13MDvRPulGcDLxaiC2bltOnH3e6oGPvTRils-q0LDiq5_DC4wEGddrc0gzkN0E3U8-3OtehvtAdK65Yqn1wwfjt1NbUNRDVG09wKdTONaf4K3VKhQWWXDgrrfIC7ZjME-VpkZ3IZIBfZLALh6WfdsoqDkeFhjk4hL6p_g52BRzvKR0TFPdDhkbeyCnVGJTs1n_gDu1CyF_",
  },
  {
    title: "Affordable Coaching",
    desc: "Premium chess coaching with high-quality training at affordable prices. \n Structured Learning \n Expert Guidance",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-_uLawgiRi4E-BZJXqUUmhtHRbcRj-gybnHvYR3SSwTvqQtwrpceovHJE8iMRYmnqa9bYP_J68xloBkQMUNBfM93tt_4t6w9h9gT1uWNv842mV-BSaPBqbpXlrnVM8pKl1Ha4dC-69EYTuDyKW0N8EBRRXv1AW2aAFXyg7N45ARKogR_qkZEXIZTT9OeYKyvWShcIXZVac9u7UU44dOEKCsMK3agE8KzIgRArrIn7uzq2Z7KzYOtoGs4iNoal51PZ3hPooLljGPbt",
  },
];

const steps = [
  {
    step: "1",
    title: "Book Free Trial",
    desc: "Choose a convenient time and book your free 45-minute assessment session.",
    icon: "event_available",
    badgeText: "Online Booking in Few Clicks",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk1D1qts94zX6h7itUdNCw_6CXXidYa6x7GYZlDEDw2m1BQrp5YVS9CeiEcxi_-OgWPsTsF_SHWtDVUQbdKXQquAsM2h7dWIE-tDh9iqGUsk25YV4xeSt2fBQiARYFZ1Poom8d9MJmU3mK-nk2RyBz59Bd-916Igs58MaV_QFkNHi4TauA5p_D7Hh-oM3VpcPo43f5j9CMM12JaG5cMmhHSXyJHNx_s70i5UQ4GXmZ_uuQPmChuI59_3KGUGjJbS5M8cn4MxHqOwKc",
  },
  {
    step: "2",
    title: "Skill Assessment",
    desc: "Our expert evaluates your child's current skill level, strength, and areas to grow.",
    icon: "groups",
    badgeText: "Interact with Expert Coaches",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7M-2tUma6FSt4E9xGcFsrFyBgQUNoqyS6nxxxHm_ofJsRQENJK2s_Y2gU5EMUI-28d7oABhVmRzcByniRL5iHBydHyyjUVUzCkjcWi1hiKNjWdotUsmOF2OXAFNNB_yJneXY7I1eNAjnvzoQT4-EnKQOPU2iXf8kM9Jaj1mp3zPI-RvIJ6u4OKzzvlUoG6rrllZDS0lH0MmmZ7qHBa_JEzF9KTlTshk9EdwIUETvmEfP6K50IMi4Gt8yYVsdQ-ZAR7t5fjQPRfnKy",
  },
  {
    step: "3",
    title: "Personalized Plan",
    desc: "Receive a custom plan for your child & clear your doubts with the coach.",
    icon: "route",
    badgeText: "Clear Guidance for Your Child",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCphZv72DgqR2-nhnSEnhV9dZNe0GG109Se2UY6jn9XfTfCMjDzGPDw3-IH4-RxVgDDfTl5XtgwCkTr3jjQd12tscvNAZE8PbJ_lD3OKs3lVyWobSl2vPT-mNeIlOh3pYDNqT71eKzGMcTl4frn20ZciL7JjFCRTs_oz9o-m2HKpPsgCtw35Pax-H_-NMjSAriThlGkHZpNK-VL8h92a0KU9w-qXAzdutBCzAhN31Aoi7t7VUnioy61hB0aS831veagu9cIK6s8_qDS",
  },
  {
    step: "4",
    title: "Join Live Classes",
    desc: "Start weekly live classes, track regular progress, and achieve remarkable results.",
    icon: "monitoring",
    badgeText: "Track progress, Achieve Success",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtmoSkFGH5kW_7Iuq61PZgmPsPP09yydkSZzlCE6yZT98lZ9rBWRYbrKwCAagGxLjnoPkBgEbzSAJudaoSHLwvP5JVOL782LCWJHviPKONP0jooz-nP1mFI1OxoDr88WZpTDiunADg5zB8yuPOMZ4whKLEgD6gpiT7IEmLtZn8XtH83XuzG37cKsOaC-6yXeIqG7pyW9IpgxIzXxJKa0I1Dt0tu8O3H1f1XsaZwxVXiJJzUkm9a6YKWcrUo1ckqf_ARpMJw4mAtaCl",
  },
];


const polaroid1 = "/PS2.jpeg";

const polaroid2 = "/PS1.jpeg";
export default function Homepage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden gradient-mesh py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 flex flex-col items-start text-left">
            <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 font-label-md text-xs md:text-sm mb-6 tracking-widest uppercase rounded">
              Helping Children Think Better Through Chess
            </span>
            <h1 className="font-display text-4xl md:text-display-lg text-primary mb-6 leading-tight">
              Build Strategic Thinkers.
              <br />
              <span className="italic font-normal">Build Confident Children.</span>
            </h1>
            <p className="font-sans text-base md:text-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-xl leading-relaxed">
              Designed for children aged{" "}
              <span className="font-semibold text-on-surface">6–18</span>, our
              engaging online chess classes provide a supportive learning
              environment where every student can build strong chess skills,
              confidence, and a love for the game.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto bg-primary text-on-primary font-button text-button px-8 py-4 rounded-lg shadow-sm hover:bg-primary-container active:scale-95 duration-150 transition-all text-center"
              >
                Book Free Trial
              </Link>
              <Link
                href="/success-stories"
                className="w-full sm:w-auto border border-primary text-primary font-button text-button px-8 py-4 rounded-lg hover:bg-primary/5 active:scale-95 duration-150 transition-all text-center"
              >
                Read Success Stories
              </Link>
            </div>

            {/* Micro checks */}
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 items-start sm:items-center">
              {[
                "Ages 6–18",
                "Flexible Time zones",
                "Live Online classes worldwide",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <MaterialIcon
                    name="check"
                    className="text-secondary text-xl font-bold"
                  />
                  <span className="font-label-md text-xs md:text-label-md text-primary uppercase tracking-wider">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image & Badge */}
          <div className="relative w-full">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-lg">
              <Image
                src={heroImg}
                alt="Child playing chess online"
                fill
                className="object-cover opacity-90"
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* Structured Curriculum Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 border border-border-warm rounded-xl shadow-lg hidden md:block hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MaterialIcon
                    name="verified"
                    className="text-secondary text-2xl"
                    fill
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">
                    Structured Curriculum
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    FIDE Rated Coaches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section (Schools) */}
      <section className="py-12 bg-surface-white border-y border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <p className="text-center font-label-md text-xs md:text-label-md text-on-surface-variant mb-8 tracking-widest uppercase opacity-75">
            SCHOOLS WE WORK WITH
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
            {schoolLogos.map((school) => (
              <div
                key={school.name}
                className="flex flex-col items-center gap-3 w-40 md:w-56"
              >
                <div className="relative h-16 w-32">
                  <Image
                    src={school.src}
                    alt={school.name}
                    fill
                    className="object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    sizes="150px"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-label-md tracking-wider text-center uppercase text-on-surface-variant/80">
                  {school.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 md:py-24 bg-surface-bright">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-headline-lg text-primary mb-4">
              Why Parents Choose Prime Square?
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              A complete chess learning experience with personalized coaching,
              expert guidance, and a structured curriculum.
            </p>
          </div>

          {/* Responsive grid mapping cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 border border-border-warm rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border-warm rounded-lg mb-6 bg-surface-container-low relative">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-auto">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journey/Timeline Steps */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-headline-lg text-primary mb-4">
              Your Chess Journey Starts Here
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant">
              Just four simple steps to get started.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-[1px] bg-border-warm -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg mb-6 border-4 border-surface-bright shadow-sm">
                    {s.step}
                  </div>
                  <div className="bg-surface-bright border border-border-warm rounded-xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center w-full min-h-[380px] hover:shadow-md transition-all duration-300">
                    <div className="aspect-video w-full rounded-lg mb-6 bg-surface-container-low relative overflow-hidden">
                      <Image
                        src={s.src}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 250px"
                      />
                    </div>
                    <h3 className="font-headline-md text-lg md:text-xl text-primary mb-3">
                      {s.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-auto w-full pt-4 border-t border-border-warm flex items-center justify-center gap-2">
                      <MaterialIcon
                        name={s.icon}
                        className="text-secondary text-xl"
                      />
                      <span className="text-[10px] md:text-xs font-label-md text-on-surface-variant uppercase tracking-wider">
                        {s.badgeText}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book trial CTA block */}
          <div className="mt-16 text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-primary text-on-primary font-button text-button px-10 py-5 rounded-lg shadow-md hover:scale-[1.03] transition-transform text-center mx-auto"
            >
              <MaterialIcon name="calendar_today" className="text-xl" />
              Book Your Free Trial
              <MaterialIcon name="arrow_forward" className="text-xl" />
            </Link>
            <p className="mt-4 text-xs md:text-sm text-on-surface-variant opacity-75">
              No commitment. Just a conversation that can change your child&apos;s game.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Featured Success Story Spotlight */}
      <section className="bg-white py-12 md:py-20 border-t border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-secondary font-label-md text-xs md:text-sm mb-4 tracking-widest uppercase">
              FEATURED SUCCESS STORY
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-6 leading-tight">
              Real Journeys.
              <br />
              Real Impact.
            </h2>
            <div className="w-16 h-0.5 bg-secondary mb-8" />
            <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-xl">
              <p>
                &ldquo;When Prisha joined Prime Square Chess Academy, we never imagined how much she would grow. Over the
                years, we have seen her become more focused, patient, and
                confident, not just in chess, but in her everyday life. We&apos;ve
                even noticed that these qualities have helped her in her studies,
                and she has always managed her academics with confidence.&rdquo;
              </p>
              <p>
                &ldquo;What we appreciate most is the personal attention she
                receives. The coaches genuinely care for every student, and
                their guidance before every tournament, constant encouragement,
                and individual support have played a huge role in Prisha&apos;s
                journey. She shares a wonderful bond with her coaches, and we
                truly believe their dedication has been a big part of her
                achievements.&rdquo;
              </p>
            </div>

            {/* Profile info */}
            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border-warm flex-shrink-0">
                <Image
                  src="/AS.png"
                  alt="Archita, Parent of Prisha"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-headline-md text-base md:text-lg text-primary">
                  Archita, Parent of Prisha Shah (Age 11)
                </p>
                <p className="font-label-md text-xs md:text-sm text-on-surface-variant tracking-wider uppercase">
                  Gujarat State U-11 Girls Runner Up
                </p>
              </div>
            </div>

            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-container transition-all font-label-md text-sm active:scale-95 duration-150"
            >
              More Success Stories
              <MaterialIcon name="arrow_right_alt" className="text-xl" />
            </Link>
          </div>

          {/* Double Polaroid Stack */}
          <div className="relative h-[480px] sm:h-[600px] w-full flex items-center justify-center">
            {/* Polaroid 1 (Trophy Card) - top right */}
            <div className="absolute top-0 right-4 w-4/5 sm:w-2/3 bg-white p-4 pb-8 rounded shadow-lg border border-border-warm rotate-2 hover:rotate-0 hover:z-30 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded bg-surface-container-low mb-4">
                <Image
                  src={polaroid1}
                  alt="Celebrating chess hard work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <p className="text-center font-label-md text-xs md:text-sm text-primary uppercase tracking-widest">
                Proud Moment
              </p>
            </div>

            {/* Polaroid 2 (Prisha with Trophies) - bottom left */}
            <div className="absolute bottom-4 left-4 w-4/5 sm:w-2/3 bg-white p-4 pb-8 rounded shadow-xl border border-border-warm -rotate-2 z-20 hover:rotate-0 hover:z-30 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded bg-surface-container-low mb-4">
                <Image
                  src={polaroid2}
                  alt="Prisha Shah with chess trophies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <p className="text-center font-label-md text-xs md:text-sm text-primary uppercase tracking-widest">
                Champion Today, Leader Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Banner */}
      <section className="py-20 md:py-24 bg-cta-deep-green text-surface-bright relative overflow-hidden">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/linen.png")`,
          }}
        />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
            Help Your Child Discover Their <br /> Potential Through Chess.
          </h2>
          <p className="font-sans text-sm md:text-body-lg mb-10 text-white/95 leading-relaxed">
            Experience a personalized trial lesson with experienced tournament
            players. <br /> Discover how structured coaching helps children improve with
            confidence.
          </p>
          <Link
            href="/book"
            className="inline-block bg-surface-bright text-primary font-button text-button px-10 py-5 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg font-bold text-center"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}
