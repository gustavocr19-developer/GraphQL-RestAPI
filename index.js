const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const productsRouter = require('./routers/products')

app.use(bodyParser.json())
app.use(productsRouter)


app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log('Server Error')
  }
  else {
    console.log('server is running')
  }
})