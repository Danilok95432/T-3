const confirmBtns = document.querySelectorAll('[data-btn="confirm"]')

if (confirmBtns) {
  confirmBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const hrefLink = e.target?.href
      const customConfirmText = e.currentTarget?.dataset.confirm

      let isConfirmed = confirm(
        customConfirmText ?? 'Вы действительно хотите удалить запись?',
      )
      if (isConfirmed && hrefLink) {
        location.href = hrefLink
      }
    })
  })
}
