const express=require('express')
const Router=express.Router()
const userService=require('../services/userService')


module.exports=Router

Router.post('/register',userService.register)
Router.post('/login',userService.login)

module.exports=Router