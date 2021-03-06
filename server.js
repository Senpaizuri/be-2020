require('dotenv').config()
require('./dev/modules/db/schemes')
const database = require('./dev/modules/db/database')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())

app.set('view engine','ejs')
app.use(express.static('src'))

app.use(session({
	resave: false,
	saveUninitialized: true,
	cookie:{
		sameSite: true,
		maxAge: 60000 * 5
	},
	secret: process.env.SESSION_HASH || 'hushhush'
}))

// routes
const index = require('./dev/modules/routes/index')
const login = require('./dev/modules/routes/login')
const register = require('./dev/modules/routes/register')
const logout = require('./dev/modules/routes/logout')
const profile = require('./dev/modules/routes/profile')
const people = require('./dev/modules/routes/people')
app.use('/',index)
app.use('/',login)
app.use('/',register)
app.use('/',logout)
app.use('/',profile)
app.use('/',people)

// saving grace
const notFound = require('./dev/modules/routes/notfound')
app.use('/',notFound)


app.listen(port,()=>{
	console.log(`Exposed on port ${port}`)
})
