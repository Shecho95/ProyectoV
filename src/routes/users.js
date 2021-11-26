const express = require('express')
const router = express.Router()

const { 
    usersGet, 
    usersPost, 
    usersGetById, 
    usersPut, 
    usersDelete
} = require('../controllers/users')

router.get('/', usersGet);

router.post('/', usersPost); 

router.get('/:id', usersGetById);

router.put('/:id', usersPut);

router.delete('/:id', usersDelete);

module.exports = router