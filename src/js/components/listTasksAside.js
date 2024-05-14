const listTasksAsideWrapper = document.querySelector('.list-tasks-aside-wrapper')
const closeAsideWrapperButton = document.querySelector('.close-aside-wrapper-button')
const listTasks = document.querySelector('.tasks__list')



if (listTasksAsideWrapper) {
  const openBtns = listTasks.querySelectorAll('.tasks__btn-check')

  if(openBtns) {
    openBtns.forEach(item => {
      item.addEventListener('click', () => {
        listTasksAsideWrapper.classList.add('_active')
      })
    })
  }

  if(closeAsideWrapperButton) {
    closeAsideWrapperButton.addEventListener('click', () => {
      listTasksAsideWrapper.classList.remove('_active')
    })
  }
}  
