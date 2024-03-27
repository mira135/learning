import { useRef, useEffect } from "react";

export const useRenderCount = () => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = ref.current + 1;
  });
  return ref.current;
};
