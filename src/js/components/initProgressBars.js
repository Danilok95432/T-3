const progressBars = document.querySelectorAll('.progress-bar')

if (progressBars) {
  progressBars.forEach(progressEL => {
    const allElements = +progressEL.dataset.all
    let completedElements = +progressEL.dataset.completed

    const emptyArr = new Array(allElements).fill(null)


    const progressLine = emptyArr.map(el => {
      if (completedElements > 0) {
        completedElements--
        return '<div class="progress-bar__el _completed"></div>'
      } else return '<div class="progress-bar__el"></div>'

    })

    progressEL.innerHTML = progressLine.join('')


  })


}
