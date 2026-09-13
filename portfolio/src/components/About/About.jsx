import { useCallback, useRef } from "react";
import { profile } from "../../data/profile";
import { prefersReducedMotion, useGsapContext } from "../../hooks/useGsapContext";
import "./About.scss";

function About() {
  const sectionRef = useRef(null);

  const createAnimations = useCallback((gsap) => {
    if (prefersReducedMotion()) return;

    gsap.from(".about__intro > *", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 78%",
      },
    });

    gsap.from(".about__focus li", {
      opacity: 0,
      x: 28,
      duration: 0.55,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about__focus",
        start: "top 82%",
      },
    });
  }, []);

  useGsapContext(sectionRef, createAnimations);

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="about__inner">
        <div className="about__intro">
          <p className="section-eyebrow">About</p>
          <h2 id="about-title" className="section-title about__title">
            {profile.aboutTitle}
          </h2>
          <p className="section-desc about__desc">
            {profile.summary[0]}
            <br />
            {profile.summary[1]}
          </p>
        </div>

        <ul className="about__focus">
          {profile.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
