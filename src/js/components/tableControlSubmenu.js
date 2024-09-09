const mobileTableControl = document.querySelector('.mobile-table-control')

if (mobileTableControl && window.screen.width <= 850) {
  const mobileControlLink = mobileTableControl?.querySelector('a._link')
  const mobileControlRemove = mobileTableControl?.querySelector('a._remove')

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('table-control-submenu__btn')) {
      const currentSubmenu = e.target.closest('.table-control-submenu')
      const currentLink = currentSubmenu?.querySelector('a._link')
      const currentRemove = currentSubmenu?.querySelector('a._remove')
      if (mobileControlLink && currentLink) {
        mobileControlLink.href = currentLink.href
      }
      if (mobileControlRemove && currentRemove) {
        mobileControlRemove.href = currentRemove.href
      }
      mobileTableControl.classList.add('_active')
    }
  })
  mobileTableControl.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      mobileTableControl.classList.remove('_active')
    }
  })
}
