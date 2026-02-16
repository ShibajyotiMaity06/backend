const express = require('express')
const router = express.Router()


const {deleteData , getTasks , postdata} = require('../controllers/all.js')


router.delete('/:id' , deleteData)
router.get('/get' , getTasks)
router.post('/post' , postdata)

module.exports = router