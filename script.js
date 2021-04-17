const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    
    const xInner = x - buttonLeft
    const yInner = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInner + 'px'
    circle.style.left = xInner + 'px'

    this.appendChild(circle)
    // karena di append, harus diremove lagi

    setTimeout(() =>circle.remove(),500)
    
  })
})
