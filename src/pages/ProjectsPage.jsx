import { useMemo, useState } from 'react'
import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectCard from '../components/projects/ProjectCard'
import { projectCategories, projects } from '../data/projects'
import projectsHeroOne from '../assets/images/homeherosecimg/hero-01.webp'
import projectsHeroTwo from '../assets/images/homeherosecimg/hero-03.webp'
import projectsHeroThree from '../assets/images/homeherosecimg/hero-05.webp'

const heroSlides = [
  {
    name: projects[2].name,
    image: projectsHeroOne,
    eyebrow: 'Master-planned communities',
    copy: 'Explore distinctive developments created around family, connection and lasting value.',
  },
  {
    name: projects[3].name,
    image: projectsHeroTwo,
    eyebrow: 'Green spaces · Complete living',
    copy: 'Discover communities where thoughtful landscapes and everyday convenience belong together.',
  },
  {
    name: projects[7].name,
    image: projectsHeroThree,
    eyebrow: 'Residential · Commercial · Connected',
    copy: 'Find an address shaped by modern infrastructure, considered design and opportunity.',
  },
]

function ProjectsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category
      const matchesSearch = !term || [project.name, project.category, project.location, project.tagline]
        .join(' ')
        .toLowerCase()
        .includes(term)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <main className="projects-page">
      <ProjectsHero slides={heroSlides} />

      <section className="project-directory" id="project-directory">
        <div className="page-width">
          <header className="project-directory__heading" data-aos="fade-up">
            <div>
              <p className="eyebrow">Our developments</p>
              <h1>Find your place in a <em>Hussain community.</em></h1>
            </div>
            <p>From established neighbourhoods to future-ready destinations, explore every Hussain Developers project in Bahawalpur.</p>
          </header>

          <ProjectFilters
            search={search}
            category={category}
            categories={projectCategories}
            resultCount={filteredProjects.length}
            onSearch={setSearch}
            onCategory={setCategory}
          />

          {filteredProjects.length > 0 ? (
            <div className="project-directory__grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.slug} />
              ))}
            </div>
          ) : (
            <div className="project-directory__empty">
              <strong>No projects found</strong>
              <p>Try another project name or choose a different category.</p>
              <button type="button" onClick={() => { setSearch(''); setCategory('All') }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage
