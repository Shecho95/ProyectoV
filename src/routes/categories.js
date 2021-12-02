const express = require('express')
const router = express.Router()

const { 
    categoryGet, 
} = require('../controllers/categories')

router.get('/', categoryGet);

module.exports = router
