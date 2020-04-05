const express = require('express')
const route = express.Router()
const database = require('../db/database')
const {compare} = require('../encryption/index')
const {users} = require('../db/schemes')

route.get('/login',(req,res)=>{
    console.log(req.session)
    if(req.session.user){
        res.redirect('/profile')
    }else{
        res.render('pages/login',{
            email: req.query.email
        })
    }
})

route.post('/login',async (req,res)=>{
    const loginDetails = req.body
    const emailData = await users.findOne({email:req.body.email}).then(doc=>doc)
    // console.log(emailData)

    if(emailData){
        const isUserValid = await compare(req.body.password,emailData.password)
        if(isUserValid){
            delete emailData.password
            req.session.user = emailData
            res.redirect('/profile')
        }else{
            res.render('pages/login',{
                err:{
                    invalid: 'pass',
                    msg: 'The password or the email may be invalid!'
                }
            })
        }
    }else{
        res.render('pages/login',{
            err:{
                invalid: 'email',
                msg: `We can\'t find a user with this (${req.body.email}) email adress!`
            }
        })
    }
})


module.exports = route

