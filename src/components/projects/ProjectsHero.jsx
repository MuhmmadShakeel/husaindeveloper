import { useEffect, useState } from 'react'

function ProjectsHero({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section className="projects-page-hero" id="top">
      <div className="projects-page-hero__media" aria-hidden="true">
        {slides.map((slide, index) => (
          <img
            className={activeSlide === index ? 'is-active' : ''}
            key={slide.image}
            src={slide.image}
            alt=""
          />
        ))}
      </div>
      <div className="projects-page-hero__overlay" />

      <div className="page-width projects-page-hero__content">
        <div key={activeSlide} className="projects-page-hero__copy" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">{slides[activeSlide].eyebrow}</p>
          <h1>Places with purpose.<br /><em>Built for life.</em></h1>
          <p>{slides[activeSlide].copy}</p>
          <a className="button" href="#project-directory">Explore all projects <span aria-hidden="true">↓</span></a>
        </div>

      </div>
    </section>
  )
}

export default ProjectsHero
