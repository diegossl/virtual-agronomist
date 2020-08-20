const fs = require('fs')
const path = require('path')

const uploadPath = path.resolve(__dirname, '..', '..', 'temp', 'uploads')

module.exports = {
  checkUploadPath (req, res, next) {
    fs.exists(uploadPath, (exists) => {
      if(!exists) {
        fs.mkdir(uploadPath, { recursive: true }, (err) => {
          if(err) {
            console.log('Erro na criação da pasta')
            next()
          }  
          next()
        })
      }
      next()
   })
  }
}
