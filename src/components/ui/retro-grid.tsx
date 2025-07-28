import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))] flex justify-center">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [transform-origin:100%_0_0] [width:600vw]",
            "[transform:translateY(-50%)]",
            // dark Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.6)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.6)_1px,transparent_0)]",

            // light styles
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1.5px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1.5px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}
