const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost:27017'

const app=express()
mongoose.connect(url,()=>{
    console.log("connectes")
}
)
const con=mongoose.connection


// app.listen(7070,function(){
//     console.log("Listening port")
// })
