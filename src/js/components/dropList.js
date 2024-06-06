const dropLists = document.querySelectorAll('.drop-list')

if (dropLists) {
  dropLists.forEach((list) => {
    const listElements = list.querySelectorAll('.drop-list__item')
    const previewCount = +list.dataset.previewCount
    const toggleBtn = list.querySelector('.drop-list__toggle-btn')

    if (listElements.length <= previewCount) {
      toggleBtn.classList.add('hidden')
    }
    const collapseList = () => {
      toggleBtn.textContent = `Еще ${listElements.length - previewCount}`
      toggleBtn.classList.remove('_expanded')

      listElements?.forEach((listEl, i) => {
        if (previewCount >= i + 1) {
          listEl.classList.add('_visible')
        } else {
          listEl.classList.remove('_visible')
        }
      })
    }
    const expandList = () => {
      toggleBtn.textContent = `Свернуть`
      toggleBtn.classList.add('_expanded')
      listElements?.forEach((listEl) => listEl.classList.add('_visible'))
    }

    collapseList()

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault()
      if (toggleBtn.classList.contains('_expanded')) {
        collapseList()
      } else {
        expandList()
      }
    })
  })
}
