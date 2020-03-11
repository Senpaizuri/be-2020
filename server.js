require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.SERVER_PORT || 8080
const {
	overview,
	login
} = require('./helpers/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine','ejs')
app.use(express.static('src'))

app.get('/', overview)

app.get('/login', login)
app.post('/login', login)

app.listen(port,()=>{
	console.log(`Exposed on port ${port}`)
})
