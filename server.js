require('dotenv').config()
require('./dev/modules/db/schemes')
const database = require('./dev/modules/db/database')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()
const port = process.env.SERVER_PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())

app.set('view engine','ejs')
app.use(express.static('src'))


// routes
const index = require('./dev/modules/routes/index')
const login = require('./dev/modules/routes/login')
const register = require('./dev/modules/routes/register')
app.use('/',index)
app.use('/',login)
app.use('/',register)


app.listen(port,()=>{
	console.log(`Exposed on port ${port}`)
})
