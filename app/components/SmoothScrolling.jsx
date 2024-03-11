"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ syncTouch: true, touchInertiaMultiplier: 10 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
