const express = require('express')
const router = express.Router()
const { getHomepage, postUser, getCreatePage, getUpdatePage, updateUser } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postUser)
router.post('/update-user', updateUser)

module.exports = router