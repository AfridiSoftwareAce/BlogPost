const bcrypt=require('bcrypt')

module.exports.bcryptPassword= async(plainPassord)=>{
    let hashPassword= await bcrypt.hash(plainPassord,10)
    return hashPassword
}

module.exports.compareHashPassword=async(plainPassord,hashPassword)=>{
    let match= await bcrypt.compare(plainPassord,hashPassword)
    return match
}