const bcrypt = require('bcrypt');
const saltRounds = 10;

const password = {
    hash:(plainPass)=>{
        return bcrypt.hash(plainPass,saltRounds).then(hash => hash)
    },
    compare:(plainPass,dbHash)=>{
        return bcrypt.compare(plainPass,dbHash).then(result => result)
    }
}

module.exports = password