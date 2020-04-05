const express = require('express')
const route = express.Router()


route.get('/logout',(req,res)=>{
    delete req.session.user
    res.redirect('/')
})

module.exports = route

