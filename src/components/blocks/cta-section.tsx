"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RetroGrid } from "../ui/retro-grid";

const CTASection = () => {
  return (
    // <section className="relative py-20 bg-gradient-to-b from-black dark:from-brand to-transparent text-brand dark:text-foreground overflow-hidden">
    <section className="relative py-20 bg-gradient-to-b from-brand to-transparent text-foreground overflow-hidden"> 
    {/* <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden"> */}

      {/* Background pattern */}
      <RetroGrid />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Upgrade Your Spring Solution?
            </h2>
            <p className="text-lg md:text-xl dark:text-blue-100 text-gray-500 mb-10 max-w-3xl mx-auto">
              Our engineering team is ready to help you find the perfect spring
              for your application. Get in touch for a consultation and custom
              quote.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:text-foreground border border-foreground hover:bg-transparent px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="/about"
                className="border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="flex items-center flex-col gap-2">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Free Engineering Consultation</span>
              </div>

              <div className="flex items-center flex-col gap-2">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Quick Turnaround</span>
              </div>

              <div className="flex items-center flex-col gap-2">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
