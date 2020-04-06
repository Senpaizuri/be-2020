const express = require('express')
const route = express.Router()
const {users} = require('../db/schemes')

route.get('/people',async (req,res)=>{
    if(req.session.user){
        const allUsers = await users.find({})
        if(allUsers){
            allUsers.splice(allUsers.map((e)=> e.uid).indexOf(req.session.user.uid),1)
            res.render('pages/people',{
                user:req.session.user,
                people: allUsers
            })
        }else{
            res.render('pages/people',{
                user:req.session.user,
                people: false
            })
        }
    }else{
        res.redirect('/login')
    }
})

module.exports = route

