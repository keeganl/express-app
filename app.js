const express = require('express')
const app = express()
const path = require('path');

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/redirect', (req, res) => {
  res.redirect(301, 'https://cs.fsu.edu')
})

app.get('/info', (req, res) => {
  res.redirect(301, 'https://ngrok.com/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})