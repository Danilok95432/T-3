const profileDataPage = document.querySelector('.profile-teacher-page')

if (profileDataPage) {
  const editBtn = profileDataPage.querySelector('.profile-data .edit-btn')
  const editableBlock = profileDataPage.querySelector('.profile-data')
  const disabledElements = profileDataPage.querySelectorAll('.profile-form__disabled')
  const cancelBtn = profileDataPage.querySelector('.profile-form__btn-cancel')

  editBtn.addEventListener('click', (e) => {
    e.preventDefault()
    editableBlock.classList.add('_edit-active')
    disabledElements.forEach(elem=> elem.disabled = false)
  })

  cancelBtn.addEventListener('click', ()=> {
    editableBlock.classList.remove('_edit-active')
    disabledElements.forEach(elem=> elem.disabled= true)
  } )

}
