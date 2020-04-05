const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    if(req.session.user){
        res.redirect('/profile')
    }else{
        res.render('pages/home',{})
    }
})

module.exports = route

