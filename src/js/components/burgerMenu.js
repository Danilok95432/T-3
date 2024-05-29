import { body } from '../_vars'

const burgerContainer = document.querySelector('.burger-container')

if (burgerContainer) {
  const burgerBtn = burgerContainer.querySelector('.burger-btn')

  burgerBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    burgerContainer.classList.toggle('_burger-active')
    body.classList.toggle('_block')
  })
}
