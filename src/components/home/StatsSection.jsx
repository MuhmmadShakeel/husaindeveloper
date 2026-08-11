import SectionHeading from './SectionHeading'

const stats = [
  { value: 'Thousands of', label: 'Employees', symbol: '◎' },
  { value: '250,000+', label: 'Customers', symbol: '◇' },
  { value: '23', label: 'Years of Experience', symbol: '✦' },
  { value: '100+', label: 'Projects Completed', symbol: '✓' },
]

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="page-width stats-section__inner">
        <div className="stats-section__heading" data-aos="fade-up">
          <SectionHeading eyebrow="A legacy in numbers" title="Our Story in 4 Key Figures" align="center" />
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <article key={stat.label} data-aos="fade-up" data-aos-delay={index * 80}>
              <span className="stats-grid__symbol">{stat.symbol}</span>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
              <i>{String(index + 1).padStart(2, '0')}</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
