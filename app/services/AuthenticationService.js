const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3')
const { IamAuthenticator } = require('ibm-watson/auth')

class AuthenticationService {
  getVisualRecognition () {
    const visualRecognition = new VisualRecognitionV3({
      serviceUrl: process.env.SERVICE_URL,
      version: '2018-03-19',
      authenticator: new IamAuthenticator({ apikey: process.env.API_KEY })
    })
    return visualRecognition
  }
}

module.exports = new AuthenticationService()