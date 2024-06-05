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
  })
  closeFilterBtn.addEventListener('click', (e) => {
    e.preventDefault()
    filterForm.classList.remove('_active')
  })
}
