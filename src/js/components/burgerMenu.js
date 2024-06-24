import { body } from '../_vars'

const burgerMenu = document.querySelector('.burger-menu')

if (burgerMenu) {
  const burgerOpenBtn = document.querySelector('.burger-btn._open')
  const burgerCloseBtn = document.querySelector('.burger-btn._close')

  burgerOpenBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    burgerMenu.classList.add('_active')
    body.classList.add('_block')
  })
  burgerCloseBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('_active')
    body.classList.remove('_block')
  })
}
