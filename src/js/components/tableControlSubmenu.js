const tableControls = document.querySelectorAll('.table-control-submenu')

if (tableControls && window.screen.width <= 850) {
  const mobileTableControl = document.querySelector('.mobile-table-control')

  const mobileControlLink = mobileTableControl?.querySelector('a._link')
  const mobileControlRemove = mobileTableControl?.querySelector('a._remove')

  tableControls.forEach((control) => {
    control.addEventListener('click', (e) => {
      e.preventDefault()
      const currentLink = e.currentTarget?.querySelector('a._link')
      const currentRemove = e.currentTarget?.querySelector('a._remove')
      if (mobileControlLink && currentLink) {
        mobileControlLink.href = currentLink.href
      }
      if (mobileControlRemove && currentRemove) {
        mobileControlRemove.href = currentRemove.href
      }
      mobileTableControl.classList.add('_active')
    })
  })

  mobileTableControl.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      mobileTableControl.classList.remove('_active')
    }
  })
}
