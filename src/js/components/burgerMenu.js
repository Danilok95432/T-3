import {body} from '../_vars'

const burgerContainer = document.querySelector('.burger-container')


if (burgerContainer) {
  const burgerBtn = burgerContainer.querySelector('.burger-btn')

  burgerBtn.addEventListener('click', (e) => {
    burgerContainer.classList.toggle('_burger-active')
    body.classList.toggle('_block')
  })
}
