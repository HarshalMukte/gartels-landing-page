import React from "react"
import styles from "./box-loader.module.css"

interface BoxLoaderProps {
  size?: number // default 1
  className?: string
}

export const BoxLoader: React.FC<BoxLoaderProps> = ({ size = 1, className = "" }) => {
  return (
    <div
      className={`${styles.boxes} ${className}`}
      style={{
        transform: `rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px) scale(${size})`,
      }}
    >
      {[1, 2, 3, 4].map((box) => (
        <div key={box} className={styles.box}>
          <div />
          <div />
          <div />
          <div />
        </div>
      ))}
    </div>
  )
}
