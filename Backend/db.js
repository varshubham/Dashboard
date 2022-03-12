const express=require('express')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')


const app = express()
const port = 5000

app.use(express.json())
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("hello World")
// })

// app.get('/api/data',(req,res)=>{
//     database.collection('data').find({}).toArray((error,result)=>{
//         if(error) throw error;
//         res.send(result)
//     })
// })

app.use('/api/data',require('./routes'))

app.listen(port,()=>{
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(error,result)=>{
        if (error) throw error;
        database=result.db('test');
        console.log(`example app is listening at http://localhost:${port}`)
    })
})