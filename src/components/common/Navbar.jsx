import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/site-branding/hussain-developers-logo.webp'

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Media Center',
    children: [
      { label: 'Press Release', href: '/press-release', note: 'News & announcements' },
      { label: 'Video Gallery', href: '/video-gallery', note: 'Stories in motion' },
    ],
  },
  {
    label: 'Downloads',
    children: [
      { label: 'Project Maps', href: '/maps', note: 'View & download plans' },
      { label: 'Possession Forms', href: '/possession-forms', note: 'Official project forms' },
    ],
  },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Contacts', href: '/contacts' },
]

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navMenuRef.current?.contains(event.target)) setOpenDropdown(null)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpenDropdown(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner page-width">
        <a className="brand" href="/" aria-label="Hussain Developers home">
          <img src={logo} alt="Hussain Developers" />
        </a>

        <nav className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`} aria-label="Primary navigation" ref={navMenuRef}>
          {navigation.map((item) => item.children ? (
            <div className={`nav-dropdown ${openDropdown === item.label ? 'nav-dropdown--open' : ''}`} key={item.label}>
              <button
                className="nav-dropdown__trigger"
                type="button"
                aria-expanded={openDropdown === item.label}
                aria-controls={`${item.label.toLowerCase().replaceAll(' ', '-')}-menu`}
                onClick={() => setOpenDropdown((current) => current === item.label ? null : item.label)}
              >
                {item.label}
                <svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
              </button>
              <div className="nav-dropdown__menu" id={`${item.label.toLowerCase().replaceAll(' ', '-')}-menu`}>
                <span className="nav-dropdown__label">Explore {item.label.toLowerCase()}</span>
                {item.children.map((child, index) => (
                  <a key={child.label} href={child.href} onClick={closeMenu}>
                    <span className="nav-dropdown__number">0{index + 1}</span>
                    <span><strong>{child.label}</strong><small>{child.note}</small></span>
                    <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 9h10M10 5l4 4-4 4" /></svg>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <button className="theme-switch theme-switch--mobile" type="button" onClick={onToggleTheme}>
            <span className="theme-switch__swatches" aria-hidden="true">
              <i />
              <i />
            </span>
            {theme === 'hussain' ? 'Signature theme' : 'Hussain theme'}
          </button>
        </nav>

        <div className="navbar__actions">
          <button
            className="theme-switch theme-switch--desktop"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'hussain' ? 'signature' : 'Hussain'} color scheme`}
          >
            <span className="theme-switch__swatches" aria-hidden="true">
              <i />
              <i />
            </span>
            <span>{theme === 'hussain' ? 'Signature' : 'Hussain'}</span>
          </button>
          <a className="button button--small" href="/contacts">Let&apos;s talk</a>
          <button
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
