const validate = async (body)=>{
    let validObj = {
        valid: false,
        reason:[],
        body
    }
    for(let [key,val] of Object.entries(body)){
        if(key == 'hidePersonalData'){
            val == 'on' ? body[key] = true : body[key] = false    
        }
        if(key == 'email'){
            val = val.toLowerCase()
            console.log(val)
        }
        if(val !== ''){
            validObj.valid = true
        }else{
           validObj.reason.push({key,val,msg:`${key} is undefined or empty` })
        }
    }
    return validObj
}

module.exports = validate