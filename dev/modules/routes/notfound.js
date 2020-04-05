const express = require('express')
const route = express.Router()
const database = require('../db/database')
const {compare} = require('../encryption/index')

route.get('*',(req,res)=>{
    res.render('pages/404')
})

module.exports = route

