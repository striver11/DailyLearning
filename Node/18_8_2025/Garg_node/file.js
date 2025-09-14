const fs=require('fs')


// // Sync
// fs.writeFileSync('./test.txt',"hello world")


// //Async
// fs.writeFile('./test.txt',"hello world Async",(err)=>{})

    // const result=fs.readFileSync("./constact.txt",'utf-8')
    // console.log(result)

// fs.readFile('./constact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result)
//     }
// });

// fs.appendFileSync('./text.txt',new Date().getDate().toLocaleString());

// fs.appendFileSync('./test.txt',`Hey there \n`)

// fs.appendFileSync('./test.txt',`${Date.now()}Hey there\n`)

// fs.cpSync('./test.txt','./copy.txt');


// fs.unlinkSync('./copy.txt')

// console.log(fs.statSync('./test.txt'))

// fs.mkdirSync()

// console.log('1')

// //Non-Blocking..
// fs.readFile('constact.txt','utf-8',(err,result)=>{
//     console.log(result)
// })

// console.log("2")

//Default Thread Poll Size =4
//max no of threads that we can create depends on the server cpu cores if server has 8 cores then 8 threads
// max?  - 8 core cpu -8 threads

const os=require('os')

console.log(os.cpus().length)