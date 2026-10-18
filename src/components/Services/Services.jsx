export default function Services() {
  const services = [
    {
      icon: '/assets/images/service/01.svg',
      title: 'Recruitment & Talent Acquisition',
      desc: 'Connect with qualified professionals who match your business needs, company culture, and long-term goals.',
    },
    {
      icon: '/assets/images/service/02.svg',
      title: 'HR Consulting',
      desc: 'Build effective HR systems, improve workforce planning, streamline processes, and strengthen employee performance.',
    },
    {
      icon: '/assets/images/service/03.svg',
      title: 'Training & Development',
      desc: 'Equip your employees with practical skills, stronger communication, leadership abilities, and confidence to perform.',
    },
    {
      icon: '/assets/images/service/04.svg',
      title: 'Recruitment Terms & Assurance',
      desc: 'Transparent 8.33% CTC fee structure, 30-day payment terms, and a 90-day replacement policy for peace of mind.',
    },
  ]

  return (
    <div id="services" className="rts-service-area-one rts-section-gap bg_light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <div className="title-left-wrapper">
                <span className="pre">WHAT WE DO</span>
                <h2 className="title rts-text-anime-style-1">
                  Comprehensive HR <br /> Solutions
                </h2>
              </div>
              <div className="right-area">
                <p className="disc">
                  We provide integrated solutions in Recruitment, HR Consulting, and Training &amp; Development, enabling businesses to build stronger teams and achieve their organizational goals.
                </p>
                <a href="#contact" className="btn-line">
                  <span>Discuss Your Needs</span> <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--10">
          {services.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="single-service-style-one">
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <a href="#contact">
                  <h5 className="title">{item.title}</h5>
                </a>
                <p className="disc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-img">
        <img src="/assets/images/service/13.svg" alt="" />
      </div>
    </div>
  )
}
