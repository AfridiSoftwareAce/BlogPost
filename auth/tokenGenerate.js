var jwt = require('jsonwebtoken');

module.exports.generateToken=async(data)=>{
    try {
        const accessToken= await jwt.sign({data},process.env.SECRET_KEY,{expiresIn:'1h'})
        return accessToken
        
    } catch (error) {
        console.log(error)
        
    }
}