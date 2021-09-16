import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const checkButton = document.querySelectorAll('.actions a.check')
const copyButton = document.querySelector('#room-id.button.outlined')

function copy() {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.opacity = '0'
  textarea.value = (copyButton.innerText).substring(1) 
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

copyButton.addEventListener('click', () => {
  copy()
})

function handleClick(event, check = true) {
  event.preventDefault()

  const roomId = document.querySelector('#room-id').dataset.id
  const form = document.querySelector('.modal form')
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id
  
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  const text = check ? 'marcar como lida' : 'excluir'

  modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta'
  modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}

checkButton.forEach(button => {
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})
