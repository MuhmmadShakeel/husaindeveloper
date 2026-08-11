import Hero from '../components/home/Hero'
import CeoMessage from '../components/home/CeoMessage'
import ProjectsShowcase from '../components/home/ProjectsShowcase'
import CompanyStory from '../components/home/CompanyStory'
import ValuesSection from '../components/home/ValuesSection'
import AwardsSection from '../components/home/AwardsSection'
import NewsSection from '../components/home/NewsSection'
import ExclusivitySection from '../components/home/ExclusivitySection'
import StatsSection from '../components/home/StatsSection'

function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <CeoMessage />
      <ProjectsShowcase />
      <CompanyStory />
      <ValuesSection />
      <AwardsSection />
      <NewsSection />
      <ExclusivitySection />
      <StatsSection />
    </main>
  )
}

export default HomePage
