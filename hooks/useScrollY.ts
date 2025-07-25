import { useEffect, useState } from "react";

export const useScrollY = (): number => {

  const [scrollY, setScrollY] = useState<number>(0);

  const isBrowser = typeof window !== "undefined";

  const handleScroll = () => {
    const currentScroll = isBrowser ? window.scrollY : 0;
    setScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};