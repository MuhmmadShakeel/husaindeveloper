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

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

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

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'hussain' ? 'signature' : 'hussain',
    )
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/'
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
