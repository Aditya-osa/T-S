export default function Testimonials() {
  const testimonials = [
    {
      avatar: '/assets/images/testimonials/01.webp',
      name: 'Manufacturing Sector Client',
      desig: 'Operations & Plant Leadership',
      disc: 'T&S Consulting Group understood our technical workforce requirements quickly and delivered qualified candidates within committed timelines.',
    },
    {
      avatar: '/assets/images/testimonials/02.webp',
      name: 'Engineering & Infrastructure Partner',
      desig: 'Director of Human Capital',
      disc: 'Their dedicated recruitment support and thorough candidate screening made our hiring smooth, reliable, and highly responsive.',
    },
    {
      avatar: '/assets/images/testimonials/03.webp',
      name: 'Corporate Enterprise Client',
      desig: 'Head of People & Culture',
      disc: 'The HR consulting and performance appraisal frameworks designed by T&S helped clarify departmental goals and strengthened overall productivity.',
    },
    {
      avatar: '/assets/images/testimonials/04.webp',
      name: 'Pharma & Healthcare Partner',
      desig: 'Talent Acquisition Head',
      disc: 'A dependable recruitment partner that focuses on cultural alignment, skill competence, and long-term retention.',
    },
    {
      avatar: '/assets/images/testimonials/01.webp',
      name: 'Commercial & Trading Client',
      desig: 'Managing Director',
      disc: 'Their customized training programs equipped our team with practical communication skills and stronger client relationship abilities.',
    },
  ]

  return (
    <div id="testimonials" className="rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="testimonials-left-one">
              <div className="title-left-wrapper">
                <span className="pre">CLIENT PARTNERSHIPS</span>
                <h2 className="title rts-text-anime-style-1">
                  Trusted Partnerships. <br /> Meaningful Progress.
                </h2>
                <p className="disc">
                  We work closely with organizations to understand their challenges, identify the right solutions, and support their people and business objectives with confidence.
                </p>
              </div>
              <div className="swiper-btn-area">
                <div
                  className="swiper-btn swiper-button-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="fa-regular fa-chevron-left"></i>
                </div>
                <div
                  className="swiper-btn swiper-button-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="fa-regular fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt_md--50 mt_sm--50">
            <div className="floating-div">
              {/* Swiper */}
              <div className="swiper mySwiper-testimonails">
                <div className="swiper-wrapper">
                  {testimonials.map((item, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="single-testimonails-style-one">
                        <div className="quote">
                          <img src="/assets/images/testimonials/quote.png" alt="quote" />
                        </div>
                        <div className="avatar">
                          <img src={item.avatar} alt="testimonials" />
                        </div>
                        <h6 className="title">{item.name}</h6>
                        <p className="desig">{item.desig}</p>
                        <p className="disc">{item.disc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
