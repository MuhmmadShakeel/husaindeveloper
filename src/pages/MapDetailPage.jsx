import '../styles/maps.css'

function MapDetailPage({ project }) {
  return (
    <main className="map-detail-page">
      <section className="map-detail-hero">
        <img src={project.listingImage} alt={`${project.name} community`} />
        <div className="map-detail-hero__overlay" />
        <div className="map-detail-hero__content page-width" data-aos="fade-up">
          <a href="/maps">← Back to all maps</a>
          <p className="eyebrow eyebrow--light">Master plan · {project.city}</p>
          <h1>{project.name}</h1>
          <p>{project.tagline}</p>
        </div>
      </section>

      <section className="map-detail-layout">
        <div className="map-detail-layout__inner page-width">
          <div className="map-detail-visual" data-aos="fade-right">
            <a href={project.mapImage} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.name} map`}>
              <img src={project.mapImage} alt={`${project.name} full master plan`} />
            </a>
            <div>
              <span>Full master plan</span>
              <a href={project.mapImage} download={`${project.slug}-master-plan.webp`}>Download map <b>↓</b></a>
            </div>
          </div>

          <aside className="map-detail-content" data-aos="fade-left">
            <p className="eyebrow">Project overview</p>
            <h2>A clearer view of<br /><em>{project.name}.</em></h2>
            <p>{project.overview}</p>

            <div className="map-detail-facts">
              <div><span>Location</span><strong>{project.location}</strong></div>
              <div><span>Development</span><strong>{project.category}</strong></div>
              <div><span>Payment plan</span>{project.paymentPlans.map((plan) => <strong key={plan}>{plan}</strong>)}</div>
            </div>

            <div className="map-detail-actions">
              <a className="button" href={project.mapImage} download={`${project.slug}-master-plan.webp`}>Download map <span>↓</span></a>
              <a className="text-link" href={`/projects/${project.slug}`}>Explore project <span>↗</span></a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default MapDetailPage
