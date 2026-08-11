import contactVisual from '../assets/images/contacts/contact-side.jpg'
import facebook from '../assets/images/contacts/facebook.webp'
import instagram from '../assets/images/contacts/instagram.webp'
import twitter from '../assets/images/contacts/twitter.webp'
import '../styles/contact.css'

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" id="top" aria-labelledby="contact-title">
        <div className="contact-hero__grid page-width">
          <div className="contact-hero__content" data-aos="fade-up">
            <p className="eyebrow eyebrow--light">Contact Hussain Developers</p>
            <h1 id="contact-title">Let&apos;s shape your<br /><em>next address.</em></h1>
            <p>Whether you are exploring a project, planning a visit or need support with an existing property, our team is ready to help.</p>
            <a className="button" href="#contact-form-title">Start a conversation <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="contact-connect" aria-labelledby="contact-form-title">
        <div className="contact-connect__grid page-width">
          <div className="contact-form-card" data-aos="fade-right">
            <header>
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-form-title">How can we <em>help?</em></h2>
              <p>Share a few details and our team will guide you toward the right next step.</p>
            </header>

            <form action="mailto:Hussaindevelopers.builders@gmail.com" method="post" encType="text/plain">
              <label className="contact-field contact-field--full">
                <span>I&apos;m interested in</span>
                <select name="Interest" defaultValue="Project information">
                  <option>Project information</option>
                  <option>Booking a site visit</option>
                  <option>Possession support</option>
                  <option>Existing customer support</option>
                  <option>General enquiry</option>
                </select>
              </label>

              <label className="contact-field">
                <span>Your name</span>
                <input type="text" name="Name" placeholder="Full name" autoComplete="name" required />
              </label>
              <label className="contact-field">
                <span>Phone number</span>
                <input type="tel" name="Phone" placeholder="03XX XXXXXXX" autoComplete="tel" required />
              </label>
              <label className="contact-field contact-field--full">
                <span>Email address</span>
                <input type="email" name="Email" placeholder="you@example.com" autoComplete="email" required />
              </label>
              <label className="contact-field contact-field--full">
                <span>Your message</span>
                <textarea name="Message" rows="5" placeholder="Tell us how we can help..." required />
              </label>

              <div className="contact-form-card__footer">
                <button className="button" type="submit">Send enquiry <span>↗</span></button>
                <small>We respect your privacy and use your details only to respond to your enquiry.</small>
              </div>
            </form>
          </div>

          <aside className="contact-side" data-aos="fade-left">
            <figure className="contact-side__visual">
              <img src={contactVisual} alt="Customer contacting the Hussain Developers team" />
              <figcaption>
                <span>Customer care</span>
                <strong>Here when you need us.</strong>
                <small>Responsive guidance from enquiry to ownership.</small>
              </figcaption>
            </figure>

            <div className="contact-office">
              <div className="contact-office__heading">
                <p className="eyebrow eyebrow--light">Visit &amp; connect</p>
                <h2>Head office</h2>
              </div>

              <div className="contact-office__details">
                <div><span>Address</span><strong>Jhangi Wala Road, Opposite Sir Sadiq Hospital, Bahawalpur</strong></div>
                <div><span>Direct line</span><a href="tel:+923041111490">0304-1111490</a></div>
                <div><span>Email</span><a href="mailto:Hussaindevelopers.builders@gmail.com">Hussaindevelopers.builders@gmail.com</a></div>
              </div>

              <div className="contact-office__footer">
                <div className="contact-office__socials">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={facebook} alt="" /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={instagram} alt="" /></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><img src={twitter} alt="" /></a>
                </div>
                <a className="contact-office__map" href="https://maps.google.com/?q=Hussain+Developers+Builders+Jhangi+Wala+Road+Bahawalpur" target="_blank" rel="noreferrer">
                  Get directions <span>↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
