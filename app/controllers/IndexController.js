const visualRecognitionService = require('../services/VisualRecognitionService')

module.exports = {
  index (request, response) {
    return response.render('index')
  },

  async classifyImage (request, response) {
    try {
      const file = request.file
      if (file) {
        const { result } = await visualRecognitionService.classify(file.path)
        const classifyType = result.images[0].classifiers[0].classes[0].class
        const classifyPercentage = result.images[0].classifiers[0].classes[0].score
        return response.status(200).send({
          classifyType: classifyType,
          classifyPercentage: `${classifyPercentage * 100}%`
        })
      }
      return response.status(400).send('Arquivo inválido ou inexistente.')
    } catch (error) {
      return response.status(500).send('Erro interno do sistema.')
    }
  }
}