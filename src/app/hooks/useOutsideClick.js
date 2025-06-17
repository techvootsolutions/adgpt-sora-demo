import { useEffect } from "react";

export const useOutsideClick = (refs, callback, isActive) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const target = e.target;

      if (!isActive) return;

      const clickedOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(target)
      );

      if (clickedOutside) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [refs, callback, isActive]);
};
