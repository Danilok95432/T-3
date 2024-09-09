export const activateConfirmBtns = (targetWrapper) => {
  const confirmBtns = targetWrapper.querySelectorAll('[data-btn="confirm"]')

  if (confirmBtns?.length) {
    confirmBtns?.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const hrefLink = e.target?.href
        const customConfirmText = e.currentTarget?.dataset.confirm

        let isConfirmed = confirm(
          customConfirmText ?? 'Вы действительно хотите удалить запись?',
        )
        if (hrefLink && isConfirmed) {
          window.location.href = hrefLink
        }
      })
    })
  }
}

activateConfirmBtns(document)
