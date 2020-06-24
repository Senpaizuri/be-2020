const express = require('express')
const route = express.Router()
const {users} = require('../db/schemes')
const validateRegister = require('../forms')


route.get('/register',(req,res)=>{
    res.render('pages/register',{})
})

route.post('/register',async(req,res)=>{
    const validation = await validateRegister(req.body)
    console.log(validation)
    if(req.session.user){
        res.redirect('/profile')
    }else{
        if(validation.valid){
            let user = new users(req.body)
            user.save()
                .then(doc =>{
                    req.session.user = doc
                    res.redirect('/profile')
                })
                .catch(err=>{
                    console.log('caught in register mongo',err)
                    res.render('pages/register',{
                        err:{
                            msg: `Email is already in use! Try <a href="/login?email=${req.body.email}">logging in</a>!`
                        }
                    })
                })
        }else{
            res.render('pages/register',{
                err:{
                    msg: validation
                }
            })
        }
    }
})

module.exports = route

