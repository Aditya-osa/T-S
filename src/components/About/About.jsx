export default function About() {
  return (
    <div id="about" className="rts-about-area rts-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-area-inner-wrapper-thumbnail">
              <div className="left-image">
                <img src="/assets/images/about/01.webp" alt="about" />
              </div>
              <div className="left-image last">
                <img src="/assets/images/about/02.webp" alt="about" />
              </div>
              <div className="experience">
                <h2 className="title">3</h2>
                <p>Core Service Areas</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl--50 pl_md--10 pl_sm--10 pt_md--50 pt_sm--50">
            <div className="about-content-style-one">
              <div className="title-left-wrapper">
                <span className="pre">ABOUT T&amp;S</span>
                <h2 className="title rts-text-anime-style-1">
                  Building Better Businesses Through People
                </h2>
              </div>
              <p className="disc">
                T&amp;S Consulting Group was founded by a team of professional consultants with a shared purpose: helping organizations achieve sustainable growth and navigate business challenges effectively. We provide integrated solutions in Recruitment, HR Consulting, and Training &amp; Development, enabling businesses to build stronger teams, improve workplace performance, and achieve their organizational goals. Our approach combines industry knowledge, practical execution, and people-focused strategies tailored to each client's needs.
              </p>
              <div className="quote-and-review-area">
                <div className="quote-area">
                  <p className="quote">
                    "We believe that the right people, effective HR practices, and continuous learning are the foundations of organizational growth."
                  </p>
                </div>
                <div className="review-area">
                  <h2 className="title">3</h2>
                  <p>Integrated Business Solutions</p>
                  <img src="/assets/images/about/avatar.png" alt="about" />
                </div>
              </div>
              <a href="#services" className="rts-btn btn-primary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
