const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./routers/index')


app.use(bodyParser.json())
app.use(routes)


app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log('Server Error')
  }
  else {
    console.log('server is running')
  }
})