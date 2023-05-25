const router = require('express').Router()
const toysCtrl = require('../controllers/toys.js')

// Routes
router.post('/', toysCtrl.create)
router.get('/', toysCtrl.index)

module.exports = router