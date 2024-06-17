import IMask from 'imask'
import Inputmask from 'inputmask'

const initAllMasks = () => {
  // Маски для номеров
  const inputsNumMask = document.querySelectorAll('.number-mask')
  if (inputsNumMask) {
    inputsNumMask.forEach((element) => {
      IMask(element, {
        mask: 'num',
        blocks: {
          num: {
            mask: Number,
            thousandsSeparator: ' ',
          },
        },
      })
    })
  }

  // Основные маски с передачей шаблона в data-атрибут mask-template
  const inputsMainMask = document.querySelectorAll('.main-mask')
  if (inputsMainMask) {
    inputsMainMask.forEach((element) => {
      const maskTemplate = element.dataset.maskTemplate
      IMask(element, {
        mask: maskTemplate,
      })
    })
  }

  const initDateInputMasks = () => {
    const dateInputMasks = document.querySelectorAll('.date-mask')

    if (dateInputMasks) {
      dateInputMasks.forEach((el) => {
        Inputmask({
          alias: 'datetime',
          inputFormat: 'dd.mm.yyyy',
          clearIncomplete: true,
          showMaskOnHover: false,
          showMaskOnFocus: false,
        }).mask(el)
      })
    }
  }

  initDateInputMasks()
}

initAllMasks()

export { initAllMasks }
