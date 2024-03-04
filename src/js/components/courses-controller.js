const coursesContent = document.querySelector('.courses__content')

const showCurrentCourse = (activeBtn) => {
  const courseItems = coursesContent.querySelectorAll('.courses__content-item')
  const activeCourseNumber = activeBtn.dataset.active


  courseItems.forEach((courseItem) => {
    if (activeCourseNumber === courseItem.dataset.course) {
      courseItem.style.display = 'block'
    } else {
      courseItem.style.display = 'none'
    }
  })
}

if (coursesContent) {
  const controllerBtns = coursesContent.querySelectorAll('.courses__content-controllers button')
  showCurrentCourse(coursesContent.querySelector('button._active'))

  controllerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      controllerBtns.forEach(el => el.classList.remove('_active'))
      e.target.classList.add('_active')
      showCurrentCourse(e.target)
    })
  })

}
