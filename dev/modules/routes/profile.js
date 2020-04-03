const express = require('express')
const route = express.Router()
const database = require('../db/database')


route.get('/profile',(req,res)=>{
    res.render('pages/profile',{})
})

route.post('/profile',(req,res)=>{
    res.render('pages/profile')
})

module.exports = route

