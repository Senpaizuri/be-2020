const express = require('express')
const route = express.Router()
const database = require('../db/database')
const {compare} = require('../encryption/index')

route.get('/login',(req,res)=>{
    res.render('pages/login',{})
})

route.post('/login',(req,res)=>{
    res.render('pages/login')

})

module.exports = route

