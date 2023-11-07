var Express = require("express");
var Mongoclient =require("mongodb").MongoClient;
var cors=require("cors");
var multer=require("multer");
const { error } = require("console");

var app=Express();
app.use(cors());
var CONNECTION_STRING="mongodb://localhost:27017";

var DATABASENAME="Sunrise";
var database;

app.listen(4000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("mongo db connected");
    })
})

app.get('/getdata',(req,res)=>{
    database.collection("employee").find({}).toArray((error,result)=>{
        res.send(result);
    });
})

app.post('/postdata',(req,res)=>{
    database.collection("employee").count({},function(error,numofDocs){
        database.collection("employee").insertOne({
            id:(numofDocs+1).toString(),
            description:req.body
        });
        res.json("added successfully");
    })
})

app.delete('/deletedata',(req,res)=>{
    database.collection("employee").deleteOne({
        id:req.query.id
    });
    res.json("deleted successfully");
})