const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')


router.get('/products', productsController.showAll)
router.post('/products', productsController.create)
router.delete('/products:id', productsController.remove)
router.put('/products:id', productsController.update)

module.exports = router