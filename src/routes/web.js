const express = require('express')
const router = express.Router()
const { getHomepage, postUser, getCreatePage } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/create', getCreatePage)

router.post('/create-user', postUser)

module.exports = router