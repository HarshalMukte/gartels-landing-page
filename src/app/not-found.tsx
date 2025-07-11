import { Illustration, NotFoundComponent } from '@/components/blocks/not-found'
import React from 'react'

const NotFound = () => {
  return (
   <div className="relative flex flex-col w-full justify-center min-h-svh bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04] dark:opacity-[0.03] text-foreground" />
        <NotFoundComponent
          title="Page not found"
          description="Sorry, the page you are looking for could not be found."
        />
      </div>
    </div>
  )
}

export default NotFound