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
                validObj.reason.push({key,val,msg:`<strong>${val} is a common password try something better ;)</strong>` })
                validObj.valid = false
            }
        }
        if(key == 'email'){
            val = val.toLowerCase()
        }
        if(val == ''){
            validObj.reason.push({key,val,msg:`<span>${key} is undefined or empty</span>` })
        }
    }
    return validObj
}

module.exports = validate