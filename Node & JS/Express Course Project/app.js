const express = require('express')
const app = express()

const auth = require('./routes/auth')
const people = require('./routes/people')

app.use(express.static('./public'))
// Parse form data from JS
app.use(express.json())

// Authentication route
app.use('/login', auth)
// People management route
app.use('/api/people', people)

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})