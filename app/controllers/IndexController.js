const { render } = require("ejs")

module.exports = {
  index (request, response) {
    return response.render('index')
  },

  sendFile (request, response) {
  }
}