import heroImage from '../assets/images/homeherosecimg/hero-01.webp'
import { projects } from '../data/projects'
import '../styles/maps.css'

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 5 6-3 6 3 6-3v17l-6 3-6-3-6 3V5Z" />
      <path d="M9 2v17M15 5v17" />
    </svg>
  )
}

function MapsPage() {
  const featuredMap = projects.find((project) => project.slug === 'al-rahim-smart-city')

  return (
    <main className="maps-page">
      <section className="maps-hero" aria-labelledby="maps-page-title">
        <img className="maps-hero__background" src={heroImage} alt="Hussain Developers master-planned community" />
        <div className="maps-hero__overlay" />
        <div className="maps-hero__inner page-width">
          <div className="maps-hero__copy" data-aos="fade-up">
            <p className="eyebrow eyebrow--light">Downloads · Project maps</p>
            <h1 id="maps-page-title">Every address,<br /><em>clearly mapped.</em></h1>
            <p>
              Explore the master plans behind our communities. View each map in
              detail or download a full-resolution copy for later.
            </p>
            <div className="maps-hero__actions">
              <a className="button" href="#map-collection">Explore all maps <span>↓</span></a>
              <a className="maps-hero__text-link" href={`/maps/${featuredMap.slug}`}>View featured plan <span>↗</span></a>
            </div>
          </div>

        </div>
      </section>

      <section className="map-collection" id="map-collection" aria-labelledby="map-collection-title">
        <div className="page-width map-collection__inner">
          <header className="map-collection__heading" data-aos="fade-up">
            <div>
              <p className="eyebrow">Master plan library</p>
              <h2 id="map-collection-title">Find your<br /><em>way around.</em></h2>
            </div>
            <p>
              Eight communities, carefully documented. Open a plan for project
              information, location details and a focused full-map view.
            </p>
          </header>

          <div className="map-grid">
            {projects.map((project, index) => (
              <article className="map-card" key={project.slug} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
                <a className="map-card__image" href={`/maps/${project.slug}`}>
                  <img src={project.mapImage} alt={`${project.name} master plan`} />
                  <span><MapIcon /> View master plan</span>
                </a>
                <div className="map-card__body">
                  <p><span>Map {String(index + 1).padStart(2, '0')}</span><span>{project.city}</span></p>
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                  <div className="map-card__actions">
                    <a href={`/maps/${project.slug}`}>View details <span>↗</span></a>
                    <a href={project.mapImage} download={`${project.slug}-master-plan.webp`}>Download map <span>↓</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MapsPage
