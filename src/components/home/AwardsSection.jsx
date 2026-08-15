import award from '../../assets/images/awards/awards.webp'
import SectionHeading from './SectionHeading'

const awards = [
  'Hussain Developer WON 10 Prestigious Awards',
  'Asia Pacific International Property Awards, Kuala Lumpur, Malaysia',
  'Highly Commended Leisure Interior',
  'Best 5-Star Golf Development',
  'Best 5-Star Leisure Architecture',
  'Highly Commended Hi-Rise Architecture',
  'Highly Commended Retail Interior',
  'Highly Commended Leisure Interior',
]

function AwardsSection() {
  return (
    <section className="section awards-section">
      <div className="page-width awards-section__grid">
        <div className="awards-section__content" data-aos="fade-right">
          <SectionHeading eyebrow="International recognition" title={<>Hussain Developers Won<br /><em>10 Prestigious Awards</em></>} />
          <div className="awards-list">
            {awards.map((item, index) => (
              <div key={`${item}-${index}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="awards-section__visual" data-aos="fade-left" data-aos-delay="120">
          <img src={award} alt="Hussain Developers international property award" />
          <div className="awards-section__caption">
            <small>Official recognition</small>
            <strong>Asia Pacific International Property Awards</strong>
            <span>Kuala Lumpur  Malaysia</span>
          </div>
          <div className="awards-section__seal"><strong>10</strong><span>Prestigious<br />awards</span></div>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
