import { sendData, showInfoModal } from '../_functions'

const autocompleteInputs = document.querySelectorAll('.autocomplete-input')

const renderSuggestions = (suggestions, inputTxt, inputVal, popup) => {
  if (suggestions.length > 0) {
    suggestions.forEach((item) => {
      const div = document.createElement('div')
      div.textContent = item.text
      div.className = 'autocomplete-input__popup-item'
      div.addEventListener('click', () => {
        inputVal.value = item.value
        inputTxt.value = item.text
        popup.style.display = 'none'
      })
      popup.appendChild(div)
    })
    popup.style.display = 'block'
  } else {
    popup.style.display = 'none'
  }
}

if (autocompleteInputs) {
  autocompleteInputs.forEach((inputEl) => {
    const autoFieldTxt = inputEl.querySelector('input.autocomplete-input__text')
    const autoFieldVal = inputEl.querySelector(
      'input.autocomplete-input__value',
    )
    const autoPopup = inputEl.querySelector('.autocomplete-input__popup')
    const autoScript = inputEl.dataset.script

    autoFieldTxt?.addEventListener('input', async (e) => {
      const query = e.currentTarget.value
      if (query.length < 3) {
        autoPopup.style.display = 'none'
        return
      }

      autoPopup.innerHTML = ''
      try {
        const response = await sendData(JSON.stringify(query), autoScript)
        const finishedResponse = await response.json()
        const { status, errortext, suggestions } = finishedResponse
        if (status === 'ok') {
          renderSuggestions(suggestions, autoFieldTxt, autoFieldVal, autoPopup)
        } else {
          showInfoModal(errortext)
        }
      } catch (err) {
        showInfoModal('Во время выполнения запроса произошла ошибка')
        console.error(err)
      }
    })

    document.addEventListener('click', (event) => {
      if (!inputEl.contains(event.target)) {
        autoPopup.style.display = 'none'
      }
    })
  })
}
