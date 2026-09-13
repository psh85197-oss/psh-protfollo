import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsapContext(scopeRef, createAnimations) {
  useEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      createAnimations(gsap, ScrollTrigger);
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, createAnimations]);
}
