const express = require('express')
const mc = require('./controllers/messages_controller')
const SERVER_PORT = 3001
const app = express()

app.use(express.json())
app.use(express.static(__dirname+ './../public/build'))

const messagesBasedUrl = "/api/messages"
app.post(messagesBasedUrl, mc.create)
app.get(messagesBasedUrl, mc.read)
app.put(`${messagesBasedUrl}/:id`, mc.update)
app.delete(`${messagesBasedUrl}/:id`, mc.delete)

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})