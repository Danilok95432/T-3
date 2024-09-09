import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'
import { activateConfirmBtns } from './confirmBtns'

const studentsListTable = document.querySelector(
  '.lkp-create-students-list-page__table',
)

if (studentsListTable) {
  const studentForm = document.querySelector(
    '.lkp-create-students-list-page__student-form',
  )
  studentForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const objData = formToObj(data)
    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, studentForm.action)
      const finishedResponse = await response.json()

      const { status, errortext, student } = finishedResponse
      if (status === 'ok') {
        studentsListTable.insertAdjacentHTML('beforeend', student)
        activateConfirmBtns(studentsListTable.lastElementChild)
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  })
}
