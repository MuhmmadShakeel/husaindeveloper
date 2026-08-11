import mission from '../../assets/images/mission-vision/mission.webp'
import vision from '../../assets/images/mission-vision/vision.webp'
import philosophy from '../../assets/images/philosophy/our-philosophy.webp'
import SectionHeading from './SectionHeading'

const values = [
  {
    number: '01',
    eyebrow: 'What guides our work',
    title: 'Mission',
    copy: 'Hussain Developers will achieve lifelong customer satisfaction by delivering properties at locations of their choice, meeting or exceeding their needs and expectations in a timely, cost-effective and value-added manner.',
    image: mission,
    alt: 'Landscaped Hussain Developers community',
    layout: 'image-left',
  },
  {
    number: '02',
    eyebrow: 'Where we are going',
    title: 'Vision',
    copy: 'Hussain Developers will lead in providing luxurious lifestyles, world-class amenities and gold-standard living through strong customer focus, innovative ideas, superior development standards and empowered people.',
    image: vision,
    alt: 'Entrance to a Hussain Developers community',
    layout: 'image-right',
  },
  {
    number: '03',
    eyebrow: 'The thinking behind every detail',
    title: 'Our Philosophy',
    copy: "Hussain Developers' philosophy is to view each project in its entirety, beyond physical planning, to optimize social and economic needs while treating both small and mega projects with equal attention to detail and quality.",
    image: philosophy,
    alt: 'A green community by Hussain Developers',
    layout: 'image-right',
    link: true,
  },
]

function ValuesSection() {
  return (
    <section className="values-section" id="values">
      <div className="page-width">
        <div className="values-section__heading" data-aos="fade-up">
          <SectionHeading
            eyebrow="Our foundation"
            title={<>Built on clarity. Driven by <em>purpose.</em></>}
            copy="Three principles shape how we plan, build and serve every Hussain Developers community."
            align="center"
          />
        </div>

        <div className="values-stack">
          {values.map((value, index) => (
            <article
              className={`value-feature value-feature--${value.layout}${value.link ? ' value-feature--philosophy' : ''}`}
              key={value.title}
              data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-left' : 'fade-up'}
              data-aos-delay={index * 120}
            >
              <div className="value-feature__image">
                <img src={value.image} alt={value.alt} />
                <span>{value.number}</span>
              </div>

              <div className="value-feature__content">
                <p className="eyebrow">{value.eyebrow}</p>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
                {value.link && (
                  <a className="text-link" href="/facilities">
                    Explore our standard <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
