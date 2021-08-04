const express = require('express')
const app = express()

const auth = require('./routes/auth')

app.use(express.static('./public'))
// Parse form data from JS
app.use(express.json())

// Authentication route
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})