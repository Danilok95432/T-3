// Обрезка длинного текста на определенную длину
import { bigImgModal, infoModal, modalOverlay } from './_vars'

const cutString = (stringArray, stringLength) => {
  stringArray.forEach((str) => {
    let cutLength = 0
    stringLength ? (cutLength = stringLength) : (cutLength = +str.dataset.shear)

    if (cutLength && cutLength < str.textContent.length) {
      str.textContent = `${str.textContent.substring(0, cutLength)}...`
    }
  })
}

// Функция показа модалки большой картинки

export const showBigImgModal = (path) => {
  bigImgModal.classList.add('big-img-modal_active')
  bigImgModal.querySelector('img').src = path
  modalOverlay.classList.add('_active')
  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('_active')
    bigImgModal.classList.remove('big-img-modal_active')
  })
}

// Обновление id в изменяемых списках
const updateChangeableListId = (changeableList) => {
  if (changeableList && changeableList.dataset.changeableId) {
    const changeableElements = Array.from(changeableList.children)
    changeableElements.forEach((el, i) => {
      const changeableId = i + 1

      const changeableAmount = el.querySelector('.changeable-amount')
      const changeableInput = el.querySelector('.changeable-input')

      if (changeableAmount) {
        changeableAmount.textContent = changeableId
      }

      if (changeableInput) {
        const input = changeableInput.querySelector('input')
        const inputLabel = changeableInput.querySelector('label')

        input.value = changeableId
        input.id = changeableId
        inputLabel.setAttribute('for', changeableId)
      }
    })
  }
}

// Блокировка/разблокировка добавления/удаления элементов в изменяемых списках при ограничении максимального количества

const limitationChangeableElements = (changeableList, addBtn) => {
  if (changeableList && addBtn && changeableList.dataset.maxElements) {
    const countMaxElements = +changeableList.dataset.maxElements

    if (changeableList.children.length >= countMaxElements) {
      addBtn.classList.add('hidden')
    } else {
      addBtn.classList.remove('hidden')
    }
  }
}

// Фунцкия отправки fetch запросов
async function sendData(data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}

//Сбор данных форм

export const serializeForm = (formNode) => {
  return new FormData(formNode)
}

// Преобразование formData в объект
export const formToObj = (formData) => {
  return Array.from(formData.entries()).reduce(
    (memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }),
    {},
  )
}

// показ/скрытие модалки ошибки

if (infoModal) {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }
  })
}
const showInfoModal = (responseText) => {
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}

export {
  cutString,
  sendData,
  showInfoModal,
  updateChangeableListId,
  limitationChangeableElements,
}

//Прокрутка вверх

const scrollBtn = document.querySelector('#scrollTop')

if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollBy({
      top: -99999,
      behavior: 'smooth',
    })
  })
}
// функция установки определенных option в контекстные селекты
export const setContextOptions = (value, contentSelect, stateOptions) => {
  const filteredOptions = stateOptions.filter(
    (optEl) => optEl.dataset.context === value,
  )
  contentSelect.innerHTML = ''
  filteredOptions?.forEach((filEl) => {
    contentSelect.append(filEl)
  })
}
