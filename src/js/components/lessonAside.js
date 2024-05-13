const lessonAsideWrapper = document.querySelector('.lesson-aside-wrapper')

if (lessonAsideWrapper) {
  const openBtn = lessonAsideWrapper.querySelector('.lesson-aside__open-btn')
  const closeBtns = lessonAsideWrapper.querySelectorAll(
    '.lesson-aside__collapse-btn',
  )

  openBtn.addEventListener('click', () => {
    lessonAsideWrapper.classList.add('_aside-active')
  })

  closeBtns.forEach((btn) =>
    btn.addEventListener('click', () => {
      lessonAsideWrapper.classList.remove('_aside-active')
    }),
  )
}
