import ProjectDetailHero from '../../components/projects/detailed-project/ProjectDetailHero'
import ProjectGallery from '../../components/projects/detailed-project/ProjectGallery'
import { facilities, facilitiesIntroduction, projects } from '../../data/projects'

function ProjectDetailsPage({ project }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <main className="project-detail-page">
      <ProjectDetailHero project={project} />

      <section className="project-detail-overview" id="project-overview">
        <div className="page-width project-detail-overview__grid">
          <div className="project-detail-overview__copy" data-aos="fade-right">
            <p className="eyebrow">Overview</p>
            <h2>About <em>{project.name}</em></h2>
            <p>{project.overview}</p>
          </div>

          <div className="project-detail-overview__information" data-aos="fade-left">
            <article>
              <span>01</span>
              <div>
                <small>Location</small>
                <strong>{project.location}</strong>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <small>Payment Plan</small>
                {project.paymentPlans.map((plan) => <strong key={plan}>{plan}</strong>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="project-detail-facilities">
        <div className="page-width project-detail-facilities__inner">
          <header data-aos="fade-up">
            <p className="eyebrow eyebrow--light">Facilities &amp; Amenities</p>
            <h2>Complete community <em>living.</em></h2>
            <p>{facilitiesIntroduction}</p>
          </header>
          <div className="project-detail-facilities__grid">
            {facilities.map((facility, index) => (
              <article key={facility} data-aos="fade-up" data-aos-delay={(index % 4) * 45}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{facility}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-construction">
        <div className="page-width project-detail-construction__grid">
          <div className="project-detail-construction__visual" data-aos="fade-right">
            <img src={project.gallery[1]} alt={`${project.name} construction update`} />
            <span>Latest development</span>
          </div>
          <div className="project-detail-construction__content" data-aos="fade-left">
            <p className="eyebrow">Construction Update</p>
            <h2>Progress at <em>{project.name}.</em></h2>
            <p>{project.constructionUpdate}</p>
            <a className="button" href="/contacts">Book your plot <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <ProjectGallery project={project} />

      <section className="project-detail-location">
        <div className="page-width project-detail-location__grid">
          <div className="project-detail-location__map" data-aos="fade-right">
            <img src={project.mapImage} alt={`${project.name} project map`} />
            <a
              className="project-detail-location__map-action"
              href={project.mapImage}
              download={`${project.slug}-project-map.webp`}
            >
              Download project map <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="project-detail-location__content" data-aos="fade-left">
            <div className="project-detail-location__icon"><img src={project.locationIcon} alt="" /></div>
            <p className="eyebrow">Project Map</p>
            <h2>Location &amp; <em>access.</em></h2>
            <div className="project-detail-location__information">
              <div>
                <small>Project</small>
                <strong>{project.name}</strong>
              </div>
              <div>
                <small>Location</small>
                <strong>{project.location}</strong>
              </div>
              <div>
                <small>Payment Plan</small>
                {project.paymentPlans.map((plan) => <strong key={plan}>{plan}</strong>)}
              </div>
            </div>
            <a className="text-link" href={project.mapImage} target="_blank" rel="noreferrer">View full-size map <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="project-detail-next">
        <img src={nextProject.gallery[0]} alt="" />
        <div className="project-detail-next__overlay" />
        <div className="page-width project-detail-next__content" data-aos="fade-up">
          <div className="project-detail-next__copy">
            <p className="eyebrow eyebrow--light">Continue exploring</p>
            <h2>Discover another <em>Hussain community.</em></h2>
            <p>{nextProject.heroText}</p>
          </div>
          <a className="project-detail-next__card" href={`/projects/${nextProject.slug}`}>
            <small>Project {nextProject.id.padStart(2, '0')} · Up next</small>
            <strong>{nextProject.name}</strong>
            <span>{nextProject.city}</span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailsPage
