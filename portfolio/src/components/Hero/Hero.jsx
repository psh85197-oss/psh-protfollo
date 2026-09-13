import { Fragment, useCallback, useRef } from "react";
import { profile } from "../../data/profile";
import { prefersReducedMotion, useGsapContext } from "../../hooks/useGsapContext";
import { handleNavClick } from "../../utils/smoothScroll";
import "./Hero.scss";

const techStack = [
  "HTML",
  "Vue",
  "React",
  "CSS",
  "SCSS",
  "Tailwind",
  "JavaScript",
];

function Hero() {
  const sectionRef = useRef(null);

  const createAnimations = useCallback((gsap) => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(".hero__orb", { scale: 0.7, opacity: 0 });
    gsap.set(
      [
        ".hero__role",
        ".hero__name",
        ".hero__ai-note",
        ".hero__lead-stack",
        ".hero__lead-desc",
        ".hero__cta",
      ],
      { opacity: 0, y: 36 }
    );

    tl.to(".hero__orb", {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.out",
    })
      .to(
        ".hero__role",
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.7"
      )
      .to(".hero__name", { opacity: 1, y: 0, duration: 0.7 }, "-=0.35")
      .to(
        ".hero__ai-note",
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.35"
      )
      .to(
        ".hero__lead-stack",
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.25"
      )
      .to(
        ".hero__lead-desc",
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .to(
        ".hero__cta",
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
        "-=0.25"
      );

    gsap.to(".hero__orb--a", {
      y: -22,
      x: 14,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero__orb--b", {
      y: 18,
      x: -12,
      duration: 5.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.4,
    });
  }, []);

  useGsapContext(sectionRef, createAnimations);

  return (
    <section
      className="hero"
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-name"
    >
      <div className="hero__media" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
      </div>

      <div className="hero__content">
        <p className="hero__role">
          {profile.role}
          <span aria-hidden="true"> · </span>
          {profile.roleSub}
        </p>
        <h1 id="hero-name" className="hero__name">
          {profile.name}
        </h1>
        <p className="hero__ai-note">{profile.aiNote}</p>
        <p className="hero__lead">
          <span className="hero__lead-stack">
            {techStack.map((tech, index) => {
              const isLast = index === techStack.length - 1;
              const isCss = tech === "CSS";

              return (
                <Fragment key={tech}>
                  <span className="hero__lead-tech">
                    {tech}
                    {isLast ? "로" : ""}
                  </span>
                  {!isLast && !isCss && (
                    <span className="hero__lead-sep" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {isCss && (
                    <>
                      <span
                        className="hero__lead-sep hero__lead-sep--desktop"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      <span className="hero__lead-break" aria-hidden="true" />
                    </>
                  )}
                </Fragment>
              );
            })}
          </span>
          <span className="hero__lead-desc">
            웹 · 앱 UI/UX를 정교하게 구축하는 퍼블리셔입니다.
          </span>
        </p>
        <div className="hero__actions">
          <a
            className="hero__cta hero__cta--primary"
            href="#projects"
            onClick={handleNavClick}
          >
            프로젝트 보기
          </a>
          <a
            className="hero__cta hero__cta--ghost"
            href="#about"
            onClick={handleNavClick}
          >
            소개 보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
