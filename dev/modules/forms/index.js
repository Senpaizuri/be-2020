const validate = async (body)=>{
    console.log('validating registration',body)

    let validObj = {
        valid: false,
        reason:[],
        body
    }
    
    for(let [key,val] of Object.entries(body)){
        if(val !== ''){
            validObj.valid = true
        }else{
           validObj.reason.push({key,val,msg:`${key} is undefined or empty` })
        }
    }

    return validObj
}

module.exports = validate