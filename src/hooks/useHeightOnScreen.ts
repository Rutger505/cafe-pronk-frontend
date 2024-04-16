import { RefObject, useEffect, useState } from "react";

export default function useHeightOnScreen(ref: RefObject<Element>) {
  const [visibleHeight, setVisibleHeight] = useState<number>();

  const calculateVisibleHeight = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      setVisibleHeight(visibleHeight);
    }
  };

  useEffect(() => {
    calculateVisibleHeight();

    window.addEventListener("scroll", calculateVisibleHeight);

    return () => {
      window.removeEventListener("scroll", calculateVisibleHeight);
    };
  }, [ref]);

  return visibleHeight;
}
