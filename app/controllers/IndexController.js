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
        const classes = result.images[0].classifiers[0].classes[0]
        if (classes) {
          return response.status(200).send({
            classifyType: classes.class,
            classifyPercentage: `${classes.score * 100}%`
          })
        }
        return response.send('A imagem não foi reconhecida.')
      }
      return response.status(400).send('Arquivo inválido ou inexistente.')
    } catch (error) {
      return response.status(500).send('Erro interno do sistema.')
    }
  }
}