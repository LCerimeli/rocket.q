const express = require('express')
const questionController = require('./controllers/questionController')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-room', (req, res) => res.render('create-room'))

// Formato para o form de dentro da modal passar a informação
 route.post('/room/:room/:question/:action', questionController.index) 
module.exports = route