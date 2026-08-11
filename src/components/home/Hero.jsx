import { useEffect, useState } from 'react'
import heroOne from '../../assets/images/homeherosecimg/hero-04.webp'
import heroTwo from '../../assets/images/homeherosecimg/hero-06.webp'
import heroThree from '../../assets/images/homeherosecimg/hero-02.webp'

const heroSlides = [
  {
    image: heroOne,
    eyebrow: 'Contemporary communities · Designed for living',
    title: 'Distinctive streets.',
    accent: 'Elevated living.',
    lead: 'Thoughtfully planned neighborhoods where elegant design, modern infrastructure and everyday comfort come together.',
  },
  {
    image: heroTwo,
    eyebrow: 'Green at the heart of every plan',
    title: 'More room to live.',
    accent: 'More reasons to belong.',
    lead: 'Generous green spaces and family-focused amenities create healthier, happier communities made for every generation.',
  },
  {
    image: heroThree,
    eyebrow: 'An address with presence',
    title: 'Arrive somewhere',
    accent: 'extraordinary.',
    lead: 'Landmark entrances, considered planning and enduring quality welcome you home to a place built with distinction.',
  },
]

function Hero() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroSlides.length)
    }, 6000)
    return () => window.clearInterval(rotation)
  }, [])

  const activeSlide = heroSlides[activeImage]

  return (
    <section className="hero-section" id="top">
      <div className="hero-section__media" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            className={index === activeImage ? 'is-active' : ''}
            src={slide.image}
            alt=""
          />
        ))}
      </div>
      <div className="hero-section__overlay" />
      <div className="hero-section__grid" aria-hidden="true" />

      <div className="hero-section__content page-width">
        <div className="hero-section__copy" data-aos="fade-up">
          <div className="hero-section__message" key={activeImage} aria-live="polite">
            <p className="eyebrow eyebrow--light">{activeSlide.eyebrow}</p>
            <h1>{activeSlide.title}<br /><em>{activeSlide.accent}</em></h1>
            <p className="hero-section__lead">{activeSlide.lead}</p>
          </div>
          <div className="hero-section__actions">
            <a className="button" href="#projects">Explore our projects <span>↗</span></a>
            <a className="text-link text-link--light" href="#about">Discover our story <span>↓</span></a>
          </div>
          <div className="hero-pagination" aria-label="Choose hero slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === activeImage ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-pressed={index === activeImage}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="hero-proof">
        <div className="page-width hero-proof__inner">
          <div><strong>7</strong><span>Projects in Bahawalpur</span></div>
          <div><strong>2010</strong><span>Established</span></div>
          <div><strong>500</strong><span>People driving progress</span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
