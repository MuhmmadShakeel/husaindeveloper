import heroImage from '../assets/images/homeherosecimg/hero-04.webp'
import storyImage from '../assets/images/at-a-glance/at-a-glance-background.webp'
import philosophyImage from '../assets/images/philosophy/our-philosophy.webp'
import housingImage from '../assets/images/projects/al-rahim-housing-scheme/listing-card.webp'
import villasImage from '../assets/images/projects/al-rahim-villas/listing-card.webp'
import cityImage from '../assets/images/projects/al-rahim-city/listing-card.webp'
import '../styles/about.css'

const services = [
  {
    title: 'Community development',
    copy: 'Thoughtfully planned residential environments made for better everyday living.',
    icon: 'M4 21V10l8-7 8 7v11M8 21v-7h8v7M2 21h20',
  },
  {
    title: 'Residential plots',
    copy: 'Practical plot opportunities for families, builders and long-term investors.',
    icon: 'm3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4',
  },
  {
    title: 'Home construction',
    copy: 'Modern homes delivered with professional oversight and attention to detail.',
    icon: 'M4 20h16M6 20V9l6-5 6 5v11M9 20v-6h6v6',
  },
  {
    title: 'Investment guidance',
    copy: 'Clear, local guidance to help clients assess opportunities with confidence.',
    icon: 'M4 19V9m5 10V5m5 14v-7m5 7V3M2 21h20',
  },
  {
    title: 'Flexible opportunities',
    copy: 'Selected properties with practical installment options for accessible ownership.',
    icon: 'M4 7h16M4 12h10M4 17h7M18 14v7m-3-3.5 3 3.5 3-3.5',
  },
  {
    title: 'End-to-end support',
    copy: 'Helpful coordination for site visits, documentation and customer care.',
    icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-6v.01M12 13a3 3 0 1 0-3-3',
  },
]

const projects = [
  {
    name: 'Al Raheem Housing Scheme',
    location: 'Hasilpur Road, Bahawalpur',
    copy: 'A residential development offering plot opportunities and community-focused living.',
    image: housingImage,
    href: '/projects/al-rahim-housing-scheme',
  },
  {
    name: 'Al Hussain Villas',
    location: 'Family-oriented residential living',
    copy: 'A welcoming project promoted with security, green spaces, a jogging track and a children\'s play area.',
    image: villasImage,
    href: '/projects',
  },
  {
    name: 'Wapda City Opportunities',
    location: 'Established surroundings',
    copy: 'Residential property opportunities with access to everyday amenities and promising locations.',
    image: cityImage,
    href: '/contacts',
  },
]

const reasons = [
  ['01', 'Local expertise', 'Insight into Bahawalpur\'s property market and the priorities of local buyers.'],
  ['02', 'Transparent guidance', 'Clear communication around property details, payments and every step of the process.'],
  ['03', 'Customer focused', 'Personal attention and professional assistance built around each client\'s needs.'],
  ['04', 'Flexible opportunities', 'Practical installment possibilities on selected properties and developments.'],
  ['05', 'Long-term value', 'Communities planned for comfortable living and sustainable investment potential.'],
]

function ServiceIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" id="top" aria-labelledby="about-title">
        <img src={heroImage} alt="A modern residential community by Hussain Developers" />
        <div className="about-hero__overlay" />
        <div className="about-hero__lines" aria-hidden="true" />

        <div className="about-hero__content page-width" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">About Hussain Developers &amp; Builders</p>
          <h1 id="about-title">Building better communities.<br /><em>Creating lasting value.</em></h1>
          <p>
            A Bahawalpur-based real estate company creating thoughtfully planned communities
            and dependable property opportunities.
          </p>
          <div className="about-hero__actions">
            <a className="button" href="#who-we-are">Discover our story <span aria-hidden="true">↓</span></a>
            <a className="text-link text-link--light" href="/projects">Explore projects <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="about-hero__proof page-width" aria-label="Our focus">
          <span><strong>Bahawalpur</strong>Local expertise</span>
          <span><strong>People first</strong>Customer support</span>
          <span><strong>Built to last</strong>Long-term value</span>
        </div>
      </section>

      <section className="about-intro" id="who-we-are" aria-labelledby="who-we-are-title">
        <div className="page-width about-intro__grid">
          <div className="about-intro__copy" data-aos="fade-right">
            <p className="eyebrow">Who we are</p>
            <h2 id="who-we-are-title">More than property.<br /><em>A place to belong.</em></h2>
            <p className="about-intro__lead">
              We believe real estate is about creating secure places where families can live
              comfortably and investments can grow.
            </p>
            <p>
              Hussain Developers &amp; Builders provides residential plots, modern homes,
              construction services and property investment guidance. Our goal is to make
              ownership easier through transparent communication, practical options and
              professional support.
            </p>
            <p>
              Whether you are searching for a family home, a residential plot or a long-term
              investment, our team helps you understand the available options and move forward
              with confidence.
            </p>
            <a className="text-link" href="/contacts">Talk to our team <span aria-hidden="true">→</span></a>
          </div>

          <div className="about-intro__visual" data-aos="fade-left" data-aos-delay="100">
            <figure className="about-intro__image about-intro__image--main">
              <img src={storyImage} alt="Landscaped community park in Bahawalpur" />
            </figure>
            <figure className="about-intro__image about-intro__image--inset">
              <img src={philosophyImage} alt="A thoughtfully planned residential community" />
            </figure>
            <div className="about-intro__stamp">
              <span>Our promise</span>
              <strong>Clear guidance.<br />Confident decisions.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services" aria-labelledby="services-title">
        <div className="page-width">
          <header className="about-section-heading" data-aos="fade-up">
            <div>
              <p className="eyebrow eyebrow--light">What we do</p>
              <h2 id="services-title">Support at every step of<br /><em>your property journey.</em></h2>
            </div>
            <p>From finding the right opportunity to understanding documentation, our team makes each next step clearer.</p>
          </header>

          <div className="about-services__grid">
            {services.map((service, index) => (
              <article className="about-service-card" key={service.title} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
                <span className="about-service-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="about-service-card__icon"><ServiceIcon path={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-projects" aria-labelledby="about-projects-title">
        <div className="page-width">
          <header className="about-section-heading about-section-heading--dark" data-aos="fade-up">
            <div>
              <p className="eyebrow">Our projects</p>
              <h2 id="about-projects-title">Opportunities designed around<br /><em>real lives and real goals.</em></h2>
            </div>
            <p>Explore our publicly promoted developments and talk with our team about current availability.</p>
          </header>

          <div className="about-projects__grid">
            {projects.map((project, index) => (
              <a className="about-project-card" href={project.href} key={project.name} data-aos="fade-up" data-aos-delay={index * 80}>
                <img src={project.image} alt="" />
                <div className="about-project-card__wash" />
                <span className="about-project-card__index">0{index + 1}</span>
                <div className="about-project-card__content">
                  <small>{project.location}</small>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <span className="about-project-card__link">View opportunity <i aria-hidden="true">↗</i></span>
                </div>
              </a>
            ))}
          </div>

          <p className="about-projects__note" data-aos="fade-up">
            <span aria-hidden="true">i</span>
            Project availability, approvals, prices and payment plans should be confirmed directly with our team.
          </p>
        </div>
      </section>

      <section className="about-reasons" aria-labelledby="reasons-title">
        <div className="page-width about-reasons__grid">
          <div className="about-reasons__intro" data-aos="fade-right">
            <p className="eyebrow eyebrow--light">Why choose us</p>
            <h2 id="reasons-title">The confidence to make<br /><em>a better move.</em></h2>
            <p>Good property decisions begin with clear information, responsive support and a team that understands the local market.</p>
            <a className="button button--light" href="/contacts">Plan a site visit <span aria-hidden="true">↗</span></a>
          </div>

          <div className="about-reasons__list">
            {reasons.map(([number, title, copy], index) => (
              <article key={title} data-aos="fade-left" data-aos-delay={index * 55}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <i aria-hidden="true">✓</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" style={{ '--about-cta-image': `url(${philosophyImage})` }} aria-labelledby="about-cta-title">
        <div className="about-cta__overlay" />
        <div className="page-width about-cta__content" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">Let&apos;s build your future together</p>
          <h2 id="about-cta-title">Your next property decision<br /><em>starts with a conversation.</em></h2>
          <p>Purchase a residential plot, build a family home or explore a property investment with professional guidance from our team.</p>
          <div>
            <a className="button button--light" href="/contacts">Contact our team</a>
            <a className="text-link text-link--light" href="tel:+923041111490">Call 0304-1111490 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
