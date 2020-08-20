const path = require('path')
const multer = require('multer')

module.exports = {
  dest: path.resolve(__dirname, '..', 'temp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'temp', 'uploads'))
    },
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  }
}