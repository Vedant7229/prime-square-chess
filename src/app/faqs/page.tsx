"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import Accordion from "@/components/ui/Accordion";
import Support from "./Support.png";
import Enrollment from "./Enrollment.png";
import Classes from "./Classes.png";

// FAQs by Category
const classesFaqs = [
  {
    question: "What age groups do you teach?",
    answer:
      "Our primary focus is on students aged 6–18, but we also offer coaching for adults who want to learn or improve their chess skills. Every program is customized to the student's experience and goals.",
  },
  {
    question: "Are classes conducted online or offline?",
    answer:
      "All classes are conducted online via Zoom. This allows students from around the world to learn with us through live, interactive sessions with personalized coaching.",
  },
  {
    question: "Do you offer one-to-one and group classes?",
    answer:
      "Yes, we provide both. Private one-to-one sessions offer personalized focus on a student's specific tactical weaknesses, while our small group classes (limited to 4 students) foster healthy competition and collaborative analysis among peers.",
  },
];

const enrollmentFaqs = [
  {
    question: "How can I book a free trial class?",
    answer:
      "Booking is simple. Click the \"Book Your Free Trial\" button at the top of the page, select a date and time, and choose a slot that fits your schedule. A trial includes a 30-minute skill assessment by one of our master instructors.",
  },
  {
    question: "What are your class timings?",
    answer:
      "We operate on a flexible schedule with morning and evening slots available across all time zones. Weekend intensive sessions are also offered for competitive students preparing for tournament play.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, Mastercard, AMEX), bank transfers, and digital wallets like PayPal. For international families, we also support international payment options. Any currency conversion charges, bank transfer fees, or payment processing fees charged by your bank or payment provider are the responsibility of the payer unless otherwise agreed. Tuition fees are to be paid monthly in start of the month.",
  },
];

const supportFaqs = [
  {
    question: "Can I reschedule a missed class?",
    answer:
      "Yes, per One to One classes we try to reschedule classes if informed 12 hr prior. For group classes we provide recording of the missed class.",
  },
  {
    question: "Do parents receive progress updates?",
    answer:
      "Absolutely. We provide monthly progress reports that include game analysis, tactical growth metrics, and areas for improvement.",
  },
  {
    question: "How can I contact the academy?",
    answer:
      "Our support team is available via email at primesquarechessacademy@gmail.com. We also have a dedicated WhatsApp line (+91 8980635996) for quick student-teacher communication.",
  },
];

export default function FAQsPage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero Header Banner */}
      <section className="relative overflow-hidden bg-surface pt-12 pb-8 md:py-16 border-b border-border-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center mt-1 md:mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-secondary/50"></div>
            <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase text-xs md:text-sm">
              Academic FAQ
            </span>
            <div className="h-[1px] w-12 bg-secondary/50"></div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-4 font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-sm md:text-body-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Everything parents usually ask before enrolling.
          </p>
        </div>
      </section>

      {/* 2. Accordions by Category */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1085px] mx-auto px-6">
          {/* Classes Accordion Group */}
          <div className="bg-surface-container-lowest border border-border-warm/60 shadow-sm p-4 md:p-10 mb-6 md:mb-12 rounded-2xl md:rounded-[20px]">
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-4 md:mb-8 border-b border-border-warm pb-3 md:pb-4 flex items-center gap-5 md:gap-4">
              <div className="w-11 h-11 md:w-[34px] md:h-[34px] bg-surface-container-low border border-border-warm rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden mr-0 md:mr-1 relative">
                <Image
                  src={Classes} alt="Classes icon"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              Classes
            </h2>
            <Accordion items={classesFaqs} />
          </div>

          {/* Enrollment Accordion Group */}
          <div className="bg-surface-container-lowest border border-border-warm/60 shadow-sm p-4 md:p-10 mb-6 md:mb-12 rounded-2xl md:rounded-[20px]">
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-4 md:mb-8 border-b border-border-warm pb-3 md:pb-4 flex items-center gap-5 md:gap-4">
              <div className="w-11 h-11 md:w-[34px] md:h-[34px] bg-surface-container-low border border-border-warm rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden mr-0 md:mr-1 relative">
                <Image
                  src={Enrollment} alt="Enrollment icon"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              Enrollment
            </h2>
            <Accordion items={enrollmentFaqs} />
          </div>

          {/* Support Accordion Group */}
          <div className="bg-surface-container-lowest border border-border-warm/60 shadow-sm p-4 md:p-10 mb-6 md:mb-12 rounded-2xl md:rounded-[20px]">
            <h2 className="font-display text-2xl md:text-headline-lg text-primary mb-4 md:mb-8 border-b border-border-warm pb-3 md:pb-4 flex items-center gap-5 md:gap-4">
              <div className="w-11 h-11 md:w-[34px] md:h-[34px] bg-surface-container-low border border-border-warm rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden mr-0 md:mr-1 relative">
                <Image
                  src={Support}
                  alt="Support icon"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              Support
            </h2>
            <Accordion items={supportFaqs} />
          </div>
        </div>
      </section>

      {/* 3. Final CTA Banner */}
      <section className="py-20 md:py-24 bg-cta-deep-green text-surface-bright relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/linen.png")`,
          }}
        />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl mb-8 max-w-3xl mx-auto leading-tight">
            Help Your Child Discover Their <br /> Potential Through Chess.
          </h2>
          <p className="font-sans text-sm md:text-body-lg mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
            Experience a personalized trial lesson with experienced FIDE Rated Coaches. <br /> Discover how structured coaching helps children improve with
            confidence.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 bg-surface-bright text-primary font-button text-button px-10 py-5 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-md font-bold text-center mx-auto"
          >
            Book Your Free Trial
            <MaterialIcon name="arrow_forward" className="text-xl" />
          </Link>
        </div>
      </section>
    </main>
  );
}
