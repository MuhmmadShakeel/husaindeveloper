import chiefExecutive from '../../assets/images/ceo-message/chief-executive.webp'
import SectionHeading from './SectionHeading'

function CeoMessage() {
  return (
    <section className="section ceo-section" id="about">
      <div className="page-width ceo-section__grid">
        <div className="ceo-section__portrait" data-aos="fade-right">
          <div className="ceo-section__image-frame">
            <img src={chiefExecutive} alt="Alamgir Mansha, Chief Executive of Hussain Developers" />
          </div>
          <div className="ceo-section__badge">
            <strong>7</strong>
            <span>Projects in<br />Bahawalpur</span>
          </div>
        </div>

        <div className="ceo-section__content" data-aos="fade-left" data-aos-delay="100">
          <SectionHeading eyebrow="Leadership with purpose" title="Message from CE" />
          <p className="ceo-section__quote-mark" aria-hidden="true">“</p>
          <div className="ceo-section__body">
            <p>
              As the CEO of Hussain Developers, I am proud to lead a team committed to providing quality housing solutions across South Punjab. With 7 projects in Bahawalpur, we understand the importance of a safe, secure, and comfortable home. Our mission is to offer modern, high-quality housing that caters to your needs and preferences.
            </p>
            <p>
              We prioritize excellence by continuously improving our products and services to meet your evolving needs. Our goal is to create functional and sustainable communities and building trust and loyalty with our customers. Thank you for choosing Hussain Developers as your preferred housing solution. We look forward to serving you for years to come.
            </p>
          </div>

          <div className="ceo-highlights" aria-label="Our leadership priorities">
            <div><span>✓</span><strong>Quality housing</strong></div>
            <div><span>✓</span><strong>Sustainable communities</strong></div>
            <div><span>✓</span><strong>Customer-first service</strong></div>
          </div>

          <div className="signature-block">
            <span className="signature-block__line" />
            <div>
              <strong>Alamgir Mansha</strong>
              <small>Chief Executive, Hussain Developers</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CeoMessage
