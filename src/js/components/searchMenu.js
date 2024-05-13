const mainMenu = document.querySelector('.main-menu')

if (mainMenu) {
  const searchBtns = mainMenu.querySelectorAll('.main-menu__nav-search')
  const closeSearchBtns = mainMenu.querySelectorAll(
    '.search-form__search-close',
  )

  searchBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      mainMenu.classList.add('_search-active')
    })
  })

  closeSearchBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      mainMenu.classList.remove('_search-active')
    })
  })
}
