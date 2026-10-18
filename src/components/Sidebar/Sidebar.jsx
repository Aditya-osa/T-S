import { useState } from 'react'
import logoImg from '../../assets/logo-ts-cropped.png'

export default function Sidebar({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null)

  const toggleSubmenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <>
      <div id="side-bar" className={`side-bar header-two ${isOpen ? 'show' : ''}`}>
        <div className="rts-sidebar-menu-desktop">
          <div className="logo-area">
            <a className="logo" href="#home" onClick={onClose}>
              <img
                src={logoImg}
                alt="T&S"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
              />
            </a>
            <button
              className="close-icon-menu"
              aria-label="close menu"
              onClick={onClose}
              type="button"
            >
              <i className="far fa-times"></i>
            </button>
          </div>
          <div className="body d-none d-xl-block">
            <div className="about-us">
              <h4>About T&amp;S</h4>
              <p>
                T&amp;S Consulting Group provides integrated solutions in Recruitment, HR Consulting, and Training &amp; Development, enabling businesses to build stronger teams, improve workplace performance, and achieve sustainable growth.
              </p>
            </div>
            <div className="menu-list">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#about" onClick={onClose}>About Us</a></li>
                <li><a href="#services" onClick={onClose}>Our Services</a></li>
                <li><a href="#projects" onClick={onClose}>Why Choose Us</a></li>
                <li><a href="#features" onClick={onClose}>HR Consulting</a></li>
                <li><a href="#training" onClick={onClose}>Training &amp; Development</a></li>
                <li><a href="#industries" onClick={onClose}>Industries We Serve</a></li>
                <li><a href="#team" onClick={onClose}>Vision, Mission &amp; Values</a></li>
                <li><a href="#blog" onClick={onClose}>Insights &amp; Resources</a></li>
                <li><a href="#faq" onClick={onClose}>Recruitment Terms &amp; FAQ</a></li>
                <li><a href="#contact" onClick={onClose}>Let's Talk</a></li>
              </ul>
            </div>
            <div className="get-in-touch">
              <h4>Get In Touch</h4>
              <div className="wrapper">
                <div className="single">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:9137878303">9137878303</a> / <a href="tel:9967320335">9967320335</a>
                </div>
                <div className="single">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@tnsconsulting.in">info@tnsconsulting.in</a>
                </div>
                <div className="single">
                  <i className="fas fa-globe"></i>
                  <a href="https://www.tnsconsulting.in" target="_blank" rel="noreferrer">www.tnsconsulting.in</a>
                </div>
              </div>
              <div className="social-wrapper-two menu">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="linkdin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-main d-block d-xl-none">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <a href="#home" className="main" onClick={onClose}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="main" onClick={onClose}>
                  About Us
                </a>
              </li>
              <li className={`has-droupdown ${activeMenu === 'services' ? 'active' : ''}`}>
                <a
                  href="#services"
                  className="main"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleSubmenu('services')
                  }}
                >
                  Services
                </a>
                <ul className={`submenu mm-collapse ${activeMenu === 'services' ? 'mm-show' : ''}`} style={{ display: activeMenu === 'services' ? 'block' : 'none' }}>
                  <li><a href="#services" onClick={onClose}>Recruitment &amp; Talent</a></li>
                  <li><a href="#features" onClick={onClose}>HR Consulting</a></li>
                  <li><a href="#training" onClick={onClose}>Training &amp; Development</a></li>
                  <li><a href="#faq" onClick={onClose}>Recruitment Terms &amp; Policies</a></li>
                </ul>
              </li>
              <li>
                <a href="#industries" className="main" onClick={onClose}>
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#projects" className="main" onClick={onClose}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#team" className="main" onClick={onClose}>
                  Vision &amp; Values
                </a>
              </li>
              <li>
                <a href="#blog" className="main" onClick={onClose}>
                  Insights &amp; Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="main" onClick={onClose}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="rts-social-border-area right-sidebar mt--50">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="linkdin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="anywhere-home"
        className={isOpen ? 'bgshow' : ''}
        onClick={onClose}
        style={{ display: isOpen ? 'block' : 'none' }}
      ></div>
    </>
  )
}
