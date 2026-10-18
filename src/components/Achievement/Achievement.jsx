export default function Achievement({ onOpenVideo }) {
  const handleVideoClick = (e) => {
    e.preventDefault()
    if (onOpenVideo) {
      onOpenVideo('https://www.youtube.com/watch?v=vZE0j_WCRvI')
    }
  }

  return (
    <div id="achievement" className="rts-achivment-area rts-section-gap bg_dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-center-wrapper">
              <span className="pre">PEOPLE. PERFORMANCE. PROGRESS.</span>
              <h2 className="title rts-text-anime-style-1">
                Expert Solutions to Power <br /> Your Business Growth
              </h2>
              <p className="disc mt--15" style={{ maxWidth: '680px', margin: '15px auto 25px', color: '#c5c5c5', fontSize: '17px', lineHeight: '1.6' }}>
                From finding the right talent to developing high-performing teams, we help organizations create the foundation for lasting success.
              </p>
              <div>
                <a href="#contact" className="rts-btn btn-primary" style={{ display: 'inline-flex' }}>
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt--30">
          <div className="col-lg-12">
            <div className="achievment-large-image-video">
              <img
                className="achiv-m-img"
                src="/assets/images/achievement/01.webp"
                alt="achievement"
              />
              <div className="vedio-icone">
                <a
                  className="video-play-button play-video popup-video"
                  href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                  onClick={handleVideoClick}
                  role="button"
                  aria-label="Play video"
                >
                  <span></span>
                </a>
                <div className="video-overlay">
                  <a href="#achievement" className="video-overlay-close">
                    ×
                  </a>
                </div>
              </div>
              <div className="right-bottom-area">
                <div className="counter-area">
                  <h3 className="title">
                    <span className="odometer" data-count="10">0</span>
                    +
                  </h3>
                  <span className="done">Years of Recruitment Experience</span>
                </div>
                <div className="icon">
                  <img src="/assets/images/achievement/01.svg" alt="sg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
