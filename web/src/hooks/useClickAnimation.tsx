import clsx from "clsx";
import { useState } from "react";

export default function useClickAnimation(delay: number = 200) {
  const [isClicked, setIsClicked] = useState(false);
  const animationStyles = clsx(
    isClicked
      ? "hover:scale-90 group-hover:scale-75"
      : "hover:scale-110 group-hover:scale-110",
    "transition-transform duration-300",
  );

  function startAnimation() {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), delay);
  }

  return { startAnimation, animationStyles };
}
