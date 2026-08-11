import { useEffect } from 'react'
import heroImage from '../assets/images/homeherosecimg/hero-04.webp'
import { pressReleases, releaseDescription, releaseTitle } from '../data/pressReleases'
import '../styles/press-release.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true">
      <path d="M4 11h13M12 6l5 5-5 5" />
    </svg>
  )
}

function PressReleasePage() {
  useEffect(() => {
    if (!window.location.hash) return

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
  }, [])

  return (
    <main className="press-page">
      <section className="press-hero" aria-labelledby="press-page-title">
        <img className="press-hero__background" src={heroImage} alt="Landscaped community by Hussain Developers" />
        <div className="press-hero__wash" />
        <div className="press-hero__pattern" aria-hidden="true" />

        <div className="press-hero__inner page-width">
          <div className="press-hero__copy" data-aos="fade-up">
            <p className="eyebrow eyebrow--light">Media center · Official updates</p>
            <h1 id="press-page-title">Stories that mark<br /><em>our progress.</em></h1>
            <p>
              Discover the milestones, community initiatives and ideas shaping
              the Hussain Developers story in Bahawalpur and beyond.
            </p>
            <a className="press-hero__link" href="#latest-releases">
              View latest releases <span>↓</span>
            </a>
          </div>

        </div>
      </section>

      <section className="press-archive" id="latest-releases" aria-labelledby="archive-title">
        <div className="press-archive__intro page-width" data-aos="fade-up">
          <div>
            <p className="eyebrow">From our newsroom</p>
            <h2 id="archive-title">Latest <em>releases</em></h2>
          </div>
          <p>
            A curated record of company news and community activity—presented
            in a compact editorial timeline for quick, effortless reading.
          </p>
        </div>

        <div className="press-timeline page-width">
          {pressReleases.map((release, index) => (
            <article
              className={`release-entry ${index % 2 ? 'release-entry--reverse' : ''}`}
              key={release.id}
            >
              <figure className="release-entry__media" data-aos={index % 2 ? 'fade-left' : 'fade-right'}>
                <img src={release.image} alt="Abstract artwork accompanying Hussain Developers press release" />
                <span>Press release / {release.id}</span>
              </figure>

              <div className="release-entry__marker" aria-hidden="true">
                <span>{release.id}</span>
              </div>

              <div className="release-entry__content" data-aos={index % 2 ? 'fade-right' : 'fade-left'}>
                <p className="release-entry__date">
                  <span>Newsroom</span>
                  <time dateTime={release.date === '22 Sep 2023' ? '2023-09-22' : '2023-10-02'}>{release.date}</time>
                </p>
                <h3>{releaseTitle}</h3>
                <p>{releaseDescription}</p>
                <a href={`/press-release/${release.id}`} aria-label={`View release ${release.id} details`}>
                  View details <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
          <div className="press-timeline__end" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="press-contact" id="press-contact">
        <div className="press-contact__inner page-width" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">Press & partnerships</p>
          <h2>Looking for a story,<br /><em>statement or asset?</em></h2>
          <p>Connect with our team for official information and media enquiries.</p>
          <a className="button button--light" href="mailto:hussaindevelopers.builders@gmail.com">
            Contact the media desk <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default PressReleasePage
