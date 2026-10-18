export default function Features() {
  const checkItems = [
    'Organizational structure and department planning',
    'Manpower planning and job descriptions',
    'Recruitment process setup and employee onboarding',
    'KRA, KPI, and performance management systems',
    'HR policies and comprehensive employee handbooks',
    'MIS, reporting, and structured meeting management',
    'Employee engagement and recognition programs',
    'Exit management and process improvement',
  ]

  return (
    <div id="features" className="rts-section-gap our-vission">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="vision-left-main-image">
              <div className="thumbnail-vision">
                <img src="/assets/images/others/01.webp" alt="vision" />
              </div>
              {/* <img className="board" src="/assets/images/others/board.webp" alt="other" /> */}
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6 pl--50 pl_sm--10 pl_md--10 mt_md--50 mt_sm--50">
            <div className="our-vision-right-content">
              <div className="title-left-wrapper">
                <span className="pre">HR CONSULTING</span>
                <h2 className="title rts-text-anime-style-1">
                  Smarter HR. <br /> Stronger Organizations.
                </h2>
              </div>
              <p className="disc">
                Your people are among your most valuable business assets. Our HR consulting services help organizations establish effective processes, strengthen employee engagement, and improve overall productivity.
              </p>
              <div className="check-main-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px 16px', marginBottom: '30px' }}>
                {checkItems.map((item, index) => (
                  <div key={index} className="single-check" style={{ marginBottom: 0 }}>
                    <i className="fa-regular fa-check"></i>
                    <p style={{ margin: 0, fontSize: '15px' }}>{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="rts-btn btn-primary">
                Explore HR Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
