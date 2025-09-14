import express from 'express'

const app=express()

app.get(`/text-version`,(req,res)=>{
    res.status(200).set({"Content-type":"text/plain"}).send("this is simple get request")
})

app.get(`/html-version`,(req,res)=>{
    res.status(200).set({'Content-type':'html/plain'}).send("this is some html code")
})

app.listen(3000,()=>{
    console.log("the application is running on the port 3000")
})