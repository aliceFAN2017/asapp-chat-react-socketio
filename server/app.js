var express = require('express')
var socket = require('socket.io')

var app = express()

 var server = app.listen(8000, function() {
     console.log('server is running on port 8000')
 })

 var io = socket(server)
 io.on('connection', socket => {
     console.log(socket.id)

     socket.on('SEND_MESSAGE', function(data) {
         io.emit('RECEIVE_MESSAGE', data)
     })

     socket.on('SEND_TYPING', function(data) {
         io.emit('RECEIVE_TYPING', data)
     })
 })