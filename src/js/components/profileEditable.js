const profileDataPage = document.querySelector('.profile-data-page')

if (profileDataPage) {
  const editBtn = profileDataPage.querySelector('.profile-data .edit-btn')
  const editableBlock = profileDataPage.querySelector('.profile-data')

  editBtn.addEventListener('click', (e) => {
    e.preventDefault()
    editableBlock.classList.add('_edit-active')
  })

}
