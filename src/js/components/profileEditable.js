import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'

const editableBlock = document.querySelector('.profile-data')

if (editableBlock) {
  //логика переключения режимов редактирования
  const editBtn = editableBlock.querySelector('.edit-btn')
  const disabledElements = editableBlock.querySelectorAll(
    '.profile-form__disabled',
  )
  const cancelBtn = editableBlock.querySelector('.profile-form__btn-cancel')

  editBtn.addEventListener('click', (e) => {
    e.preventDefault()
    editableBlock.classList.add('_edit-active')
    disabledElements.forEach((elem) => (elem.disabled = false))
  })

  cancelBtn.addEventListener('click', () => {
    editableBlock.classList.remove('_edit-active')
    disabledElements.forEach((elem) => (elem.disabled = true))
  })

  // логика отправки данных при сохранении по data-url кнопки

  const profileForm = editableBlock.querySelector('form.profile-form')
  const profileFormSaveBtn = editableBlock.querySelector(
    '.profile-form__btn-save',
  )
  const profileFormScript = profileFormSaveBtn.dataset.url
  profileForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const objData = formToObj(data)
    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, profileFormScript)
      const finishedResponse = await response.json()

      const { status, errortext } = finishedResponse
      if (status === 'ok') {
        location.reload()
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  })
}
