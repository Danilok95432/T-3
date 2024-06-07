import { sendData, showInfoModal } from '../_functions'

const autocompleteInputs = document.querySelectorAll('.autocomplete-input')

const renderSuggestions = (suggestions, input, popup) => {
  if (suggestions.length > 0) {
    suggestions.forEach((item) => {
      const div = document.createElement('div')
      div.textContent = item
      div.className = 'autocomplete-input__popup-item'
      div.addEventListener('click', () => {
        input.value = item
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
    const autoField = inputEl.querySelector('input')
    const autoPopup = inputEl.querySelector('.autocomplete-input__popup')
    const autoScript = inputEl.dataset.script

    autoField.addEventListener('input', async (e) => {
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
          renderSuggestions(suggestions, autoField, autoPopup)
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
