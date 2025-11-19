"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { FAQItemProps } from "../types";

export type { FAQItemProps };

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-md p-4 sm:p-5 border border-gray-100">
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
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-600">
            Everything you need to know about StockKeeper
          </p>
        </div>
        <div className="space-y-4">
          <FAQItem
            question="How does the free trial work?"
            answer="You get full access to all features for 14 days, no credit card required. After the trial, you can choose a plan that fits your needs or continue with our free tier."
          />
          <FAQItem
            question="Can I import my existing inventory?"
            answer="Yes! You can easily import your inventory using CSV files. We also provide templates and support to help you get started quickly."
          />
          <FAQItem
            question="Is my data secure?"
            answer="Absolutely. We use bank-level encryption and security measures to protect your data. Your inventory information is backed up daily and stored securely."
          />
          <FAQItem
            question="Do you offer mobile apps?"
            answer="Yes! We have native apps for both iOS and Android. You can manage your inventory, scan barcodes, and check stock levels from anywhere."
          />
          <FAQItem
            question="What kind of support do you provide?"
            answer="We offer 24/7 email support, live chat during business hours, and comprehensive documentation. Premium plans include phone support and dedicated account managers."
          />
          <FAQItem
            question="Can I cancel anytime?"
            answer="Yes, you can cancel your subscription at any time with no penalties. Your data will remain accessible, and you can export it whenever needed."
          />
        </div>
      </div>
    </section>
  );
}
