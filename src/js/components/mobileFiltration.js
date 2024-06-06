import { body } from '../_vars'

const mobileFiltration = document.querySelector('.mobile-filtration')

if (mobileFiltration) {
  const openFilterBtn = mobileFiltration.querySelector(
    '.mobile-filtration__filter-btn',
  )
  const closeFilterBtn = mobileFiltration.querySelector(
    '.mobile-filter-form__close-btn',
  )

  const filterForm = mobileFiltration.querySelector('.mobile-filter-form')

  openFilterBtn.addEventListener('click', (e) => {
    e.preventDefault()
    filterForm.classList.add('_active')
    body.classList.add('_block')
  })
  closeFilterBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('_block')
    filterForm.classList.remove('_active')
  })
}
