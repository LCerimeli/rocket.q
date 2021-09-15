const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-room', (req, res) => res.render('index', {page: 'create-room'}))
route.get('/room/:room', (req, res) => res.render('room'))

// Formato para o form de dentro da modal passar a informação
 route.post('/question/:room/:question/:action', questionController.index) 
 route.post('/room', roomController.create)
module.exports = route