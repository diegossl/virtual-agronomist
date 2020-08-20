const auth = require('./AuthenticationService')
const fs = require('fs')

class VisualRecognitionService {
  async classify (filePath) {
    const visualRecognition = auth.getVisualRecognition()

    const params = {
      imagesFile: fs.createReadStream(filePath),
      classifierIds: ["PragasdaSoja_108148400"],
      threshold: 0.6
    }
    return await visualRecognition.classify(params)
  }
}

module.exports = new VisualRecognitionService()