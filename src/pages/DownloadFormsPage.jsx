import homesForm from '../assets/images/possession-forms/al-rahim-homes-housing-scheme.pdf'
import paradiseForm from '../assets/images/possession-forms/al-rahim-paradise.pdf'
import smartCityForm from '../assets/images/possession-forms/al-rahim-smart-city.pdf'
import heroImage from '../assets/images/homeherosecimg/hero-04.webp'
import '../styles/maps.css'

const possessionForms = [
  { title: 'Al Rahim Homes Housing Scheme', file: homesForm },
  { title: 'Al Rahim Paradise', file: paradiseForm },
  { title: 'Al Rahim Smart City', file: smartCityForm },
]

function DownloadFormsPage() {
  return (
    <main className="forms-page">
      <section className="forms-hero">
        <img src={heroImage} alt="Hussain Developers community" />
        <div className="forms-hero__overlay" />
        <div className="forms-hero__content page-width" data-aos="fade-up">
          <p className="eyebrow eyebrow--light">Downloads · Possession forms</p>
          <h1>The right paperwork,<br /><em>ready when you are.</em></h1>
          <p>
            Access official possession documents for selected Hussain Developers communities.
          </p>
          <a className="button forms-hero__button" href="#document-library">
            Browse official forms <span>↓</span>
          </a>
        </div>
      </section>

      <section className="forms-library" id="document-library">
        <div className="forms-library__inner page-width">
          <header data-aos="fade-up">
            <p className="eyebrow">Document library</p>
            <h2>Possession <em>downloads.</em></h2>
          </header>
          <div className="forms-grid">
            {possessionForms.map((form, index) => (
              <article className="form-document" key={form.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="form-document__preview">
                  <iframe
                    src={`${form.file}#page=1&view=FitH&toolbar=0&navpanes=0`}
                    title={`${form.title} PDF preview`}
                    loading="lazy"
                    scrolling="no"
                    tabIndex="-1"
                  />
                  <div className="form-document__preview-bar">
                    <span>Official PDF</span>
                    <a href={form.file} target="_blank" rel="noreferrer" aria-label={`Open ${form.title} in a new tab`}>
                      Open full form <b>↗</b>
                    </a>
                  </div>
                </div>
                <div className="form-document__body">
                  <span>Possession document · 0{index + 1}</span>
                  <h3>{form.title}</h3>
                  <p>Original official form, ready to review, download and print.</p>
                  <div className="form-document__actions">
                    <a href={form.file} target="_blank" rel="noreferrer">Preview form <span>↗</span></a>
                    <a href={form.file} download>Download PDF <span>↓</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default DownloadFormsPage
