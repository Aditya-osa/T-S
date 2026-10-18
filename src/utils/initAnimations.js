/**
 * Digix Template Animations & Swiper Activations
 * Preserves 100% of the original Digix animations, SplitText, and Swipers.
 */

export function initAnimations() {
  if (typeof window === 'undefined') return;

  // 1. Swiper Banner (Hero)
  if (window.Swiper && document.querySelector('.mySwiper-banner-one')) {
    try {
      new window.Swiper('.mySwiper-banner-one', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        speed: 1500,
        navigation: {
          nextEl: '.mySwiper-banner-one .swiper-button-next',
          prevEl: '.mySwiper-banner-one .swiper-button-prev',
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1500: { slidesPerView: 1 },
          1300: { slidesPerView: 1 },
          991: { slidesPerView: 1, centeredSlides: false },
        },
      });
    } catch (e) {
      console.warn('Hero Swiper initialization warning:', e);
    }
  }

  // 2. Swiper Case Studies (Projects)
  if (window.Swiper && document.querySelector('.mySwiper-case-one')) {
    try {
      new window.Swiper('.mySwiper-case-one', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        pagination: {
          el: '.mySwiper-case-one .swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1500: { slidesPerView: 4 },
          1300: { slidesPerView: 4 },
          991: { slidesPerView: 3, centeredSlides: false },
          767: { slidesPerView: 2, centeredSlides: false },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
    } catch (e) {
      console.warn('Case Swiper initialization warning:', e);
    }
  }

  // 3. Swiper Team
  if (window.Swiper && document.querySelector('.mySwiper-team-one')) {
    try {
      new window.Swiper('.mySwiper-team-one', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.team-swiper-area .swiper-button-next',
          prevEl: '.team-swiper-area .swiper-button-prev',
        },
        pagination: {
          el: '.mySwiper-team-one .swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1500: { slidesPerView: 4 },
          1300: { slidesPerView: 4 },
          991: { slidesPerView: 3, centeredSlides: false },
          767: { slidesPerView: 2, centeredSlides: false },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
    } catch (e) {
      console.warn('Team Swiper initialization warning:', e);
    }
  }

  // 4. Swiper Testimonials (Original floating-div layout)
  if (window.Swiper && document.querySelector('.mySwiper-testimonails')) {
    try {
      new window.Swiper('.mySwiper-testimonails', {
        slidesPerView: 3.8,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.testimonials-left-one .swiper-button-next',
          prevEl: '.testimonials-left-one .swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1500: { slidesPerView: 3.5 },
          1300: { slidesPerView: 3 },
          991: { slidesPerView: 2, centeredSlides: false },
          767: { slidesPerView: 2, centeredSlides: false },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
    } catch (e) {
      console.warn('Testimonials Swiper initialization warning:', e);
    }
  }

  // 5. GSAP ScrollTrigger Section & Card Reveals
  if (window.gsap && window.ScrollTrigger) {
    try {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        // A. SplitText Headings (subtle fade & 14px upward movement)
        if (window.SplitText) {
          const animatedElements = document.querySelectorAll('.rts-text-anime-style-1');
          animatedElements.forEach((element) => {
            try {
              if (element.animation) {
                element.animation.progress(1).kill();
                if (element.split) element.split.revert();
              }
              element.split = new window.SplitText(element, {
                type: 'lines,words,chars',
                linesClass: 'split-line',
              });
              window.gsap.set(element, { perspective: 400 });
              window.gsap.set(element.split.chars, {
                opacity: 0,
                y: 14,
              });
              element.animation = window.gsap.to(element.split.chars, {
                scrollTrigger: {
                  trigger: element,
                  start: 'top 90%',
                  once: true,
                },
                y: 0,
                opacity: 1,
                duration: 0.65,
                ease: 'power2.out',
                stagger: 0.015,
              });
            } catch (innerErr) {
              console.warn('Element SplitText warning:', innerErr);
            }
          });
        }

        // B. Section Eyebrow Pre-titles (gentle fade up 12px)
        const preTitles = document.querySelectorAll('.title-left-wrapper span.pre, .title-center-wrapper span.pre');
        preTitles.forEach((pre) => {
          window.gsap.fromTo(
            pre,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: pre,
                start: 'top 92%',
                once: true,
              },
            }
          );
        });

        // C. Service Cards (subtle 16px stagger reveal)
        const serviceCards = document.querySelectorAll('.single-service-style-one');
        if (serviceCards.length > 0) {
          window.gsap.fromTo(
            serviceCards,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: serviceCards[0].parentElement,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        // D. Blog / Insights Cards (subtle 16px stagger reveal)
        const blogCards = document.querySelectorAll('.single-blog-style-one');
        if (blogCards.length > 0) {
          window.gsap.fromTo(
            blogCards,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: blogCards[0].parentElement,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        // E. Vision & Mission Card (gentle 18px fade up)
        const vmCard = document.querySelector('.vm-split-card');
        if (vmCard) {
          window.gsap.fromTo(
            vmCard,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: vmCard,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        // F. Key Section Image Thumbnails (gentle opacity transition)
        const featureImages = document.querySelectorAll('.about-area-inner-wrapper-thumbnail, .vision-left-main-image');
        featureImages.forEach((imgWrap) => {
          window.gsap.fromTo(
            imgWrap,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: imgWrap,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      }
    } catch (e) {
      console.warn('ScrollTrigger animation initialization warning:', e);
    }
  }

  // 6. Odometer trigger on scroll
  const handleOdometer = () => {
    const odoElements = document.querySelectorAll('.odometer');
    odoElements.forEach((el) => {
      if (el.classList.contains('odometer-triggered')) return;
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (inView) {
        const count = el.getAttribute('data-count') || '0';
        el.classList.add('odometer-triggered');
        if (window.Odometer) {
          new window.Odometer({ el, value: 0 }).update(count);
        } else {
          el.textContent = count;
        }
      }
    });
  };
  window.addEventListener('scroll', handleOdometer, { passive: true });
  handleOdometer();
}
