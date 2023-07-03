require('dotenv').config()
const express = require('express');
const PORT=process.env.PORT
const app=express()
const db=require('./configs/mongoose')
const bodyParser = require('body-parser');
const usersRoutes=require('./Routes/usersRoutes')
const postsRoutes=require('./Routes/blogPostsRoutes')
db()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error in server listening :-${err}`);
        return;
    }
    console.log(`Server listening at http://localhost:${PORT}`)
});