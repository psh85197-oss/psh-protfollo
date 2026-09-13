import { useCallback, useRef } from "react";
import { projects } from "../../data/projects";
import { prefersReducedMotion, useGsapContext } from "../../hooks/useGsapContext";
import ProjectItem from "./ProjectItem";
import "./Projects.scss";

function Projects() {
  const sectionRef = useRef(null);

  const createAnimations = useCallback((gsap) => {
    if (prefersReducedMotion()) return;

    gsap.from(".projects__head > *", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 78%",
      },
    });

    gsap.from(".project-item", {
      opacity: 0,
      y: 28,
      duration: 0.55,
      stagger: 0.06,
      ease: "power2.out",
      clearProps: "transform,opacity",
      scrollTrigger: {
        trigger: ".projects__list",
        start: "top 88%",
        once: true,
      },
    });
  }, []);

  useGsapContext(sectionRef, createAnimations);

  return (
    <section
      className="projects"
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">
        <div className="projects__head">
          <p className="section-eyebrow">Projects</p>
          <h2 id="projects-title" className="section-title">
            프로젝트 목록
          </h2>
          <p className="section-desc">
            금융 · 라이프 · 미디어 · 공공 영역까지, 구축과 리뉴얼 중심의 퍼블리싱
            경험입니다.
          </p>
          <p className="projects__count">Total {projects.length}</p>
        </div>

        <ol className="projects__list">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={String(projects.length - index).padStart(2, "0")}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Projects;
