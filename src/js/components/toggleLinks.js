const toggleLinks = document.querySelectorAll('.toggle-link')


if (toggleLinks) {
  toggleLinks.forEach(link => {
    const nextBtn = link.querySelector('.toggle-link__next-btn')
    const backBtn = link.querySelector('.toggle-link__back-btn')

    nextBtn.addEventListener('click', (e) => {
      link.classList.add('_active')
    })
    backBtn.addEventListener('click', (e) => {
      link.classList.remove('_active')
    })
  })
}
