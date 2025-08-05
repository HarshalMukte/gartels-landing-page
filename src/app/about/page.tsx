"use client";
import ImmersiveScrollGallery from "@/components/blocks/immersive-scroll-gallery";
import TimelineWrapper from "@/components/blocks/timeline-wrapper";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Heart, Shield } from "lucide-react";
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
          {/* Founder Tribute */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container-industrial">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                In Memory of Our Founder
              </h2>
              <p className="text-lg text-muted-foreground italic">
                &quot;First Quality, Delivery, Price&quot; - Mr. D.R. Panicker
              </p>
            </div>
            
            <div className="bg-brand-foreground-light rounded-2xl p-8 md:p-12 space-y-6">
              <div className="w-24 h-24 bg-brand rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                Our late founder, Mr. D.R. Panicker, established Gartels Werke in 1979 with a simple yet 
                powerful philosophy: never compromise on quality, always honor delivery commitments, and 
                maintain competitive pricing through operational excellence. His vision continues to guide 
                us today, ensuring that every spring we manufacture carries forward his legacy of excellence.
              </p>
              <p className="text-base text-muted-foreground">
                Though he is no longer with us, his principles remain the cornerstone of our operations, 
                inspiring every member of our team to uphold the highest standards of craftsmanship and 
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="time-line-wrapper">
        <TimelineWrapper />
      </section>
      <div className="mx-auto relative min-h-dvh max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center my-16  space-y-4"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-foreground-light border border-brand-foreground text-black text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Our Gallery
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Capturing Excellence at
                  <span className="block text-brand">Gartels</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A visual showcase of our craftsmanship, facilities, and the precision
                  that defines every spring we manufacture.
                </p>
              </motion.div>
        <ImmersiveScrollGallery />
      </div>
    </>
  );
};

export default AboutPage;
