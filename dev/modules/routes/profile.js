const express = require('express')
const route = express.Router()
const {users} = require('../db/schemes')
const {compare,hash} = require('../encryption/index')

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

route.get('/profile/:uid/edit',(req,res)=>{
    if(req.session.user){
        res.render('pages/editprofile',{user:req.session.user})
    }else{
        res.redirect('/login')
    }
})

route.post('/profile/:uid/edit',async(req,res)=>{
    const updateData = req.body
    const sessionData = req.session.user
    const isUserValid = await compare(updateData.password,sessionData.password)
    if(updateData && sessionData){
        if(isUserValid){
            tempData = {
                email: updateData.email,
                displayName: updateData.displayName,
                favoriteColor: updateData.favoriteColor,
                password: updateData.newPassword !== '' ? await hash(updateData.newPassword) : sessionData.password,
                hidePersonalData: updateData.hidePersonalData == 'on'
            }
            const newUserData = await users.updateOne({
                    _id:sessionData._id
                },
                tempData
                ,{
                    new: true,
                    runValidators: true
                }).then(doc => doc).catch(err=>{
                    console.log(err)
                    res.render('pages/editprofile',{
                        user:req.session.user,
                        err:{
                            fullErr: err,
                            msg:'Something went wrong with updating the data, try again'
                        }
                    })
                })
            if(newUserData){
                console.log(newUserData)

                req.session.user.email = tempData.email
                req.session.user.displayName = tempData.displayName
                req.session.user.favoriteColor = tempData.favoriteColor
                req.session.user.password = tempData.password
                req.session.user.hidePersonalData = tempData.hidePersonalData
                
                console.log(req.session.user)
                
                res.render('pages/editprofile',{
                    user:req.session.user,
                    success:{
                        msg:'Updated info successfully'
                    }
                })
            }
        }else{
            res.render(`pages/editprofile`,{
                user:req.session.user,
                err:{
                    msg:'The old password is incorrect.'
                }
            })
        }
    }else{
        res.redirect('/login')
    }
    
})

module.exports = route

