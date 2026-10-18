export default function Blog() {
  const blogs = [
    {
      img: '/assets/images/blog/01.webp',
      category: 'Talent Acquisition',
      title: 'How to Hire the Right Talent for Your Organization',
      disc: 'Discover practical ways to improve candidate selection and build stronger teams.',
    },
    {
      img: '/assets/images/blog/02.webp',
      category: 'HR Systems',
      title: 'Why Every Growing Business Needs an Effective HR Process',
      disc: 'Learn how structured HR practices can improve productivity and employee experience.',
    },
    {
      img: '/assets/images/blog/03.webp',
      category: 'People Development',
      title: 'The Importance of Employee Training and Development',
      disc: 'Explore how continuous learning supports employee growth and business performance.',
    },
  ]

  return (
    <div id="blog" className="rts-blog-area rts-section-gap bg_light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-center-wrapper">
              <span className="pre">INSIGHTS &amp; RESOURCES</span>
              <h2 className="title rts-text-anime-style-1">Practical Insights for Better Business</h2>
              <p className="disc">
                Discover actionable perspectives on talent strategy, structured HR processes, and continuous employee development.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--30">
          {blogs.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-style-one">
                <a href="#blog" className="thumbnail-blog">
                  <img src={item.img} alt="blog" />
                </a>
                <div className="inner-content-blog">
                  <span>{item.category}</span>
                  <a href="#blog">
                    <h5 className="title">{item.title}</h5>
                  </a>
                  <p className="disc" style={{ fontSize: '14px', color: '#666', marginTop: '8px', marginBottom: '12px', lineHeight: '1.5' }}>
                    {item.disc}
                  </p>
                  <a href="#contact" className="btn-line">
                    <span>Read Article</span> <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt--40">
          <div className="col-12 text-center">
            <a href="#contact" className="rts-btn btn-primary" style={{ display: 'inline-flex' }}>
              Explore All Insights
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
