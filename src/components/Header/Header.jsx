import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo-ts-cropped.png'
import rawLogo from '../../assets/WhatsApp Image 2026-10-17 at 6,01,05 PM-Picsart-BackgroundRemover.jpeg'
import './Header.css'

export default function Header({ onOpenSidebar }) {
  const [isSticky, setIsSticky] = useState(false)
  const [lang, setLang] = useState('EN')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 15)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header-one header-relative header-white header--sticky ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrapper-main">
              <div className="logo-area">
                <a href="#home" className="header-logo-link">
                  <img src={logoImg || rawLogo} alt="T&S logo" className="header-logo-img" />
                </a>
              </div>
              <div className="nav-area">
                <ul>
                  <li className="main-nav">
                    <a href="#home">Home</a>
                  </li>
                  <li className="main-nav">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="main-nav has-dropdown mega-menu">
                    <a href="#services">Services</a>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-6">
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <a href="#services">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/service/01.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Recruitment &amp; Talent Acquisition</h5>
                                        <p className="details">
                                          Connect with qualified professionals who match your business needs and culture.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#features">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/service/02.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">HR Consulting</h5>
                                        <p className="details">
                                          Build effective HR systems, workforce planning, and performance management.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <a href="#training">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/service/03.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Training &amp; Development</h5>
                                        <p className="details">
                                          Equip your employees with practical skills, leadership, and collaboration abilities.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#faq">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/service/04.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Terms &amp; Replacement Policy</h5>
                                        <p className="details">
                                          Transparent 8.33% CTC fee structure and a 90-day replacement guarantee.
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-nav">
                    <a href="#industries">Industries</a>
                  </li>
                  <li className="main-nav">
                    <a href="#projects">Why Choose Us</a>
                  </li>
                  <li className="main-nav">
                    <a href="#blog">Insights</a>
                  </li>
                  <li className="main-nav">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="button-wrapper-flex">
                <a href="#contact" className="rts-btn btn-primary">
                  Contact Us
                </a>
                <div
                  className="menu-btn-toggle"
                  onClick={onOpenSidebar}
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle Menu"
                >
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="14" width="20" height="2" fill="#071431"></rect>
                    <rect y="7" width="20" height="2" fill="#071431"></rect>
                    <rect width="20" height="2" fill="#071431"></rect>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
