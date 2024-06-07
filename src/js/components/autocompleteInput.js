import { sendData, showInfoModal } from '../_functions'

const autocompleteInputs = document.querySelectorAll('.autocomplete-input')

if (autocompleteInputs) {
  autocompleteInputs.forEach((inputEl) => {
    const autoField = inputEl.querySelector('input')
    const autoPopup = inputEl.querySelector('.autocomplete-input__popup')
    const autoScript = inputEl.dataset.script

    autoField.addEventListener('input', async (e) => {
      const query = e.currentTarget.value
      if (query.length < 3) return

      try {
        const response = await sendData(JSON.stringify(query), autoScript)
        const finishedResponse = await response.json()
        const { status, errortext, suggestions } = finishedResponse
        if (status === 'ok') {
          console.log(suggestions)
        } else {
          showInfoModal(errortext)
        }
      } catch (err) {
        showInfoModal('Во время выполнения запроса произошла ошибка')
        console.error(err)
      }
    })
  })
}
