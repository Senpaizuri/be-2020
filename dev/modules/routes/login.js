const express = require('express');
const route = express.Router();

route.get('/login',(req,res)=>{
    res.render('pages/login',{})
})

route.post('/login',(req,res)=>{
    res.render('pages/login')
})

module.exports = route

