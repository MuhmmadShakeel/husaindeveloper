function ProjectFilters({ search, category, categories, resultCount, onSearch, onCategory }) {
  return (
    <div className="project-filters" data-aos="fade-up">
      <label className="project-filters__search">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={search}
          placeholder="Search by project, type or location"
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>

      <div className="project-filters__categories" aria-label="Filter projects by category">
        {categories.map((item) => (
          <button
            className={category === item ? 'is-active' : ''}
            key={item}
            type="button"
            onClick={() => onCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="project-filters__count"><strong>{resultCount}</strong> projects</p>
    </div>
  )
}

export default ProjectFilters
