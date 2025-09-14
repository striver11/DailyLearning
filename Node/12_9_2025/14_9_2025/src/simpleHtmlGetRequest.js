import express from 'express'

import { join } from 'node:path'

const app=express()


app.get('/html-get',(req,res)=>{
    res.status(200).set({'content-type':'text/html'}).send("this is simple html get requenst")
})


app.get('/concerts',(req,res)=>{
    // const filepath=`${process.cwd()}/src/public/concerts.html`

    const filePath=join(process.cwd(),'src','public','concerts.html')

    res.status(200).sendFile(filePath)
})
app.listen(4000,()=>{
    console.log("the code is running on the server 4000")
})



//if we don't want to start the server every time when you make changes in the folder we use --watch  the syntax is below
// syntax: node --watch-path=./src src/simpleHtmlGetRequest.js