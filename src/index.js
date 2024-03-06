import '../babel.config.js'
import './style.css'
import { resetFunction } from './reset.js'
import { calculatingPoints } from './calculating.js'
const reset = document.getElementById('reset-button')
const form = document.getElementById('form')

form.addEventListener('submit' , (ev) => {
  ev.preventDefault()
  calculatingPoints()
})

reset.addEventListener('click', (ev) => {
  resetFunction()
})