function ProjectGallery({ project }) {
  return (
    <section className="project-detail-gallery">
      <div className="page-width">
        <header className="project-detail-section-heading" data-aos="fade-up">
          <div>
            <p className="eyebrow">Project gallery</p>
            <h2>{project.name} in <em>pictures.</em></h2>
          </div>
          <p>{project.heroText}</p>
        </header>

        <div className="project-detail-gallery__grid">
          {project.gallery.map((image, index) => (
            <figure key={image} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
              <img src={image} alt={`${project.name} gallery view ${index + 1}`} />
              <figcaption>{String(index + 1).padStart(2, '0')} · {project.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery
