import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLElement>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const buttonEl = buttonRef?.current;

      if (
        !el ||
        el.contains((event?.target as Node) || null) ||
        (buttonEl && buttonEl.contains((event?.target as Node) || null))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, buttonRef, handler]);
};

export default useOnClickOutside;
