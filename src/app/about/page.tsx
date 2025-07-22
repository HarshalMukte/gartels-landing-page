"use client";
import ImmersiveScrollGallery from "@/components/blocks/immersive-scroll-gallery";
import TimelineWrapper from "@/components/blocks/timeline-wrapper";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative max-w-7xl flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            About Gartels
          </div>
          <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
            Discover our story, our values, and the people behind our success.
          </div>
          <Link href="#time-line-wrapper">
            <button className="bg-black cursor-pointer dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Discover now
            </button>
          </Link>
        </motion.div>
      </AuroraBackground>
      <section id="time-line-wrapper">
        <TimelineWrapper />
      </section>
      <div className="mx-auto relative min-h-dvh max-w-7xl">
        <ImmersiveScrollGallery />
      </div>
    </>
  );
};

export default AboutPage;
