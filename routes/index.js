const express = require('express')
const IndexController = require('../app/controllers/IndexController')
const MulterConfig = require('../config/multer')
const Multer = require('multer')

const Upload = Multer(MulterConfig)
const router = express.Router()

router.get('/', IndexController.index)
router.post('/upload', Upload.single('images'), IndexController.sendFile)

module.exports = router
