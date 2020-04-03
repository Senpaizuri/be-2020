require('dotenv').config()

const mongoose = require('mongoose')
const uriString = process.env.MNG_URI

class database{
    constructor() {
        this.connect()
      }
    
      connect() {
        mongoose
          .connect(uriString, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => {
            console.log('Hello MongoDB')
          })
          .catch(err => {
            console.error('HELP...')
            console.error(err)
          })
      }
}

module.exports = new database