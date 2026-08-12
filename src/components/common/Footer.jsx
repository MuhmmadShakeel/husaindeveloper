import logo from '../../assets/images/site-branding/hussain-developers-logo.webp'
import locationPin from '../../assets/images/footer/location-pin.webp'
import whatsapp from '../../assets/images/footer/whatsapp.webp'

function Footer() {
  return (
    <footer className="footer" id="downloads">
      <div className="footer__main page-width">
        <div className="footer__brand">
          <img src={logo} alt="Hussain Developers" />
          <p>Experience excellence in thoughtfully planned communities across South Punjab.</p>
          <a className="footer__address" href="https://maps.google.com" target="_blank" rel="noreferrer">
            <img src={locationPin} alt="" />
            <span>Hussain Developers &amp; Builders, Jhangi Wala Road, Opposite Sir Sadiq Hospital, Bahawalpur</span>
          </a>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <a href="/about">About</a>
          <a href="/facilities">Facilities</a>
          <a href="/projects">Projects</a>
          <a href="/#media-center">Media Center</a>
          <a href="/contacts">Contact</a>
        </div>

        <div className="footer__column">
          <h3>Downloads</h3>
          <a href="/maps">Project Maps</a>
          <a href="/possession-forms">Possession Forms</a>
        </div>

        <div className="footer__column footer__contact" id="contact">
          <h3>24 / 7 Toll Free</h3>
          <a className="footer__phone" href="tel:+923041111490">0304-1111490</a>
          <a href="mailto:Hussaindevelopers.builders@gmail.com">Hussaindevelopers.builders@gmail.com</a>
          <a className="button button--light" href="mailto:Hussaindevelopers.builders@gmail.com">Start a conversation</a>
        </div>
      </div>

      <div className="footer__bottom page-width">
        <p>© 2020 Hussain Developers. All Rights Reserved.</p>
        <a href="#top">Back to top <span>↑</span></a>
      </div>

      <a className="whatsapp-button" href="https://wa.me/923041111490" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <img src={whatsapp} alt="" />
      </a>
    </footer>
  )
}

export default Footer
