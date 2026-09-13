import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { prefersReducedMotion } from "../hooks/useGsapContext";

gsap.registerPlugin(ScrollToPlugin);

const HEADER_OFFSET = 72;

export function scrollToSection(hash, { onComplete } = {}) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id) || document.querySelector(hash);

  if (!target) return;

  if (prefersReducedMotion()) {
    target.scrollIntoView();
    onComplete?.(target);
    return;
  }

  gsap.to(window, {
    duration: 1.15,
    ease: "power3.inOut",
    scrollTo: {
      y: target,
      offsetY: HEADER_OFFSET,
      autoKill: true,
    },
    onComplete: () => {
      playArriveEffect(target);
      onComplete?.(target);
    },
  });
}

function playArriveEffect(target) {
  gsap.fromTo(
    target,
    { opacity: 0.72 },
    {
      opacity: 1,
      duration: 0.55,
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  const heading = target.querySelector("h1, h2");
  if (!heading) return;

  gsap.fromTo(
    heading,
    { y: 18, opacity: 0.35 },
    {
      y: 0,
      opacity: 1,
      duration: 0.55,
      ease: "power3.out",
      clearProps: "transform,opacity",
    }
  );
}

export function handleNavClick(event) {
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  event.preventDefault();
  scrollToSection(href);

  if (href !== "#top") {
    window.history.pushState(null, "", href);
  } else {
    window.history.pushState(null, "", window.location.pathname);
  }
}
