const express = require('express')
const app = express()

app.get('/hello/:message', (req, res) => {
  const { params } = req
  res.json({ message: 'Ahoy!', params })
})

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})
