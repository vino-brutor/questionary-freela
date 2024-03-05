const form = document.getElementById('form')
const reset = document.getElementById('reset-button')
const person = document.getElementById('input-person').value
const main = document.getElementsByTagName('main')
let question
let points = 0

export const calculatingPoints = () => {
  
  const person = document.getElementById('input-person').value
  for (let index = 1; index < 9; index++) {
      
    question = document.querySelector(`input[name="question${index}"]:checked`).value
    if(question === 'optionA'){
      points += 0
    }else if(question === 'optionB'){
      points += 4
    }else if(question === 'optionC'){
      points += 8 
    }
  }
  console.log(person, points, question)
  const result = document.createElement('h1')
  result.innerText = person + ' atingiu a pontuação de: '+ points
  form.appendChild(result)  
}
  
