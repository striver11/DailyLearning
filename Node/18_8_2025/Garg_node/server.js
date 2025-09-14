const http=require("http");
const fs=require("fs")

const mySever=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        
       switch(req.url){
        case "/":res.end("HomePage");
        break
        case '/about':res.end("I am praveen kumar");
        break
        default: res.end("404 Not Found")
       }

    }
)})

mySever.listen(8000,()=>console.log(`server started `))