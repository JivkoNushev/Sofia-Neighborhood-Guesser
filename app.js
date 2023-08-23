const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/js/game.js', (req, res) => {
  res.sendFile(__dirname + '/js/game.js')
})

app.get('/css/game.css', (req, res) => {
  res.sendFile(__dirname + '/css/game.css')
})

app.get('/easy_game.html', (req, res) => {
  res.sendFile(__dirname + '/easy_game.html')
})

app.get('/normal_game.html', (req, res) => {
  res.sendFile(__dirname + '/normal_game.html')
})

app.get('/hard_game.html', (req, res) => {
  res.sendFile(__dirname + '/hard_game.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  next();
});