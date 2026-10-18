import logoImg from '../../assets/logo-ts-cropped.png'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="rts-footer-one pt--100 bg_light">
      <div className="container pb--80">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-wiget">
              <a className="logo" href="#home">
                <img
                  src={logoImg}
                  alt="T&S Consulting Group"
                  style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
                />
              </a>
              <h6 style={{ fontSize: '18px', fontWeight: '700', marginTop: '16px', marginBottom: '8px', color: '#1c1c1c' }}>
                T&amp;S Consulting Group
              </h6>
              <p className="disc" style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', marginBottom: '16px' }}>
                Your partner in recruitment, HR consulting, and employee development. We help organizations find the right talent, build effective HR systems, and develop high-performing teams.
              </p>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-7 mt_md--50 mt_sm--50">
            <div className="footer-wized-wrapper">
              <div className="single">
                <h6 className="title">Quick Links</h6>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Our Services</a></li>
                  <li><a href="#industries">Industries We Serve</a></li>
                  <li><a href="#blog">Insights &amp; Resources</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="single">
                <h6 className="title">Our Services</h6>
                <ul>
                  <li><a href="#services">Recruitment &amp; Talent</a></li>
                  <li><a href="#features">HR Consulting</a></li>
                  <li><a href="#training">Training &amp; Development</a></li>
                  <li><a href="#projects">Recruitment Benefits</a></li>
                  <li><a href="#faq">Terms &amp; Policies</a></li>
                </ul>
              </div>
              <div className="single">
                <h6 className="title">Contact Us</h6>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="tel:9137878303" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)' }}></i>
                      <span>9137878303</span>
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="tel:9967320335" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)' }}></i>
                      <span>9967320335</span>
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="mailto:info@tnsconsulting.in" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-envelope" style={{ color: 'var(--color-primary)' }}></i>
                      <span>info@tnsconsulting.in</span>
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="https://www.tnsconsulting.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-globe" style={{ color: 'var(--color-primary)' }}></i>
                      <span>www.tnsconsulting.in</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-1">
                <p className="disc">
                  &copy; 2026 T&amp;S Consulting Group. All rights reserved.
                </p>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#industries">Industries</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
