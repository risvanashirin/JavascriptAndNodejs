// • Create a server using Express.js

const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('express server created')
})
app.listen(2300,()=>{
    console.log('http://localhost:2300')
})