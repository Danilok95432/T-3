const taskImage = document.querySelectorAll('.task-image')
const fullScreenImageContainer =  document.querySelector('.fullscreen-image-container')

if(taskImage && fullScreenImageContainer) {
    taskImage.forEach(item => {
        item.addEventListener('click', () => {
            let clone = item.cloneNode();
            clone.className = '';
            fullScreenImageContainer.innerHTML = '';
            fullScreenImageContainer.appendChild(clone);
            fullScreenImageContainer.classList.add('show');
        })
    })
}

if(fullScreenImageContainer) {
    fullScreenImageContainer.addEventListener('click', () => {
        fullScreenImageContainer.classList.remove('show')
    })
}

