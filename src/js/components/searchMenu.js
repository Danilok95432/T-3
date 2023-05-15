const mainMenu = document.querySelector('.main-menu')

if (mainMenu) {
  const searchBtn = mainMenu.querySelector('.main-menu__nav-search')
  const closeSearchBtn = mainMenu.querySelector('.search-form__search-close')
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    mainMenu.classList.add('_search-active')
  })
  closeSearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    mainMenu.classList.remove('_search-active')
  })
}
