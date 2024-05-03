import {formToObj, sendData, serializeForm, showInfoModal} from "../_functions";

const lectureForm = document.querySelector('.lecture-page__form')

if (lectureForm) {
  const lectureSubmitBtn = lectureForm.querySelector('.lecture-page__form-btn-submit')

  const lectureFormScript = lectureSubmitBtn.dataset.url
  const lectureTaskId = lectureSubmitBtn.dataset.taskId

  lectureForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const objData = formToObj(data)
    const allData = {
      ...objData,
      id_task: lectureTaskId
    }
    const jsonData = JSON.stringify(allData)

    try {
      const response = await sendData(jsonData, lectureFormScript)
      const finishedResponse = await response.json()

      const {status, errortext} = finishedResponse
      if (status === 'ok') {
        showInfoModal('Отправлено')
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal("Во время выполнения запроса произошла ошибка")
      console.error(err)
    }
  })
}
