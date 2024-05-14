const promptTitles = document.querySelectorAll('.prompt-title')

if (promptTitles) {
  promptTitles.forEach((el) => {
    const promptContent = el.querySelector('.prompt-title__content')
    const promptBtn = el.querySelector('.prompt-title__button')
    window.addEventListener('click', (e) => {
      if (
        e.target !== promptContent &&
        e.target !== promptBtn &&
        !e.target.closest('.prompt-title__content')
      ) {
        promptContent.classList.remove('_active')
      }
    })
    promptBtn.addEventListener('click', () => {
      promptContent.classList.toggle('_active')
    })
  })
}
