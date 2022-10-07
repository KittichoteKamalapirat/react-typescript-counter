import { useRef } from "react";

export const useCountRenders = () => {
  const renders = useRef(0);
  renders.current++;
  return renders;
};
