"use client";

import React, { useState } from "react";
import MaterialIcon from "../MaterialIcon";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`border bg-surface-white overflow-hidden transition-all duration-300 rounded-[20px] shadow-sm ${
              isOpen
                ? "border-primary ring-1 ring-primary/20"
                : "border-border-warm hover:border-primary/20"
            }`}
          >
            <button
              className="flex items-center justify-between text-left hover:bg-surface-container-low transition-colors group w-full py-6 px-[28px] focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span
                className={`font-headline-md text-lg md:text-xl transition-colors duration-300 ${
                  isOpen ? "text-primary font-semibold" : "text-on-surface"
                }`}
              >
                {item.question}
              </span>
              <MaterialIcon
                name="expand_more"
                className={`text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-secondary" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-8 pb-8 font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-border-warm/50 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
