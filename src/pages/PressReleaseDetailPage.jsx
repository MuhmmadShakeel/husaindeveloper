import heroImage from '../assets/images/homeherosecimg/hero-04.webp'
import { pressReleases, releaseDescription, releaseTitle } from '../data/pressReleases'
import '../styles/maps.css'

function PressReleaseDetailPage({ releaseId }) {
  const release = pressReleases.find((item) => item.id === releaseId) || pressReleases[0]

  return (
    <main className="press-detail-page">
      <section className="press-detail-hero">
        <img src={heroImage} alt="Hussain Developers community" />
        <div className="press-detail-hero__overlay" />
        <div className="press-detail-hero__content page-width" data-aos="fade-up">
          <a href="/press-release">← Back to newsroom</a>
          <p className="eyebrow eyebrow--light">Press release · {release.date}</p>
          <h1>A closer look at<br /><em>our community work.</em></h1>
        </div>
      </section>

      <article className="press-detail-story">
        <div className="press-detail-story__inner page-width">
          <figure data-aos="fade-right">
            <img src={release.image} alt="Artwork accompanying the Hussain Developers press release" />
            <figcaption>Official release / {release.id}</figcaption>
          </figure>

          <div data-aos="fade-left">
            <p className="eyebrow">From our newsroom</p>
            <time dateTime={release.date === '22 Sep 2023' ? '2023-09-22' : '2023-10-02'}>{release.date}</time>
            <h2>{releaseTitle}</h2>
            <p>{releaseDescription}</p>
            <p>
              The initiative reflects Hussain Developers&apos; continued focus on
              community responsibility and practical support for working families.
              Through focused outreach, the team aims to contribute meaningfully
              to the communities connected with its work.
            </p>
            <blockquote>
              Community progress is strongest when development and responsibility move forward together.
            </blockquote>
            <a className="button" href="mailto:hussaindevelopers.builders@gmail.com">Media enquiry <span>↗</span></a>
          </div>
        </div>
      </article>
    </main>
  )
}

export default PressReleaseDetailPage
