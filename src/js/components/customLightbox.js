import { showBigImgModal } from '../_functions'

const customLightbox = document.querySelector('.custom-lightbox')

if (customLightbox) {
  const lightboxImages = customLightbox.querySelectorAll('img')

  lightboxImages?.forEach((imgEl) => {
    imgEl.addEventListener('click', (e) => {
      showBigImgModal(e.target.src)
    })
  })
}
