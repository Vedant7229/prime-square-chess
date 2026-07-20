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
    <div className="space-y-3.5 md:space-y-6">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`border overflow-hidden transition-all duration-300 rounded-xl md:rounded-[20px] shadow-sm ${
              isOpen
                ? "border-primary ring-1 ring-primary/20 bg-primary/[0.015] md:bg-surface-white"
                : "border-border-warm bg-surface-white hover:border-primary/20"
            }`}
          >
            <button
              className="flex items-center justify-between text-left hover:bg-surface-container-low transition-all duration-150 active:scale-[0.995] md:active:scale-100 group w-full py-4 px-5 md:py-6 md:px-[28px] focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span
                className={`font-headline-md text-base md:text-xl transition-colors duration-300 ${
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
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-border-warm/50 pt-3 md:px-8 md:pb-8 md:pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
