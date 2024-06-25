const burgerMenuList = document.querySelector('.burger-menu__list')

if (burgerMenuList) {
  burgerMenuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-link__next-btn')) {
      e.target.parentElement.classList.add('_active')
    }
    if (e.target.classList.contains('toggle-link__back-btn')) {
      e.target.closest('.toggle-link').classList.remove('_active')
    }
  })
}
