import { useEffect } from "react";
import { useAnimate } from "framer-motion";

const useHelpAnimate = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".helpmodal",
      {
        clipPath: isOpen
          ? "inset(-20% 0% 0% 0% round 10px)"
          : "inset(10% 10% 90% 90% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
  }, [isOpen]);

  return scope;
};

export default useHelpAnimate;
