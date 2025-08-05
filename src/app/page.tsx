"use client";

// import dynamic from "next/dynamic";
import { HeroSection } from "@/components/blocks/hero-section";
import CompaniesWrapper from "@/components/blocks/companies-wrapper";
import WorldMapComponent from "@/components/blocks/worldMap-section";
import { TextPressure } from "@/components/ui/interactive-text-pressure";
import WhyChooseGartels from "@/components/blocks/why-choose-gartels";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import CTASection from "@/components/blocks/cta-section";

// Dynamically import heavy components
// const CompaniesWrapper = dynamic(() => import("@/components/blocks/companies-wrapper"), {
//   loading: () => <BoxLoader />,
//   ssr: false,
// });
// const WorldMapComponent = dynamic(() => import("@/components/blocks/worldMap-section"), {
//   loading: () => <BoxLoader />,
//   ssr: false,
// });
// const WhyChooseGartels = dynamic(() => import("@/components/blocks/why-choose-gartels"), {
//   loading: () => <BoxLoader />,
//   ssr: false,
// });
// const TestimonialsSection = dynamic(() => import("@/components/blocks/testimonials-with-marquee"), {
//   loading: () => <BoxLoader />,
//   ssr: false,
// });
// const CTASection = dynamic(() => import("@/components/blocks/cta-section"), {
//   loading: () => <BoxLoader />,
//   ssr: false,
// });


export default function Home() {
  return (
    <div>
      <div className="mx-auto">
        <HeroSection
          badge={{
            text: "An ISO 9001:2015 Certified Company",
            action: {
              text: "About us",
              href: "/about",
            },
          }}
          title="Precision Engineered Springs for Every Industry"
          description="Delivering custom spring solutions with unmatched quality and reliability for over 45 years."
          actions={[
            {
              text: "Get Started",
              href: "#main-frame",
              variant: "default",
            },
          ]}
          image={{
            // light: "https://www.launchuicomponents.com/app-light.png",
            light: "/images/hero-manufacturing.jpg",
            dark: "/images/hero-manufacturing.jpg",
            // dark: "https://www.launchuicomponents.com/app-dark.png",
            alt: "UI Components Preview",
          }}
        />
      </div>
      <div className="mx-auto relative max-w-7xl">
        <CompaniesWrapper />
      </div>
      <div className="mx-auto relative max-w-7xl">
        <WorldMapComponent />
      </div>
      <div className="mx-auto relative max-w-7xl">
        <WhyChooseGartels />
      </div>
      <div className="mx-auto relative max-w-7xl p-4">
        {/* <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonialsData}
        /> */}
        <TestimonialsSection />
      </div>
      <div className="mx-auto relative">
        <CTASection />
      </div>
      <div className="bg-black py-14 px-4">
        <TextPressure
          text="Gartels!"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          // textColor={getTextColor(theme)}
          // strokeColor={getStrokeColor(theme)}
          minFontSize={10}
          className="cursor-default"
        />
      </div>
    </div>
  );
}
