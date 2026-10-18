export default function Projects() {
  const cases = [
    {
      img: '/assets/images/case/01.webp',
      category: 'Targeted Sourcing',
      title: 'Right Talent, Right Role',
      desc: 'Find professionals whose skills align with your requirements.',
    },
    {
      img: '/assets/images/case/02.webp',
      category: 'Dedicated Partners',
      title: 'Dedicated Recruitment Support',
      desc: 'Work with a dedicated recruiter focused on your hiring objectives.',
    },
    {
      img: '/assets/images/case/03.webp',
      category: 'Domain Knowledge',
      title: 'Industry Expertise',
      desc: 'Benefit from market understanding and targeted talent searches.',
    },
    {
      img: '/assets/images/case/04.webp',
      category: 'Long-term Success',
      title: 'Better Hiring Outcomes',
      desc: 'Strengthen workforce quality and long-term retention.',
    },
    {
      img: '/assets/images/case/03.webp',
      category: 'Strategic Fit',
      title: 'Customized Hiring Solutions',
      desc: 'Recruitment strategies tailored to your industry and goals.',
    },
    {
      img: '/assets/images/case/04.webp',
      category: 'Multi-Sector Network',
      title: 'Cross-Industry Reach',
      desc: 'Talent solutions spanning manufacturing, tech, healthcare & more.',
    },
  ]

  return (
    <div id="projects" className="rts-case-area rts-section-gap bg_light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <div className="title-left-wrapper">
                <span className="pre">WHY CHOOSE US?</span>
                <h2 className="title rts-text-anime-style-1">
                  Recruitment That Builds <br /> Stronger Teams
                </h2>
              </div>
              <div className="right-area">
                <p className="disc">
                  Benefit from strategic talent acquisition, dedicated account management, and customized hiring solutions tailored to your business goals.
                </p>
                <a href="#contact" className="btn-line">
                  <span>Connect With Us</span> <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--10">
          <div className="col-lg-12">
            <div className="swiper mySwiper-case-one">
              <div className="swiper-wrapper">
                {cases.map((c, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="single-case-style-one">
                      <a href="#contact" className="thumbnail-case">
                        <img src={c.img} alt="case" />
                      </a>
                      <a href="#contact" className="inner-content">
                        <span>{c.category}</span>
                        <h5 className="title">{c.title}</h5>
                        <p className="desc">{c.desc}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
