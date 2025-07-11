'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="text-xl text-foreground hover:text-primary transition-colors cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? <FiMoon /> : <FiSun />}
    </button>
  );
}
