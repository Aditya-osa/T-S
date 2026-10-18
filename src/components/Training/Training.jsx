export default function Training() {
  const trainingPrograms = [
    'Communication and interpersonal skills',
    'Sales effectiveness and negotiation',
    'Client relationship management',
    'Interdepartmental collaboration',
    'Behavioural and professional development',
    'Leadership and team management',
    'Customer service excellence',
  ]

  return (
    <div id="training" className="rts-section-gap our-vission bg_light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pr--50 pr_sm--10 pr_md--10 mb_md--50 mb_sm--50">
            <div className="our-vision-right-content">
              <div className="title-left-wrapper">
                <span className="pre">LEARNING &amp; DEVELOPMENT</span>
                <h2 className="title rts-text-anime-style-1">
                  Develop People. <br /> Strengthen Performance.
                </h2>
              </div>
              <p className="disc">
                High-performing organizations invest in their people. Our customized training programs help employees build essential workplace skills, improve collaboration, and perform with greater confidence.
              </p>
              <div className="check-main-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px 16px', marginBottom: '20px' }}>
                {trainingPrograms.map((item, index) => (
                  <div key={index} className="single-check" style={{ marginBottom: 0 }}>
                    <i className="fa-regular fa-check"></i>
                    <p style={{ margin: 0, fontSize: '15px' }}>{item}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginBottom: '25px' }}>
                Training programs can be customized to meet your organization's specific requirements.
              </p>
              <a href="#contact" className="rts-btn btn-primary">
                Discuss Training Needs
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="vision-left-main-image text-center">
              <div className="thumbnail-vision" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}>
                <img src="/assets/images/about/07.webp" alt="Training and Development" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
