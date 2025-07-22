'use client';

import Image from 'next/image';

type SpinnerLoaderProps = {
  width?: number;
  height?: number;
};

export default function SpinnerLoader({ width = 72, height = 72 }: SpinnerLoaderProps) {
  return (
    <div className="flex items-center justify-center min-w-[100px] min-h-[100px]">
      <Image
        src="/images/spinner.svg"  
        alt="Loading..."
        width={width}
        height={height}
        className="animate-spin"
        priority
      />
    </div>
  );
}
