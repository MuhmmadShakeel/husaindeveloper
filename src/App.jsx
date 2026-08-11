import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import './styles/projects.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import PressReleasePage from './pages/PressReleasePage'
import PressReleaseDetailPage from './pages/PressReleaseDetailPage'
import VideoGalleryPage from './pages/VideoGalleryPage'
import MapsPage from './pages/MapsPage'
import MapDetailPage from './pages/MapDetailPage'
import DownloadFormsPage from './pages/DownloadFormsPage'
import FacilitiesPage from './pages/FacilitiesPage'
import ContactPage from './pages/ContactPage'
import ProjectDetailsPage from './pages/detailed-project-pages/ProjectDetailsPage'
import { getProjectBySlug } from './data/projects'

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem('hussain-theme')
  return savedTheme === 'signature' ? 'signature' : 'hussain'
}

const getLocationKey = () => (
  `${window.location.pathname}${window.location.search}${window.location.hash}`
)

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [locationKey, setLocationKey] = useState(getLocationKey)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('hussain-theme', theme)
  }, [theme])

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      offset: 72,
      once: true,
    })
  }, [])

  useEffect(() => {
    const syncLocation = () => setLocationKey(getLocationKey())

    const handleInternalNavigation = (event) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
      ) return

      const anchor = event.target instanceof Element
        ? event.target.closest('a[href]')
        : null

      if (
        !anchor
        || anchor.hasAttribute('download')
        || (anchor.target && anchor.target !== '_self')
      ) return

      const destination = new URL(anchor.href, window.location.href)
      if (
        destination.origin !== window.location.origin
        || !['http:', 'https:'].includes(destination.protocol)
      ) return

      event.preventDefault()
      const nextLocation = `${destination.pathname}${destination.search}${destination.hash}`

      if (nextLocation === getLocationKey()) {
        if (destination.hash) {
          const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)))
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        return
      }

      window.history.pushState({}, '', nextLocation)
      syncLocation()
    }

    document.addEventListener('click', handleInternalNavigation)
    window.addEventListener('popstate', syncLocation)

    return () => {
      document.removeEventListener('click', handleInternalNavigation)
      window.removeEventListener('popstate', syncLocation)
    }
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hash = window.location.hash
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
      AOS.refreshHard()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [locationKey])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'hussain' ? 'signature' : 'hussain',
    )
  }

  const currentUrl = new URL(locationKey, window.location.origin)
  const path = currentUrl.pathname.replace(/\/+$/, '') || '/'
  const projectSlug = path.startsWith('/projects/') ? path.split('/')[2] : null
  const selectedProject = projectSlug ? getProjectBySlug(projectSlug) : null
  const mapSlug = path.startsWith('/maps/') ? path.split('/')[2] : null
  const selectedMapProject = mapSlug ? getProjectBySlug(mapSlug) : null
  const pressReleaseId = path.startsWith('/press-release/') ? path.split('/')[2] : null

  let page = <HomePage />
  if (path === '/projects') page = <ProjectsPage />
  if (path === '/press-release') page = <PressReleasePage />
  if (pressReleaseId) page = <PressReleaseDetailPage releaseId={pressReleaseId} />
  if (path === '/video-gallery') page = <VideoGalleryPage />
  if (path === '/maps') page = <MapsPage />
  if (mapSlug) page = selectedMapProject ? <MapDetailPage project={selectedMapProject} /> : <MapsPage />
  if (path === '/possession-forms') page = <DownloadFormsPage />
  if (path === '/facilities') page = <FacilitiesPage />
  if (path === '/contacts') page = <ContactPage />
  if (projectSlug) page = selectedProject ? <ProjectDetailsPage project={selectedProject} /> : <ProjectsPage />

  return (
    <div className="site-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      {page}
      <Footer />
    </div>
  )
}
export default App
