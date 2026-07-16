# Implementation Plan - Mobile Redesign and Optimization

This plan details the styling, layout, and UX improvements to optimize the Prime Square Chess Academy website for mobile viewports (360px – 479px), ensuring comfortable one-handed usage and a premium feel. All changes will be scoped specifically to mobile sizes (`max-md:` or overriding base styles while keeping `md:` and `lg:` styles intact) to prevent any modifications to the finalized desktop/tablet layouts.

---

## User Review Required

> [!IMPORTANT]
> **Mobile Layout Enhancements**:
> We will introduce horizontal swipe carousels (with snap scrolling) on mobile for multiple sections that currently stack long lists vertically. This includes:
> 1. Why Parents Choose Us cards (Home page)
> 2. Your Chess Journey steps (Home page)
> 3. Parent Testimonials (Success Stories page)
> 4. Curriculum Levels (Programs page)
> 5. Ecosystem features (Programs page)
> This significantly reduces vertical scroll fatigue while maintaining a modern, premium experience.

---

## Proposed Changes

### 1. Global Styles & Utilities

#### [MODIFY] [globals.css](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/globals.css)
- Add utility classes for mobile touch-targets, premium scroll-snap carousels, and hiding scrollbars.
- Add animation classes for drawer opening/closing and fade-up on scroll.
- Define custom utilities for mobile padding and spacing.

```css
/* Scroll snap utility for carousels */
.snap-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.snap-carousel::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.snap-carousel-item {
  scroll-snap-align: center;
  flex-shrink: 0;
}
```

---

### 2. Layout Components

#### [MODIFY] [Navbar.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/components/Navbar.tsx)
- Redesign the mobile hamburger menu with smooth open/close animations.
- Prevent body scrolling when the mobile drawer is open.
- Increase tap targets (minimum 48px height) for navigation items.
- Style the mobile navbar to be sticky with a premium blurred background and subtle border.

#### [MODIFY] [Footer.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/components/Footer.tsx)
- Optimize spacing and grid layouts for mobile.
- Center align brand info and links on mobile screens for balanced visual rhythm.
- Wrap lists and spacing so touch targets are clear and not cramped.

---

### 3. Page Implementations

#### [MODIFY] [page.tsx (Home Page)](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/page.tsx)
- **Hero Section**:
  - Adjust title text to `text-3xl` or `text-[32px]` on mobile to fit nicely.
  - Stack primary ("Book Free Trial") and secondary ("Read Success Stories") CTAs vertically, making them full-width with comfortable tap heights.
  - Adjust hero image aspect ratio/placement. Ensure the absolute structured curriculum badge is displayed gracefully on mobile (styled inline or below the image) rather than hidden.
- **Trust Section**:
  - Wrap school logos or make them horizontally scrollable on mobile to keep the layout clean.
- **Why Choose Us Grid**:
  - Convert 5-feature grid into a horizontal swipe carousel.
- **Your Chess Journey (Timeline)**:
  - Convert 4 steps into a horizontal swipe carousel with step numbers and card designs.
- **Featured Success Story (Spotlight)**:
  - Adjust double Polaroid stack layout to overlap nicely without clipping on small screens.
  - Optimize padding and typography of Parent quote.

#### [MODIFY] [about/page.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/about/page.tsx)
- **Hero & Video**:
  - Stack copy and video container. Adjust video dimensions and border radius on mobile.
- **Our Story Blocks**:
  - Adjust vertical spacing and block margins.
  - Refine mobile `order` of images and text so they stack logically and consistently.
- **Meet the Coaches**:
  - Convert coach cards to be more compact on mobile. Introduce rounded-full avatar styled images with centered details instead of large stretched rectangle images.
- **Teaching Philosophy**:
  - Convert 3 principles into a mobile-friendly swipe carousel or compact cards.
- **Impact Metrics**:
  - Optimize text sizes and layout for 2x2 grid on mobile screens.

#### [MODIFY] [programs/page.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/programs/page.tsx)
- **Curriculum Levels**:
  - Convert 5 level cards into a horizontal swipe carousel.
  - Center elements and optimize font sizes.
- **Class Formats**:
  - Review paddings, border radius, list spacings, and CTA links.
- **Ecosystem Features**:
  - Convert 6 cards into a horizontal swipe carousel.

#### [MODIFY] [success-stories/page.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/success-stories/page.tsx)
- **Student Achievements**:
  - Stack or convert the 3 achievement cards into a swipe carousel.
- **Parent Testimonials**:
  - Convert the 6 testimonials into a horizontal swipe carousel with pagination indicators. This drastically reduces page length and improves readability.

#### [MODIFY] [faqs/page.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/faqs/page.tsx)
- Optimize Accordion spacing and touch targets.
- Ensure FAQ headers, cards, and text wrap correctly on 360px-479px viewports.

#### [MODIFY] [book/page.tsx](file:///c:/Users/Vedant/Downloads/PSCA/Prime%20Square/src/app/book/page.tsx)
- **Booking Iframe Section**:
  - Optimize the container around the Zoom Scheduler iframe. Ensure it fills the screen width nicely on mobile.
- **Help Section**:
  - Stack Help CTAs (WhatsApp, Email) vertically with comfortable touch target paddings.

---

## Verification Plan

### Automated Verification
- Run Next.js linting and TypeScript checks:
  `npm run lint` or `npx tsc --noEmit`
- Run building to check compile success:
  `npm run build`

### Manual Verification
- Deploy the dev server and test:
  `npm run dev`
- Launch a browser subagent using Chrome DevTools or inspect using mobile responsiveness mode to check:
  - Layout behavior on Viewport Width: 360px – 479px.
  - Carousel swiping and visual appearance.
  - Hamburger menu toggle, sticky behavior, and open/close animations.
  - Text wrapping and spacing on all pages.
  - Desktop layout (1280px+) matches the current state exactly and is completely unaffected.
