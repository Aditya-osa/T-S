export default function Industries() {
  const industries = [
    { name: 'Manufacturing', icon: 'fa-industry' },
    { name: 'Information Technology', icon: 'fa-laptop-code' },
    { name: 'HVAC', icon: 'fa-fan' },
    { name: 'Chemical, Plastics, Rubber & Glass', icon: 'fa-flask' },
    { name: 'Engineering & Construction', icon: 'fa-helmet-safety' },
    { name: 'Food & FMCG', icon: 'fa-utensils' },
    { name: 'Electricals & Furnishings', icon: 'fa-bolt' },
    { name: 'Cement & Building Materials', icon: 'fa-building' },
    { name: 'Education & E-Learning', icon: 'fa-graduation-cap' },
    { name: 'Automation', icon: 'fa-robot' },
    { name: 'Metal, Iron & Steel', icon: 'fa-cubes' },
    { name: 'Pharma & Healthcare', icon: 'fa-heart-pulse' },
    { name: 'Power, Energy & Solar', icon: 'fa-solar-panel' },
    { name: 'Printing & Packaging', icon: 'fa-print' },
    { name: 'Travel & Tourism', icon: 'fa-plane-departure' },
  ]

  return (
    <div id="industries" className="rts-service-area-one rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <div className="title-left-wrapper">
                <span className="pre">INDUSTRY EXPERTISE</span>
                <h2 className="title rts-text-anime-style-1">
                  Talent Solutions Across <br /> Diverse Industries
                </h2>
              </div>
              <div className="right-area">
                <p className="disc">
                  We support recruitment and HR requirements across a diverse range of sectors, providing specialized expertise and targeted talent searches.
                </p>
                <a href="#contact" className="btn-line">
                  <span>Enquire for Your Sector</span> <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mt--10">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="single-service-style-one"
                style={{
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderRadius: '10px',
                  border: '1px solid #eef0f4',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h5 className="title" style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#1c1c1c' }}>
                  {item.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt--30">
          <div className="col-12 text-center">
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#666' }}>
              <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', marginRight: '8px' }}></i>
              And many more industry sectors customized to your hiring requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
