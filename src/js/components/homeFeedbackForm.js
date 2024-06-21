import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'

const feedbackForm = document.querySelector('.home-page .feedback__form')

if (feedbackForm) {
  const feedbackScript = feedbackForm.action
  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(feedbackForm)
    const objData = formToObj(data)

    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, feedbackScript)
      const finishedResponse = await response.json()

      const { status, errortext, message } = finishedResponse

      if (status === 'ok') {
        feedbackForm.reset()
        showInfoModal(message)
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  })
}
