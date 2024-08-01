import clsx from "clsx";
import { useEffect, useState } from "react";

export default function useOnMouseEnterAnimation(delay: number = 4000) {
  const [isClicked, setIsClicked] = useState(false);
  const animationStyles = clsx(
    isClicked ? "opacity-100" : "opacity-0",
    "transition-opacity duration-300",
  );

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), delay);
      return () => clearTimeout(timer);
    }
  }, [delay, isClicked]);

  function startAnimation() {
    setIsClicked(true);
  }

  return { startAnimation, animationStyles };
}
