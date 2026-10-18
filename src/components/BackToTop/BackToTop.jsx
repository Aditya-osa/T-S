import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [offset, setOffset] = useState(307.919)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 307.919 : 0
      setOffset(307.919 - progress)
      setIsVisible(scrollTop > 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      style={{ cursor: 'pointer' }}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: 'stroke-dashoffset 10ms linear 0s',
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: `${offset}`,
          }}
        ></path>
      </svg>
    </div>
  )
}
