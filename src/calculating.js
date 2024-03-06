const form = document.getElementById('form')
const reset = document.getElementById('reset-button')
const main = document.getElementsByTagName('main')
let question
let sectionX = 0
let sectionY = 0
let resultX = 0
let resultY = 0

export const calculatingPoints = () => {
  
  const person = document.getElementById('input-person').value
  for (let index = 1; index < 17; index++) {
    
    if(index % 2 === 0){
      question = document.querySelector(`input[name="question${index}"]:checked`).value
      if(question === 'optionA'){
        sectionY += 0
      }else if(question === 'optionB'){
        sectionY += 1
      }else if(question === 'optionC'){
        sectionY += 2 
      }
    }else if(index % 2 !== 0){
      question = document.querySelector(`input[name="question${index}"]:checked`).value
      if(question === 'optionA'){
        sectionX += 0
      }else if(question === 'optionB'){
        sectionX += 1
      }else if(question === 'optionC'){
        sectionX += 2 
    }
    } 

  }
  resultCalculus(sectionX, sectionY)
  reusltText()
}
  


const reusltText = () => {
  const person = document.getElementById('input-person').value
  const result = document.createElement('h2')
  const ul = document.createElement('ul')
  const liY = document.createElement('li')
  const liX = document.createElement('li')

  result.innerText = ('O entrevistado' ?? person) + ' atingiu a seguinte pontuação: '
  liX.innerText = 'Seção X: ' + resultX + '%'
  liY.innerText = 'Seção Y: ' + resultY + '%'

  form.appendChild(result)
  result.appendChild(ul)
  ul.appendChild(liX)
  ul.appendChild(liY) 
}

const resultCalculus = (X, Y) => {
  resultX = (X/16) * 100
  resultY = (Y/16) * 100
}