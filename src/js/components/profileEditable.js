const editableBlock = document.querySelector('.profile-data')

if (editableBlock) {
  const editBtn = editableBlock.querySelector('.edit-btn')
  const disabledElements = editableBlock.querySelectorAll('.profile-form__disabled')
  const cancelBtn = editableBlock.querySelector('.profile-form__btn-cancel')

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
