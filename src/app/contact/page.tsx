"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import React from "react";
import { motion } from "framer-motion";
import FormLayout from "@/components/ui/form";
import { Globe } from "@/components/ui/globe";
import { FaqSection } from "@/components/blocks/faq";

const DEMO_FAQS = [
  {
    question: "What makes your platform unique?",
    answer:
      "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
  },
  {
    question: "How does the pricing structure work?",
    answer:
      "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
  },
];

const ContactPage = () => {
  return (
    <div>
      <BackgroundPaths title="Contact Us" />

      {/* Contact Information & Form */}
      <section
        id="contact-wrapper"
        className="mx-auto relative max-w-7xl py-16 md:py-24 bg-white dark:bg-neutral-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative max-h-[450px] flex size-full max-w-lg justify-center items-center overflow-hidden rounded-lg border bg-background px-40 pb-20 pt-4 md:pb-60 md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  Gartels
                </span>
                <Globe className="top-28" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <FormLayout />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-background rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.226084047832!2d72.77009047523319!3d20.16631001684116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72bbb173a747f%3A0xf3c850700d7efaf6!2sGARTELS%20WERKE%20LIMITED!5e0!3m2!1sen!2sin!4v1753726393346!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gartels Headquarters Location"
            />
          </motion.div>
        </div>
        <FaqSection
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          items={DEMO_FAQS}
          contactInfo={{
            title: "Still have questions?",
            description: "We're here to help you",
            buttonText: "Contact Support",
            onContact: () => console.log("Contact support clicked"),
          }}
        />
      </section>
    </div>
  );
};

export default ContactPage;
