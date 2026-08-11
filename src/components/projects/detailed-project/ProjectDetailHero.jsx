function ProjectDetailHero({ project }) {
  return (
    <section className="project-detail-hero" id="top">
      <img className="project-detail-hero__image" src={project.gallery[0]} alt={project.name} />
      <div className="project-detail-hero__overlay" />

      <div className="page-width project-detail-hero__content" data-aos="fade-up">
        <a className="project-detail-hero__back" href="/projects"><span aria-hidden="true">←</span> All projects</a>
        <p className="eyebrow eyebrow--light">Project details · Hussain Developers</p>
        <h1>{project.name}</h1>
        <p className="project-detail-hero__lead">{project.heroText}</p>
        <a className="button" href="#project-overview">Explore project <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}

export default ProjectDetailHero
