const bcrypt = require('../auth/bcryptConfig');
const Joi = require('../models/validations/userValidations');
const User = require('../models/User');
const tokenGenerate=require('../auth/tokenGenerate')

module.exports.register = async (req, res) => {
    try {
        const value = await Joi.validateAsync(req.body);
        const bcryptedPassword = await bcrypt.bcryptPassword(req.body.password);
        const user = await User.create({
            email: req.body.email,
            password: bcryptedPassword
        });

        return res.status(201).json({
            user,
            message: 'User Created Successfully'
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


module.exports.login= async (req,res)=>{
    try {
        const value= await Joi.validateAsync(req.body)
        const user= await User.findOne({email:req.body.email})
        let matchPassword= await bcrypt.compareHashPassword(req.body.password,user.password)
        if(matchPassword){
            let accessToken=await tokenGenerate.generateToken(user._id)
            return res.status(200).json({
                accessToken,
                message:'Sucessfully Login'
            })

        }
        else{
            return res.status(400).json({
                message:'Email/Password is wrong'

            })
        }
        
    } catch (error) {
        return res.json({
            message:error
        });
        
    }

}