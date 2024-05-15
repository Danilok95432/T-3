import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'

const acceptTaskButton = document.querySelector('.accept-task-button')
const rejectTaskButton = document.querySelector('.reject-task-button')
const reviewTaskForm = document.querySelector('.review-task-form')

if (reviewTaskForm) {
  const sendReview = async (e) => {
    e.preventDefault()
    const data = serializeForm(reviewTaskForm)
    const objData = formToObj(data)
    const resultObj = {
      ...objData,
      isAccept: e.target.classList.contains('accept-task-button'),
      add: e.target.dataset.add,
    }
    const jsonData = JSON.stringify(resultObj)

    try {
      const response = await sendData(jsonData, e.target.dataset.url)
      const finishedResponse = await response.json()

      const { status, errortext, message } = finishedResponse
      if (status === 'ok') {
        showInfoModal(message)
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  }

  acceptTaskButton.addEventListener('click', sendReview)
  rejectTaskButton.addEventListener('click', sendReview)
}
