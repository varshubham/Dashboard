const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    database.collection('data').find({}).toArray((error, result) => {
        if (error) throw error;
        res.send(result)
    })
})

router.get('/sector/:sector', (req, res) => {
    const query = { sector : req.params.sector}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/endyear/:endyear', (req, res) => {
    const a = Number(req.params.endyear)
    const query = { end_year : a}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/topic/:topic', (req, res) => {
    const query = { topic : req.params.topic}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/region/:region', (req, res) => {
    const query = {region : req.params.region}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/source/:source', (req, res) => {
    const query = {source : req.params.source}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/country/:country', (req, res) => {
    const query = {country : req.params.country}
    database.collection('data').find(query).toArray((error,result)=>{
        if(error) throw error;
        res.send(result)
    })
})

router.get('/distinct/:field',async(req,res)=>{
    const value = req.params.field
    const a = await database.collection('data').distinct(value);
    res.send(a)
})
module.exports=router
