const express = require('express')
const route = express.Router()

route.get('*',(req,res)=>{
    if(req.session.user){
        res.render('pages/404',{user:req.session.user})
    }else{
        res.render('pages/404')
    }
})

route.get('404',(req,res)=>{
    if(req.session.user){
        res.render('pages/404',{user:req.session.user})
    }else{
        res.render('pages/404')
    }
})

module.exports = route

