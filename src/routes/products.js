const express = require('express')
const router = express.Router()

const { 
    productsGet, 
    productsPost, 
    productsGetById, 
    productsPut, 
    productsDelete
} = require('../controllers/products')

router.get('/', productsGet);

router.post('/', productsPost); 

router.get('/:id', productsGetById);

router.put('/:id', productsPut);

router.delete('/:id', productsDelete);

module.exports = router
