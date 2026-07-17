import React from "react";
import MaterialIcon from "@/components/MaterialIcon";

export default function BookPage() {
  return (
    <main className="pt-32 pb-24 md:py-36 bg-background flex flex-col items-center">
      {/* 1. Hero Section */}
      <section className="max-w-[800px] w-full mx-auto text-center px-6 mb-16 mt-6">
        <h1 className="font-display text-3xl md:text-5xl text-primary mb-6">
          Book Your Free Trial Lesson
        </h1>
        <p className="font-sans text-sm md:text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-[700px] mx-auto">
          Choose a convenient date and time below to schedule your free 30–45
          minute chess trial. Meet your coach, experience our teaching approach,
          and receive personalized guidance—all with no commitment.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-4">
          <div className="flex items-center gap-2">
            <MaterialIcon
              name="event_available"
              className="text-secondary text-xl font-bold"
            />
            <span className="font-label-md text-xs md:text-sm uppercase tracking-wider text-on-surface-variant">
              Free Trial
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MaterialIcon
              name="schedule"
              className="text-secondary text-xl font-bold"
            />
            <span className="font-label-md text-xs md:text-sm uppercase tracking-wider text-on-surface-variant">
              30–45 Minutes
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MaterialIcon
              name="videocam"
              className="text-secondary text-xl font-bold"
            />
            <span className="font-label-md text-xs md:text-sm uppercase tracking-wider text-on-surface-variant">
              Online via Zoom
            </span>
          </div>
        </div>
      </section>

      {/* 2. Zoom Scheduler Widget */}
      <section className="w-full px-6 max-w-container-max mx-auto relative">
        {/* Glow backdrop effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-[1000px] mx-auto bg-white rounded-[24px] border border-border-warm shadow-xl overflow-hidden relative">
          <iframe
            src="https://scheduler.zoom.us/prime-square-chess-academy/free-demo-with-our-expert-coach?embed=true"
            title="Prime Square Chess Academy Zoom Scheduler"
            className="w-full min-h-[750px] border-none"
            allow="camera; microphone; geolocation"
          />
        </div>
      </section>

      {/* 3. Help Section */}
      <section id="help" className="mt-16 w-full px-6 max-w-container-max mx-auto text-center">
        <div className="max-w-[800px] mx-auto bg-surface-container-lowest border border-border-warm shadow-sm rounded-xl py-10 px-8">
          <h3 className="font-display text-xl md:text-headline-md text-primary mb-4">
            Need Help Booking Your Trial?
          </h3>
          <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-8 leading-relaxed">
            Having trouble selecting a time or have questions before booking?
            Contact us—we&apos;ll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-border-warm font-button text-sm text-primary hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
              href="https://api.whatsapp.com/send/?phone=918980635996&text=Hi%21+I+am+interested+in+chess+classes.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MaterialIcon name="chat_bubble" className="text-xl" />
              Contact on WhatsApp
            </a>
            <a
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-border-warm font-button text-sm text-primary hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
              href="mailto:primesquarechessacademy@gmail.com"
            >
              <MaterialIcon name="mail" className="text-xl" />
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
