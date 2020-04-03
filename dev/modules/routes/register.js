const express = require('express')
const route = express.Router()
const {users} = require('../db/schemes')
const validateRegister = require('../forms')


route.get('/register',(req,res)=>{
    res.render('pages/register',{})
})

route.post('/register',async(req,res)=>{
    const validation = await validateRegister(req.body)
    if(validation.valid){
        let user = new users(req.body)
        user.save()
            .then(doc =>{
                console.log('Success!',doc)
                res.render('pages/profile',doc)
            })
            .catch(err=>{
                console.log(err)
                res.render('pages/register',{
                    err
                })
            })
    }else{
        res.render('pages/register',{
            validation
        })
    }
})

module.exports = route

