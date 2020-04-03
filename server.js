require('dotenv').config()
require('./dev/modules/db/schemes')
// const database = require('./dev/modules/db/database')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.SERVER_PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine','ejs')
app.use(express.static('src'))


// routes
const index = require('./dev/modules/routes/index')
const login = require('./dev/modules/routes/login')
app.use('/',index)
app.use('/',login)


app.listen(port,()=>{
	console.log(`Exposed on port ${port}`)
})
