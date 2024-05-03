import {formToObj, sendData, serializeForm, showInfoModal} from "../_functions";

const signForm = document.querySelector('form.payment-page__content-sign')

if (signForm) {
  const signSubmitBtn = signForm.querySelector('.payment-page__submit-btn')

  const signFormScript = signSubmitBtn.dataset.url
  const signInfo = signSubmitBtn.dataset.info

  signForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const objData = formToObj(data)
    const signInfoData = JSON.parse(signInfo)
    const allData = {
      ...objData,
      ...signInfoData
    }
    const jsonData = JSON.stringify(allData)

    try {
      const response = await sendData(jsonData, signFormScript)
      const finishedResponse = await response.json()

      const {status, errortext} = finishedResponse

      switch (status) {
        case 'ok':
          location.reload()
          break
        case 'free':
          window.location.href = 'courses-student.html'
          break
        case 'profile':
          showInfoModal('Заполните профиль')
          break
        case 'no-promo':
          showInfoModal('Промокод не найден')
          break
        case 'used-promo':
          showInfoModal('Промокод уже использован')
          break
        case 'period-promo':
          showInfoModal('Период действия промокода не наступил или закончился')
          break
        default :
          showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal("Во время выполнения запроса произошла ошибка")
      console.error(err)
    }
  })
}
