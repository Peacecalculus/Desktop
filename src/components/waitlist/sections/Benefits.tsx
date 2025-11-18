"use client";

import React from "react";
import {
  FaTag,
  FaCrown,
  FaGift,
  FaComments,
} from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import IconCard from "@/components/waitlist/IconCard";

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Join the Waitlist?
          </h2>
          <p className="text-base text-gray-600">
            Early adopters get exclusive benefits and special pricing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IconCard
            icon={FaTag}
            title="50% Off First Year"
            description="Exclusive early bird pricing for waitlist members. Save hundreds on your subscription."
            isBenefit={true}
          />
          <IconCard
            icon={FaCrown}
            title="VIP Priority Access"
            description="Be the first to try out new features when we roll them out. Skip the queue entirely."
            isBenefit={true}
          />
          <IconCard
            icon={FaGift}
            title="Exclusive Features"
            description="Get access to premium features not available to regular users at launch."
            isBenefit={true}
          />
          <IconCard
            icon={SlEarphonesAlt}
            title="Priority Support"
            description="Guaranteed onboarding assistance and priority customer support for life."
          />
          <IconCard
            icon={FaComments}
            title="Shape the Product"
            description="Direct input into our roadmap. Your feedback will prioritize development."
          />
          <IconCard
            icon={MdVerified}
            title="Founder's Badge"
            description="Receive a special Founder's badge and recognition in our community."
          />
        </div>
      </div>
    </section>
  );
}