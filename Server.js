const express=require('express');
const mongoose=require('mongoose')
const BrandName=require('./model')

const app=express();

app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@naresh.bobvaqj.mongodb.net/?retryWrites=true&w=majority').then(()=>
    console.log("DB Connected")
).catch(err=>console.log(err))

app.post('/addbrands',async(req,res)=>{
    
        const {brandname}=req.body
    try{
        const newdata=new BrandName({brandname})
        await newdata.save();
        return res.json(await BrandName.find());
    }
    catch(err)
    {
        console.log(err.message);
    }
})
app.get('/getallbrands',async(req,res)=>{
    try{
    const allrec=await BrandName.find();
    return res.json(allrec);
    }
    catch(err)
    {
        console.log(err.message)
    }

})

app.listen(7070,()=>{
    console.log("Server Running")
})