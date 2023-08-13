const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  response.file('./index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})