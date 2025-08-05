// components/LetterLoader.tsx
import styles from "./text-loader.module.css"

export const LetterLoader = () => {
  const letters = ["G", "A", "R", "T", "E", "L", "S"]

  return (
    <div className="fixed z-50 inset-0 w-full h-screen flex items-center justify-center bg-background text-primary font-semibold">
      <div className="relative max-w-[520px] w-full px-8 mx-4 text-center">
        {/* Animated Letters */}
        <div className="flex justify-evenly text-[20px] md:text-[5vw] leading-[64px] tracking-[10px] mb-8">
          {letters.map((char, index) => (
            <span
              key={index}
              className={`${styles.letter} inline-block`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Animated Underline */}
        <div className={`${styles.line} absolute bottom-0 left-0 h-[3px] w-full rounded-lg bg-brand`} />
      </div>
    </div>
  )
}
