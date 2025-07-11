// "use client";

// import Image from "next/image";
// import dynamic from "next/dynamic";
import CompaniesWrapper from "@/components/blocks/companies-wrapper";
import { HeroSection } from "@/components/blocks/hero-section";
import ImmersiveScrollGallery from "@/components/blocks/immersive-scroll-gallery";
import WorldMapComponent from "@/components/blocks/worldMap-section";
// const WorldMapComponent = dynamic(() => import("@/components/blocks/worldMap-section"));
import { Icons } from "@/components/ui/icons";
import { TextPressure } from "@/components/ui/interactive-text-pressure";
// import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <HeroSection
          badge={{
            text: "Introducing our new components",
            action: {
              text: "Learn more",
              href: "/docs",
            },
          }}
          title="Build faster with beautiful components"
          description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
          actions={[
            {
              text: "Get Started",
              href: "/docs/getting-started",
              variant: "default",
            },
            {
              text: "GitHub",
              href: "https://github.com/your-repo",
              variant: "glow",
              icon: <Icons.gitHub className="h-5 w-5" />,
            },
          ]}
          image={{
            light: "https://www.launchuicomponents.com/app-light.png",
            dark: "https://www.launchuicomponents.com/app-dark.png",
            // light: "",
            // dark: "",
            alt: "UI Components Preview",
          }}
        />
      </div>
      <div className="mx-auto relative max-w-7xl">
        <CompaniesWrapper />
      </div>
      <div className="mx-auto relative min-h-dvh max-w-7xl">
        <WorldMapComponent />
      </div>
      <div className="mx-auto relative min-h-dvh">
        <ImmersiveScrollGallery />
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
