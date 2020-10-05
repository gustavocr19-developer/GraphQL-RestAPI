const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')


router.get('/', productsController.showAll)
router.post('/', productsController.create)
router.delete('/:id', productsController.remove)
router.put('/:id', productsController.update)

module.exports = router