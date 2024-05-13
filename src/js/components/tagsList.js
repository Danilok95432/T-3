const tagsList = document.querySelector('.tags-list')

if (tagsList) {
  const visibleCount = +tagsList.dataset.tagsCount
  const collapsedBtn = tagsList.querySelector('.collapse-controller')
  const tags = tagsList.querySelectorAll('li:not(.collapse-controller)')
  if (tagsList.classList.contains('_collapsed'))
    tags.forEach((el, idx) => {
      if (idx >= visibleCount) {
        el.classList.add('hidden')
      }
    })
  collapsedBtn.addEventListener('click', () => {
    tagsList.classList.toggle('_collapsed')

    if (tagsList.classList.contains('_collapsed')) {
      tags.forEach((el, idx) => {
        if (idx >= visibleCount) {
          el.classList.add('hidden')
        }
      })
    } else {
      tags.forEach((el) => el.classList.remove('hidden'))
    }
  })
}
