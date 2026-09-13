import "./ProjectItem.scss";

function ProjectItem({ project, index }) {
  const isOngoing = project.status === "ongoing";

  return (
    <li className={`project-item${isOngoing ? " is-ongoing" : ""}`}>
      <div className="project-item__index" aria-hidden="true">
        {index}
      </div>

      <div className="project-item__body">
        <div className="project-item__top">
          <div className="project-item__main">
            <div className="project-item__title-row">
              <h3>{project.title}</h3>
              {isOngoing && <span className="project-item__badge">진행중</span>}
            </div>
            <p className="project-item__client">{project.client}</p>
          </div>

          <div className="project-item__meta">
            <p className="project-item__period">{project.period}</p>
            <p className="project-item__role">
              <span>역할 {project.role}</span>
              <span aria-hidden="true"> · </span>
              <span>기여도 {project.contribution}</span>
            </p>
            <ul className="project-item__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="project-item__detail">{project.detail}</p>
      </div>
    </li>
  );
}

export default ProjectItem;
