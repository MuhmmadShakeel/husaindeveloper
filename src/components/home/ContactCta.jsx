import background from '../../assets/images/homeherosecimg/hero-01.webp'

function ContactCta() {
  return (
    <section className="contact-cta" id="contact" style={{ '--contact-image': `url(${background})` }}>
      <div className="contact-cta__overlay" />
      <div className="page-width contact-cta__content" data-aos="fade-up">
        <p className="eyebrow eyebrow--light">Your next chapter starts here</p>
        <h2>Find your place in a community<br /><em>built for what comes next.</em></h2>
        <div className="contact-cta__actions">
          <a className="button button--light" href="tel:+923041111490">Call 0304-1111490</a>
          <a className="text-link text-link--light" href="mailto:Hussaindevelopers.builders@gmail.com">Send us an email <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
