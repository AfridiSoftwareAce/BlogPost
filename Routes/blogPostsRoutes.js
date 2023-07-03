const express=require('express')
const Router=express.Router()
const postService=require('../services/postService')

Router.post('/',postService.createPost)
Router.get('/:id',postService.getPostById)

module.exports=Router