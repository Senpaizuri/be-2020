const express = require('express')
const route = express.Router()
const database = require('../db/database')


route.get('/profile',(req,res)=>{
    if(req.session.user){
        res.render('pages/profile',{user:req.session.user})
    }else{
        res.redirect('/login')
    }
})

route.get('/profile/:uid',(req,res)=>{
    if(req.session.user){
        res.render('pages/userprofile',{user:req.session.user})
    }else{
        res.redirect('/login')
    }
})

module.exports = route

