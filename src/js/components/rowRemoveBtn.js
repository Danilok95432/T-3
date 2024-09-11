import { sendData, showInfoModal } from '../_functions'

document.addEventListener('click', async (e) => {
  if (e.target.dataset.btn === 'remove-row') {
    const removeBtn = e.target
    const currentRow = removeBtn.closest('.flex-table__row')
    const rowId = currentRow.dataset.id
    const removeScript = removeBtn.dataset.script
    const confirmText = removeBtn.dataset.confirm
    e.preventDefault()

    let isConfirmed = confirm(
      confirmText ?? 'Вы действительно хотите удалить запись?',
    )
    if (!isConfirmed) return
    const data = {
      id: rowId,
    }
    const jsonData = JSON.stringify(data)

    try {
      const response = await sendData(jsonData, removeScript)
      const finishedResponse = await response.json()

      const { status, errortext } = finishedResponse
      if (status === 'ok') {
        currentRow.remove()
      } else {
        showInfoModal(errortext)
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.error(err)
    }
  }
})
