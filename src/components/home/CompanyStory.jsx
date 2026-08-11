import background from '../../assets/images/at-a-glance/at-a-glance-background.webp'

const storyCards = [
  {
    number: '2010',
    label: 'Our foundation',
    title: 'Shaping landscapes and lives',
    copy: 'Since its inception in 2010, Hussain Developers has created value-added, master-planned communities where thousands of families enjoy a complete living experience.',
  },
  {
    number: '500',
    label: 'People with purpose',
    title: 'Delivering a lasting legacy',
    copy: 'Our 500 employees deliver iconic developments through leadership and innovation. Projects under development in Bahawalpur will accommodate more than one million residents.',
  },
  {
    number: '1M+',
    label: 'Our ambition',
    title: 'World-class living standards',
    copy: 'We aspire to lead Pakistani real estate with choice locations, world-class amenities, international standards, timely delivery and lifelong customer satisfaction.',
  },
]

function CompanyStory() {
  return (
    <section className="story-section" aria-labelledby="story-title">
      <div className="story-section__media" aria-hidden="true">
        <img src={background} alt="" />
      </div>
      <div className="story-section__overlay" />

      <div className="page-width story-section__content">
        <header className="story-section__header" data-aos="fade-up">
          <div>
            <p className="eyebrow eyebrow--light">Hussain Developers</p>
            <h2 id="story-title">At a Glance</h2>
          </div>
          <p>
            More than building homes, we create sustainable communities designed to enrich everyday life and deliver lasting value for generations.
          </p>
        </header>

        <div className="story-section__cards">
          {storyCards.map((card, index) => (
            <article
              className="story-card"
              key={card.label}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="story-card__topline">
                <strong>{card.number}</strong>
                <span>0{index + 1}</span>
              </div>
              <small>{card.label}</small>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>

        <a className="text-link text-link--light story-section__link" href="#values">
          What drives us <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

export default CompanyStory
