const homeLangSwitcher = document.querySelector('.home-lang-switcher')

if (homeLangSwitcher) {
  const switcherBtns = homeLangSwitcher.querySelectorAll('button')

  switcherBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      switcherBtns.forEach((el) => el.classList.remove('_active'))
      e.target.classList.add('_active')
    })
  })
}
