import { useCallback, useRef } from "react";
import { prefersReducedMotion, useGsapContext } from "../../hooks/useGsapContext";
import { handleNavClick } from "../../utils/smoothScroll";
import BrandLogo from "./BrandLogo";
import "./Header.scss";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

function Header() {
  const headerRef = useRef(null);

  const createAnimations = useCallback((gsap) => {
    if (prefersReducedMotion()) return;

    gsap.from(".site-header__inner > *", {
      opacity: 0,
      y: -16,
      duration: 0.55,
      stagger: 0.08,
      ease: "power2.out",
      delay: 0.1,
    });
  }, []);

  useGsapContext(headerRef, createAnimations);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <BrandLogo />
        <nav className="site-header__nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
