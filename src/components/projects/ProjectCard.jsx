function ProjectCard({ project, index }) {
  return (
    <article className="directory-project-card" data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
      <a className="directory-project-card__image" href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
        <img src={project.listingImage} alt={project.name} />
        <span>{project.city}</span>
      </a>
      <div className="directory-project-card__content">
        <div className="directory-project-card__meta">
          <span>{project.category}</span>
          <small>Project {project.id.padStart(2, '0')}</small>
        </div>
        <h2>{project.name}</h2>
        <p>{project.tagline}</p>
        <a className="directory-project-card__link" href={`/projects/${project.slug}`}>
          View details <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
