import { Waves } from '@/components/ui/waves-background'
import React from 'react'

const BlogPage = () => {
  const theme = "light";
  return (
    <div className='relative w-full'>
      <div className="relative w-full flex items-center justify-center max-w-5xl h-[400px] my-24 mx-auto bg-background/80 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <Waves
            lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}
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
          <p className="text-muted-foreground text-2xl">Insights, tips, and industry news about springs and industrial manufacturing.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage