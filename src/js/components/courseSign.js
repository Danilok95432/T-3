import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'

const signForm = document.querySelector('form.payment-page__content-sign')

if (signForm) {
  // Логика отправки формы нажатием "Подписаться"
  const signSubmitBtn = signForm.querySelector('.payment-page__submit-btn')

  const signFormScript = signSubmitBtn.dataset.url

  signForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const objData = formToObj(data)

    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, signFormScript)
      const finishedResponse = await response.json()

      const { status, errortext, url } = finishedResponse

      if (status === 'ok') {
        window.location.replace(url)
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  })

  // Логика проверки промокода нажатием "Проверить"

  const checkPromoBtn = signForm.querySelector('.sign-form__promo-btn')
  const checkPromoScript = checkPromoBtn.dataset.url

  const totalSum = signForm.querySelector('.sign-form__total-sum')
  const promoStatus = signForm.querySelector('.sign-form__promo-status')

  checkPromoBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const data = serializeForm(signForm)
    const objData = formToObj(data)

    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, checkPromoScript)
      const finishedResponse = await response.json()

      const { status, errortext, promo_status, sum } = finishedResponse

      if (status === 'ok') {
        if (promo_status === 'access') {
          totalSum.textContent = sum
          promoStatus.classList.remove('_invalid')
          promoStatus.classList.add('_access')
        } else {
          promoStatus.classList.add('_invalid')
          promoStatus.classList.remove('_access')
        }
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  })

  // Логика смены селекта и установки новой суммы исходя из значения
  const versionSelect = signForm.querySelector('.sign-form__version-select')
  const deliverySelect = signForm.querySelector('.sign-form__delivery-select')

  const handleSubmitSelect = async () => {
    const data = serializeForm(signForm)
    const objData = formToObj(data)

    const jsonData = JSON.stringify(objData)

    try {
      const response = await sendData(jsonData, checkPromoScript)
      const finishedResponse = await response.json()

      const { status, errortext, sum } = finishedResponse

      if (status === 'ok') {
        totalSum.textContent = sum
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  }

  versionSelect.addEventListener('choice', handleSubmitSelect)
  deliverySelect.addEventListener('choice', handleSubmitSelect)
}
