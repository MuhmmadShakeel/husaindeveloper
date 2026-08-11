import heroImage from '../assets/images/homeherosecimg/hero-06.webp'
import featureImage from '../assets/images/facilities/green-belts.webp'
import { projects } from '../data/projects'
import '../styles/facilities.css'

const amenities = [
  {
    title: 'Parks & Green Belts',
    copy: 'Landscaped open spaces designed for healthier, happier everyday living.',
    icon: 'M12 21V10m0 0C8 10 5 7 5 3c4 0 7 3 7 7Zm0 4c4 0 7-3 7-7-4 0-7 3-7 7Z',
  },
  {
    title: '24/7 Security',
    copy: 'Planned entrances, surveillance and dependable community protection.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5',
  },
  {
    title: 'Healthcare Access',
    copy: 'Essential medical facilities thoughtfully positioned close to home.',
    icon: 'M12 21S4 16.5 4 10a4 4 0 0 1 7-2.6A4 4 0 0 1 18 10c0 6.5-6 11-6 11Zm0-9V8m-2 2h4',
  },
  {
    title: 'Quality Education',
    copy: 'Purpose-planned schools that support learning within the community.',
    icon: 'm3 6 9-4 9 4-9 4-9-4Zm3 2v6c3 2 9 2 12 0V8m3-2v8',
  },
  {
    title: 'Shopping & Retail',
    copy: 'Commercial areas, cash-and-carry stores and daily essentials nearby.',
    icon: 'M6 8V6a6 6 0 0 1 12 0v2m3 0-1 13H4L3 8h18ZM9 11v1m6-1v1',
  },
  {
    title: 'Community Spaces',
    copy: 'Welcoming places for neighbours, families and shared celebrations.',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87m-2-9.96a4 4 0 0 1 0 7.75',
  },
  {
    title: 'Wide Boulevards',
    copy: 'Generous, well-connected roads planned for comfortable daily movement.',
    icon: 'M8 22 10 2m6 20L14 2M12 5v3m0 4v3m0 4v3',
  },
  {
    title: 'Essential Utilities',
    copy: 'Underground electricity, gas and reliable infrastructure by design.',
    icon: 'm13 2-9 12h7l-1 8 9-12h-7l1-8Z',
  },
]

function FacilityIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function FacilitiesPage() {
  const leftAmenities = amenities.slice(0, 4)
  const rightAmenities = amenities.slice(4)

  return (
    <main className="facilities-page">
      <section className="facilities-hero" id="top" aria-labelledby="facilities-title">
        <img src={heroImage} alt="Landscaped family park within a Hussain Developers community" />
        <div className="facilities-hero__overlay" />
        <div className="facilities-hero__content page-width" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">Facilities &amp; amenities</p>
          <h1 id="facilities-title">Everything you need,<br /><em>closer to home.</em></h1>
          <p>Thoughtful infrastructure, generous green spaces and everyday essentials come together to create complete communities for modern families.</p>
          <a className="button" href="#facility-showcase">Explore our amenities <span>↓</span></a>
        </div>
      </section>

      <section className="facility-showcase" id="facility-showcase" aria-labelledby="facility-showcase-title">
        <div className="page-width facility-showcase__inner">
          <header className="facility-showcase__heading" data-aos="fade-up">
            <p className="eyebrow">Designed around daily life</p>
            <h2 id="facility-showcase-title">A better standard of<br /><em>community living.</em></h2>
            <p>Every detail is considered—from safe streets and essential services to places where families can learn, connect and grow.</p>
          </header>

          <div className="facility-orbit">
            <div className="facility-orbit__column facility-orbit__column--left">
              {leftAmenities.map((amenity, index) => (
                <article className="facility-card" key={amenity.title} data-aos="fade-right" data-aos-delay={index * 70}>
                  <span className="facility-card__icon"><FacilityIcon path={amenity.icon} /></span>
                  <div><h3>{amenity.title}</h3><p>{amenity.copy}</p></div>
                </article>
              ))}
            </div>

            <figure className="facility-orbit__visual" data-aos="zoom-in" data-aos-delay="120">
              <div><img src={featureImage} alt="Green belts and landscaped spaces in an Al Rahim community" /></div>
              <figcaption><strong>Complete living</strong><span>Planned around people</span></figcaption>
            </figure>

            <div className="facility-orbit__column facility-orbit__column--right">
              {rightAmenities.map((amenity, index) => (
                <article className="facility-card" key={amenity.title} data-aos="fade-left" data-aos-delay={index * 70}>
                  <span className="facility-card__icon"><FacilityIcon path={amenity.icon} /></span>
                  <div><h3>{amenity.title}</h3><p>{amenity.copy}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="facility-communities" data-aos="fade-up">
            <div className="facility-communities__heading">
              <div><p className="eyebrow">Explore by community</p><h2>Facilities across <em>every address.</em></h2></div>
              <p>Discover how our approach to complete living is expressed across each Hussain Developers project.</p>
            </div>
            <div className="facility-communities__grid">
              {projects.map((project, index) => (
                <a href={`/projects/${project.slug}#facilities`} key={project.slug} data-aos="fade-up" data-aos-delay={(index % 4) * 55}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{project.name}</strong>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FacilitiesPage
