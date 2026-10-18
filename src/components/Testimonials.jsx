import { useState } from 'react'
import thumb06 from '../assets/testimonials/06.webp'
import thumb10 from '../assets/testimonials/10.webp'
import badge13 from '../assets/testimonials/13.svg'
import badge14 from '../assets/testimonials/14.svg'
import brand12 from '../assets/testimonials/12.svg'
import brand15 from '../assets/testimonials/15.svg'
import './Testimonials.css'

const testimonialsData = [
  {
    id: 1,
    image: thumb06,
    badge: badge13,
    brand: brand12,
    quote:
      'Working with T&S has been a game-changer for our business. Their strategic insights and innovative solutions have significantly boosted our growth. The professionalism and dedication are unmatched. Highly recommend!',
    name: 'John Smith',
    role: 'CEO of Tech Innovations Inc.',
  },
  {
    id: 2,
    image: thumb10,
    badge: badge14,
    brand: brand15,
    quote:
      'The engineering expertise delivered by T&S exceeded every expectation. Our delivery timelines improved by 40% within the first quarter of deployment. A truly outstanding partner.',
    name: 'David Wilson',
    role: 'CTO at CloudScale Dynamics',
  },
  {
    id: 3,
    image: thumb06,
    badge: badge13,
    brand: brand12,
    quote:
      'Seamless collaboration, clear communication, and robust technical execution. T&S built our core platform with rock-solid reliability from day one.',
    name: 'Robert Miller',
    role: 'VP of Product at FinEdge Global',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    )
  }

  const current = testimonialsData[currentIndex]

  return (
    <div className="rts-testimonials-style-three area-4 rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-center-wrapper">
              <span className="sub-title">Testimonials</span>
              <h2 className="title rts-text-anime-style-1">
                Some clients feedbacks
              </h2>
            </div>
          </div>

          <div className="col-lg-12 pt--60">
            <div className="testimominas-single-wrapper-three">
              <div className="swiper mySwiper-testimonials-three">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-testimonails-three">
                      <div className="left-thumbnmail">
                        <img
                          src={current.image}
                          alt={current.name}
                          className="main-avatar"
                        />
                        <div className="small-image">
                          <img src={current.badge} alt="Quote badge" />
                        </div>
                      </div>

                      <div className="right-content">
                        <div className="top">
                          <div className="brand">
                            <img src={current.brand} alt="Client brand" />
                          </div>
                          <div className="content">
                            <p className="disc">"{current.quote}"</p>
                          </div>
                        </div>

                        <div className="bottom">
                          <h5 className="title">{current.name}</h5>
                          <span>{current.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonials-slider-navigation">
                  <button
                    type="button"
                    className="swiper-button-prev"
                    onClick={handlePrev}
                    aria-label="Previous feedback"
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </button>

                  <div className="slider-pagination-dots">
                    {testimonialsData.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    className="swiper-button-next"
                    onClick={handleNext}
                    aria-label="Next feedback"
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
