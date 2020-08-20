const path = require('path')
const fs = require('fs')
const multer = require('multer')

const directory = path.resolve(__dirname, '..', 'temp', 'uploads')

module.exports = {
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, directory)
    },
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  }
}