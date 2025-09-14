import express from 'express';
import { join } from 'node:path';

const app = express();

app.use(express.static(join(process.cwd(),'src','public')))

app.get('/example',(req,res)=>{
    // const filepath=`${process.cwd()}/src/public/concerts.html`

    const filePath=join(process.cwd(),'src','public','example.html')

    res.status(200).sendFile(filePath)
})
app.listen(4000,()=>{
    console.log("the code is running on the server 4000")
})
