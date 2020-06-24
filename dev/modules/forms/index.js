const commonPasses = require('../encryption/commonPass')
const validate = async (body)=>{
    let validObj = {
        valid: true,
        reason:[],
        body
    }
    for(let [key,val] of Object.entries(body)){
        if(key == 'hidePersonalData'){
            val == 'on' ? body[key] = true : body[key] = false    
        }
        if(key == 'password'){
            if(commonPasses.data.find((commonPass)=>{return commonPass == val })){
                validObj.reason.push({key,val,msg:`${key} is a common password` })
                validObj.valid = false
            }
        }
        if(key == 'email'){
            val = val.toLowerCase()
        }
        if(val == ''){
            validObj.reason.push({key,val,msg:`${key} is undefined or empty` })
        }
    }
    return validObj
}

module.exports = validate