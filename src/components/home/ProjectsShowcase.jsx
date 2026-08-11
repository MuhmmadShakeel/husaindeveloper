import SectionHeading from './SectionHeading'
import town from '../../assets/images/projects/al-rahim-town/listing-card.webp'
import villas from '../../assets/images/projects/al-rahim-villas/listing-card.webp'
import smartCity from '../../assets/images/projects/al-rahim-smart-city/listing-card.webp'
import housingScheme from '../../assets/images/projects/al-rahim-housing-scheme/listing-card.webp'

const projects = [
  {
    name: 'Al Rahim Town',
    type: 'Master-planned community',
    description: 'Thoughtful planning, green spaces and everyday convenience in one complete address.',
    image: town,
    number: '01',
    slug: 'al-rahim-town',
  },
  {
    name: 'Al Rahim Villas',
    type: 'Elevated residential living',
    description: 'Refined homes designed around privacy, comfort and a beautifully connected lifestyle.',
    image: villas,
    number: '02',
    slug: 'al-rahim-villas',
  },
  {
    name: 'Al Rahim Smart City',
    type: 'Connected modern lifestyle',
    description: 'A future-focused community bringing smart infrastructure and modern living together.',
    image: smartCity,
    number: '03',
    slug: 'al-rahim-smart-city',
  },
  {
    name: 'Al Rahim Housing Scheme',
    type: 'A community built to last',
    description: 'A secure, welcoming neighbourhood created for families and lasting value.',
    image: housingScheme,
    number: '04',
    slug: 'al-rahim-housing-scheme',
  },
]

function ProjectsShowcase() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-width">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Places with purpose"
            title={<>Signature communities, <em>designed for life.</em></>}
            copy="Each development brings together thoughtful planning, everyday convenience and long-term value."
            align="center"
          />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <img src={project.image} alt={project.name} />
              <div className="project-card__shade" />
              <span className="project-card__number">{project.number}</span>
              <div className="project-card__content">
                <small>{project.type}</small>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={`/projects/${project.slug}`} aria-label={`Explore ${project.name}`}>Explore more <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
