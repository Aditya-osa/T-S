import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'Recruitment & Talent Acquisition',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const faqs = [
    {
      question: 'What are your recruitment fees and commercial terms?',
      answer: "The recruitment fee is 8.33% of the selected candidate's annual CTC. Payment is due within 30 days of the candidate joining the client organization.",
    },
    {
      question: 'What is your candidate replacement policy?',
      answer: 'One free replacement is offered if the selected candidate leaves the client organization before completing 90 days, subject to the agreed service terms.',
    },
    {
      question: 'What core consulting services does T&S provide?',
      answer: 'We provide integrated end-to-end solutions in Recruitment & Talent Acquisition, HR Systems & Consulting, and Customized Employee Training & Development.',
    },
    {
      question: 'Which industries does T&S Consulting Group specialize in?',
      answer: 'We support 15+ diverse industries including Manufacturing, IT, Engineering & Construction, Pharma & Healthcare, FMCG, Automation, Chemicals, and more.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        serviceRequired: 'Recruitment & Talent Acquisition',
        message: '',
      })
    }, 4000)
  }

  return (
    <div id="faq" className="rts-faq-area-start rts-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pr--50 pr_lg--20 pr_md--10 pr_sm--10">
            <div className="faq-left-area-main">
              <div className="title-left-wrapper">
                <span className="pre">LET'S CONNECT</span>
                <h2 className="title rts-text-anime-style-1 faq-nowrap-title" style={{ whiteSpace: 'nowrap' }}>
                  Everything You Need to Build a Stronger Team
                </h2>
              </div>
              <p className="disc">
                Looking for the right talent, better HR processes, or effective employee training? Let's discuss your requirements and find the right solution for your business.
              </p>

              {/* Direct Contact Details */}
              <div className="contact-details-box mt--20 mb--30" style={{ background: '#f8f9fa', padding: '18px 20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#333' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                  <strong>Phone:</strong> <a href="tel:9137878303" style={{ color: '#333' }}>9137878303</a> / <a href="tel:9967320335" style={{ color: '#333' }}>9967320335</a>
                </p>
                <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#333' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                  <strong>Email:</strong> <a href="mailto:info@tnsconsulting.in" style={{ color: '#333' }}>info@tnsconsulting.in</a>
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
                  <i className="fa-solid fa-globe" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                  <strong>Website:</strong> <a href="https://www.tnsconsulting.in" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>www.tnsconsulting.in</a>
                </p>
              </div>

              <div className="accordion-faq-one">
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index
                    return (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={isOpen}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                          style={{
                            display: isOpen ? 'block' : 'none',
                          }}
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6" id="contact" style={{ scrollMarginTop: '110px' }}>
            <div className="contact-form-style-one" style={{ marginTop: '83px' }}>
              <h4 className="title">Let's Talk</h4>
              {isSubmitted && (
                <div className="alert alert-success mt-2 mb-3" role="alert">
                  Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="single-input-wrapper">
                  <div className="single-input">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="single-input">
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="single-input-wrapper">
                  <div className="single-input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="single-input">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="single-input mb--20" style={{ marginBottom: '20px' }}>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '55px',
                      padding: '0 20px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      background: '#fff',
                      color: '#495057',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                  >
                    <option value="Recruitment & Talent Acquisition">Recruitment &amp; Talent Acquisition</option>
                    <option value="HR Consulting">HR Consulting</option>
                    <option value="Training & Development">Training &amp; Development</option>
                    <option value="Comprehensive HR Solutions">Comprehensive HR Solutions</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell Us About Your Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button className="rts-btn btn-primary" type="submit">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
