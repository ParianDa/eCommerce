const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cookieparser = require('cookie-parser')

const app = new express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieparser())

const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    return res.json({msg : "getting send"})
})

app.listen(port, ()=>{
    console.log(`process started at ${port}`)
})

app.use('/user',require('./Router/userRouter'))
app.use('/api',require('./Router/categoryRouter'))
app.use('/api',require('./Router/uploadRouter'))
app.use('/api',require('./Router/productsRouter'))

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
}) 