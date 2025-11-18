"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { FAQItemProps } from "./types";

export type { FAQItemProps };

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md p-4 sm:p-5 border border-gray-100">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-base pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 pt-3 mt-3 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-600">
            Everything you need to know about the waitlist
          </p>
        </div>
        <div className="space-y-4">
          <FAQItem
            question="When will StockKeeper launch?"
            answer="We're planning to launch in Q2 2026. Waitlist members will be notified first and get early access before the public launch."
          />
          <FAQItem
            question="Is joining the waitlist free?"
            answer="Yes, absolutely! Joining the waitlist is completely free and comes with no obligations. You'll just receive updates and early access when we launch."
          />
          <FAQItem
            question="What are the early bird benefits?"
            answer="Waitlist members get 50% off their first year, priority access, exclusive features, dedicated support, and the ability to influence our product roadmap."
          />
          <FAQItem
            question="Will my data be secure?"
            answer="Absolutely. We use bank-level encryption and follow industry best practices for data security. Your information will never be shared with third parties."
          />
          <FAQItem
            question="Can I cancel my waitlist registration?"
            answer="Yes, you can unsubscribe from the waitlist at any time using the link in any of our emails. No questions asked."
          />
          <FAQItem
            question="What happens after I join?"
            answer="You'll receive a confirmation email immediately, followed by regular updates about our progress. When we launch, you'll be among the first to know and get priority access."
          />
        </div>
      </div>
    </section>
  );
}