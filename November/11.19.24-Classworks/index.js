const nameInput = document.querySelector('.name')
const scoreInput = document.querySelector('.scores')
const submitBtn = document.querySelector('.submit')
const avarageBtn = document.querySelector('.avarage')
const result = document.querySelector('.result')
const form = document.querySelector('form')

let allScores = JSON.parse(localStorage.getItem('students'));

window.JSON.parse(localStorage.getItem('students'))

form.addEventListener('submit' , function(submit){
    submit.preventDefault()

    const scoreNperson ={
        id : Date.now(),
        name : nameInput.value,
        score : +scoreInput.value
    }

    allScores.push(scoreNperson)
    localStorage.setItem('students' , JSON.stringify(allScores))
    nameInput.value = '';
    scoreInput.value = '';
    console.log(allScores);
})

avarageBtn.addEventListener('click', function () {

     const scoreFinder =  allScores.find((score)=> score.score) 
     const score = []
     score.push(scoreFinder)
    if (score.length === 0) {
        result.textContent = 'hec bir qiymet yoxdu';
        return;
    }
    
    
    const totalScore = score.reduce((sum, entry) => sum + entry.score, 0);
    const averageScore = totalScore / score.length;
    

    result.textContent = averageScore
});



