import {fs} from 'fs'
import express from 'express'

const app=express();

app.get('/readfile',(req,res)=>{
    const queryObject = url.parse(req.url, true).query;
    const filePath=queryObject.file;
    fs.readFile(filePath,'utf-8')
    .then(data1=>{
        res.status(200).send(data1)
    })  .catch(err => {
    if (err.code === 'ENOENT') {
       res.status(404).send('file not found');
    } else {
        res.status(404)
    }
})

app.get('/run"',(req,res)=>{
    const queryObject = url.parse(req.url, true).query;
    const filePath=queryObject.file;
    fs.readFile(filePath,'utf-8')
    .then(data1=>{
        res.status(200).send(data1)
    })  .catch(err => {
    if (err.code === 'ENOENT') {
       res.status(404).send('file not found');
    } else {
        res.status(500).send("cannot read file")
    }
})

app.listen(3000,()=>{
    console.log("it running on the server");
})