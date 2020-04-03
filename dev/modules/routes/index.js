const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.render('pages/home',{
		baseClass: 'page-home'
	})
})

route.post('/',(req,res)=>{

})

module.exports = route

