import { useCallback, useRef } from "react";
import { skills } from "../../data/skills";
import { prefersReducedMotion, useGsapContext } from "../../hooks/useGsapContext";
import "./Skills.scss";

function Skills() {
  const sectionRef = useRef(null);

  const createAnimations = useCallback((gsap) => {
    if (prefersReducedMotion()) return;

    gsap.from(".skills__head > *", {
      opacity: 0,
      y: 32,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 78%",
      },
    });

    gsap.from(".skills__group", {
      opacity: 0,
      y: 48,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills__list",
        start: "top 85%",
      },
    });
  }, []);

  useGsapContext(sectionRef, createAnimations);

  return (
    <section
      className="skills"
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-title"
    >
      <div className="skills__inner">
        <div className="skills__head">
          <p className="section-eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title skills__title">
            사용 가능 언어 · 역량
          </h2>
          <p className="section-desc">
            퍼블리싱을 중심으로 Vue·React 프론트엔드 화면 구현과 GSAP 모션까지
            <br />
            대응합니다. API 연동은 제외한 UI/마크업 영역에 집중합니다.
          </p>
        </div>

        <ul className="skills__list">
          {skills.map((group) => (
            <li key={group.category} className="skills__group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
