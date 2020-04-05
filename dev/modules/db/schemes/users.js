const mongoose = require('mongoose')

const schema = mongoose.Schema
const objectId = schema.ObjectId

const {hash} = require('../../encryption/index')
const {generateUID} = require('../../helpers/index')

const user = new schema ({
    objId: objectId,
    displayName: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },
    middleName: {
        type:String
    },
    lastName: {
        type:String,
        required: true
    },
    favoriteColor: {
        type:String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bio: {
        type:String,
    },
    email: {
        type: String, 
        unique: true
    }
})

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

user.path('firstName').set((str)=>{
    return str.capitalize()
})

user.pre('save',async function(next){
    if(this.isModified){
        this.password = await hash(this.password)
    }
})

module.exports = mongoose.model('user',user)

// const userInstance = new userModel()

// userInstance.username = 'Thunder'
// userInstance.password = 'spark'
// userInstance.firstName = 's'
// userInstance.middleName = ''
// userInstance.lastName = 'Birb'
// userInstance.favoriteColor = 'Black'
// userInstance.dob = new Date()
// userInstance.bio = 'x'
// userInstance.email = 'b@x.nl'

// userInstance.save((err)=>{
//     console.log(err)
// })


