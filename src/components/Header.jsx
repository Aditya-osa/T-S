import { useState, useEffect } from 'react'
import logoImg from '../assets/WhatsApp Image 2026-10-17 at 6,01,05 PM-Picsart-BackgroundRemover.jpeg'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="brand-link" aria-label="T&S Home">
          <img src={logoImg} alt="T&S Logo" className="brand-logo" />

        </a>

        <nav
          className={`nav-links ${isOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="cta-btn">
            Get in Touch
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
