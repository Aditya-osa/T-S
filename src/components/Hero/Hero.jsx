export default function Hero({ onOpenVideo }) {
  const handleVideoClick = (e) => {
    e.preventDefault()
    if (onOpenVideo) {
      onOpenVideo('https://www.youtube.com/watch?v=vZE0j_WCRvI')
    }
  }

  return (
    <div id="home" className="banner-swiper-main-wrapper-one">
      <div className="swiper mySwiper-banner-one">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-banner-area-one two bg_image">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-style-one-wrapper-inner">
                      <span className="pre-title">YOUR PEOPLE. OUR PRIORITY.</span>
                      <h1 className="title rts-text-anime-style-1">
                        Empowering Businesses Through People &amp; Strategy
                      </h1>
                      <p className="disc">
                        T&amp;S Consulting Group helps businesses grow with the right talent, strategic HR solutions,
                        and customized employee training.
                      </p>
                      <div className="button-wrapper">
                        <a href="#services" className="rts-btn btn-primary btn-white">
                          Explore Our Services
                        </a>
                        <a href="#contact" className="rts-btn btn-primary" style={{ marginLeft: '15px' }}>
                          Contact Us
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-area-one bg_image">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-style-one-wrapper-inner">
                      <span className="pre-title">STRATEGIC RECRUITMENT &amp; HR</span>
                      <h1 className="title rts-text-anime-style-1">
                        Recruitment &amp; HR Solutions for Every Enterprise
                      </h1>
                      <p className="disc">
                        Connect with qualified professionals, streamline HR processes, and strengthen employee
                        performance to achieve sustainable growth.
                      </p>
                      <div className="button-wrapper">
                        <a href="#services" className="rts-btn btn-primary btn-white">
                          Explore Our Services
                        </a>
                        <a href="#contact" className="rts-btn btn-primary" style={{ marginLeft: '15px' }}>
                          Contact Us
                        </a>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-area-one three bg_image">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-style-one-wrapper-inner">
                      <span className="pre-title">LEARNING &amp; DEVELOPMENT</span>
                      <h1 className="title rts-text-anime-style-1">
                        Develop People. Strengthen Performance.
                      </h1>
                      <p className="disc">
                        Customized corporate training programs that build essential workplace skills, leadership
                        capabilities, and team collaboration.
                      </p>
                      <div className="button-wrapper">
                        <a href="#services" className="rts-btn btn-primary btn-white">
                          Explore Our Services
                        </a>
                        <a href="#contact" className="rts-btn btn-primary" style={{ marginLeft: '15px' }}>
                          Contact Us
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next">
          <i className="fa-regular fa-chevron-right"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="fa-regular fa-chevron-left"></i>
        </div>
      </div>


    </div>
  )
}
