const timeInput = document.querySelector('.time')
const startBtn = document.querySelector('.start-time')
const result = document.querySelector('.result')

startBtn.addEventListener('click' , ()=>{

    let timer = timeInput.value
    result.textContent = timer

     const interval = setInterval(() => {
        timer -= 1
        result.textContent = timer
        if (timer <= 0) {
            clearInterval(interval)
            result.textContent = 'SEN PEYSERSEN'
        }
    }, 1000);

})