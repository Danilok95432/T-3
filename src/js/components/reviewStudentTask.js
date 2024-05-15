import {
    formToObj,
    sendData,
    serializeForm,
    showInfoModal,
  } from '../_functions'


const acceptTaskButton = document.querySelector('.accept-task-button')
const rejectTaskButton = document.querySelector('.reject-task-button')
const reviewTaskForm = document.querySelector('.review-task-form')


const sendReview =  (button, isAccept) => {
    button.addEventListener('click', async (e)  => {
        e.preventDefault()    
        const data = serializeForm(reviewTaskForm)    
        const objData = formToObj(data)    
        const newObj = {
            ...objData,
            isAccept: isAccept,    
            add: button.dataset.add        
        }    
        const jsonData = JSON.stringify(newObj)

        try {
            const response = await sendData(jsonData, button.dataset.url)
            const finishedResponse = await response.json()
      
            const { status, errortext, message } = finishedResponse
            if (status === 'ok') {
              showInfoModal(message)  
              // location.reload()
            } else {
              showInfoModal(errortext)
            }
        } catch (err) {
            showInfoModal('Во время выполнения запроса произошла ошибка')
            console.error(err)
        } 
    })
}

if (acceptTaskButton) {
    sendReview(acceptTaskButton)
}

if (rejectTaskButton) {
    sendReview(rejectTaskButton)
}










