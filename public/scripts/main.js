import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButton = document.querySelectorAll('.actions a.check')

function handleClick(event, check = true) {
  event.preventDefault()

  const roomId = document.querySelector('#room-id').dataset.id
  const form = document.querySelector('.modal form')
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id
  
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

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
