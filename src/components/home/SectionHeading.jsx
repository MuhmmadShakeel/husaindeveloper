function SectionHeading({ eyebrow, title, copy, align = 'left', light = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-heading__copy">{copy}</p>}
    </div>
  )
}

export default SectionHeading
