import { useEffect, useMemo, useRef, useState } from 'react'
import videoOne from '../assets/images/video-gallery/construction-site-01.mp4'
import videoTwo from '../assets/images/video-gallery/construction-site-02.mp4'
import videoThree from '../assets/images/video-gallery/construction-site-03.mp4'
import videoFour from '../assets/images/video-gallery/construction-site-04.mp4'
import videoFive from '../assets/images/video-gallery/construction-site-05.mp4'
import posterOne from '../assets/images/video-gallery/construction-site-01.webp'
import posterTwo from '../assets/images/video-gallery/construction-site-02.webp'
import posterThree from '../assets/images/video-gallery/construction-site-03.webp'
import posterFour from '../assets/images/video-gallery/construction-site-04.webp'
import posterFive from '../assets/images/video-gallery/construction-site-05.webp'
import '../styles/press-release.css'

const videos = [
  {
    id: '01',
    src: videoOne,
    poster: posterOne,
    title: 'Architecture framed by nature',
    category: 'Architecture',
    description: 'A closer view of classical detailing, landscaped edges and the craftsmanship shaping the site.',
  },
  {
    id: '02',
    src: videoTwo,
    poster: posterTwo,
    title: 'Landscape taking root',
    category: 'Landscape',
    description: 'Young palms, layered planting and generous lawns beginning to define a greener community.',
  },
  {
    id: '03',
    src: videoThree,
    poster: posterThree,
    title: 'Greenbelt progress update',
    category: 'Landscape',
    description: 'An on-ground look at planting, garden preparation and the details behind every green space.',
  },
  {
    id: '04',
    src: videoFour,
    poster: posterFour,
    title: 'Plantation in progress',
    category: 'Development',
    description: 'Site teams bring the landscape plan to life with new palms, pathways and open lawns.',
  },
  {
    id: '05',
    src: videoFive,
    poster: posterFive,
    title: 'Landmarks of the community',
    category: 'Amenities',
    description: 'Signature arrival features and gathering spaces designed to make every entrance memorable.',
  },
]

const filters = ['All', 'Landscape', 'Architecture', 'Development', 'Amenities']

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  )
}

function VideoGalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [heroMuted, setHeroMuted] = useState(true)
  const heroVideoRef = useRef(null)

  useEffect(() => {
    if (!window.location.hash) return

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
  }, [])

  const visibleVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return videos.filter((video) => {
      const matchesFilter = activeFilter === 'All' || video.category === activeFilter
      const matchesSearch = !normalizedQuery
        || `${video.title} ${video.category} ${video.description}`.toLowerCase().includes(normalizedQuery)
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, query])

  const toggleHeroSound = () => {
    const nextMutedState = !heroMuted
    setHeroMuted(nextMutedState)
    if (heroVideoRef.current) heroVideoRef.current.muted = nextMutedState
  }

  const clearFilters = () => {
    setActiveFilter('All')
    setQuery('')
  }

  return (
    <main className="video-page">
      <section className="video-hero" aria-labelledby="video-page-title">
        <video
          ref={heroVideoRef}
          className="video-hero__film"
          autoPlay
          loop
          muted={heroMuted}
          playsInline
          poster={posterFive}
          aria-label="Featured Hussain Developers construction update"
        >
          <source src={videoFive} type="video/mp4" />
        </video>
        <div className="video-hero__overlay" />
        <div className="video-hero__grain" aria-hidden="true" />

        <div className="page-width video-hero__content">
          <div className="video-hero__copy" data-aos="fade-up">
            <p className="eyebrow eyebrow--light">Media center · Video gallery</p>
            <h1 id="video-page-title">See progress.<br /><em>Feel the place.</em></h1>
            <p>
              Step inside our developments through field stories that capture
              the landscape, architecture and everyday progress taking shape.
            </p>
            <div className="video-hero__actions">
              <a className="button" href="#video-library">Explore the films <span>↓</span></a>
              <button type="button" onClick={toggleHeroSound} aria-pressed={!heroMuted}>
                <span className={heroMuted ? '' : 'is-playing'} aria-hidden="true"><i /><i /><i /></span>
                {heroMuted ? 'Turn sound on' : 'Sound is on'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="media-library" id="video-library" aria-labelledby="media-library-title">
        <div className="media-library__inner page-width">
          <header className="media-library__heading" data-aos="fade-up">
            <div>
              <p className="eyebrow eyebrow--light">Explore our media</p>
              <h2 id="media-library-title">The site,<br /><em>from every angle.</em></h2>
            </div>
            <p>
              Browse a focused collection of on-site films documenting the
              spaces, details and landscape behind our communities.
            </p>
          </header>

          <div className="media-toolbar" data-aos="fade-up" data-aos-delay="80">
            <label className="media-search">
              <SearchIcon />
              <span className="media-search__label">Search videos</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the video library..."
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search">×</button>
              )}
            </label>

            <div className="media-filters" aria-label="Filter videos by category">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? 'is-active' : ''}
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="media-results" aria-live="polite">
            <p><strong>{String(visibleVideos.length).padStart(2, '0')}</strong> films found</p>
            {(activeFilter !== 'All' || query) && <button type="button" onClick={clearFilters}>Reset filters</button>}
          </div>

          {visibleVideos.length ? (
            <div className="video-library">
              {visibleVideos.map((video, index) => (
                <article className="video-card" key={video.id} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                  <div className="video-card__media">
                    <video controls preload="metadata" poster={video.poster}>
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <span>{video.category}</span>
                  </div>
                  <div className="video-card__body">
                    <p><span>Field story</span><b>/</b><span>{video.id}</span></p>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <div className="video-card__footer">
                      <span>Hussain Developers</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="media-empty">
              <span>00</span>
              <h3>No films found</h3>
              <p>Try another keyword or explore all categories.</p>
              <button className="button" type="button" onClick={clearFilters}>View all films</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default VideoGalleryPage
