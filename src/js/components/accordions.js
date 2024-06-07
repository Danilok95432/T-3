const footerAccordions = document.querySelectorAll('.footer-list')

if (footerAccordions) {
  if (window.screen.width < 768) {
    footerAccordions.forEach((item) => item.classList.add('main-accordion'))
  } else {
    footerAccordions.forEach((item) => item.classList.delete('main-accordion'))
  }
}

const accordions = document.querySelectorAll('.main-accordion')

if (accordions) {
  accordions.forEach((accordionEl) => {
    accordionEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('accordion-btn')) {
        const parentEl = e.target.closest('.accordion-el')
        const accordionContent = parentEl.querySelector('.accordion-content')
        const contentHeight = accordionContent.scrollHeight
        if (parentEl.classList.contains('_active')) {
          accordionContent.style.height = '0'
          parentEl.classList.remove('_active')
        } else {
          accordionContent.style.height = `${contentHeight + 30}px`
          parentEl.classList.add('_active')
        }
      }
    })
  })
}
