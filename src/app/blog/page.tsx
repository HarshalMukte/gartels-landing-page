"use client";
import BlogList from "@/components/BlogList";
import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "@/context/theme-context";
import blogData from "@/data/blogData.json";

// Metadata is handled in layout.tsx for client components

export default function BlogPage() {
  const { theme } = useTheme();
  // Sort posts by date (newest first)
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-20 pb-16">
      <div className="relative w-full flex items-center justify-center max-w-5xl h-[400px] my-20 mx-auto bg-background/80 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <Waves
            lineColor={
              theme === "dark"
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(0, 0, 0, 0.3)"
            }
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

        <div className="relative z-10 p-8 text-center">
          <h3 className="text-8xl font-bold">Blogs</h3>
          <p className="text-muted-foreground text-2xl">
            Insights, tips, and industry news about springs and industrial
            manufacturing.
          </p>
        </div>
      </div>

      <BlogList posts={sortedPosts} />
    </div>
  );
}
