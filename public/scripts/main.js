import Modal from './modal.js'

const modal = Modal()

const checkButton = document.querySelectorAll('.actions a.check')

const questionWrapper = document.querySelectorAll('.question-wrapper')

checkButton.forEach (button => {
  button.addEventListener('click', event => {
    questionWrapper.classList.add('read')
  })
})


const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
  })
})