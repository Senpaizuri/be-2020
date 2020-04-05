const express = require('express')
const route = express.Router()
const database = require('../db/database')
const {compare} = require('../encryption/index')

route.get('*',(req,res)=>{
    if(req.session.user){
        res.render('pages/404',{user:req.session.user})
    }else{
        res.render('pages/404')
    }
})

module.exports = route

