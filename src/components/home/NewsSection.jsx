import newsImage from '../../assets/images/news-week/sewerage-work.webp'
import newsBackground from '../../assets/images/news-week/towering-glass-giant.webp'

function NewsSection() {
  return (
    <section
      className="news-section"
      id="media-center"
      style={{ '--news-background': `url(${newsBackground})` }}
    >
      <div className="news-section__background" aria-hidden="true" />
      <div className="news-section__overlay" />

      <div className="page-width news-section__layout">
        <figure className="news-section__visual" data-aos="fade-right">
          <img src={newsImage} alt="Sewerage work underway at Al Rahim Housing Scheme" />
          <figcaption>
            <strong>Development in motion</strong>
            <span>Al Rahim Housing Scheme · Bahawalpur</span>
          </figcaption>
        </figure>

        <div className="news-section__content" data-aos="fade-left" data-aos-delay="100">
          <p className="eyebrow eyebrow--light">News Week · Development update</p>
          <div className="news-section__meta"><span>Bahawalpur</span><span>Infrastructure</span></div>
          <h2>Sewerage work<br /><em>started.</em></h2>
          <p>Progress on essential infrastructure at Al Rahim Housing Scheme, building a stronger foundation for everyday life.</p>
          <a className="button button--light" href="#contact">View the update <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
