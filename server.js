require('dotenv').config()
require('./dev/modules/db/schemes')
const database = require('./dev/modules/db/database')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.SERVER_PORT || 8080
const route = require('./dev/modules/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine','ejs')
app.use(express.static('src'))

app.get('/', route.overview)
app.get('/login', route.login)
app.get('/register', route.register)

app.post('/login', route.login)
app.post('/register', route.register)

app.listen(port,()=>{
	console.log(`Exposed on port ${port}`)
})
