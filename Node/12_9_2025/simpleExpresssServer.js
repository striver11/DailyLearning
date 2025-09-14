// import express from 'express'

// const server=express();

// function requestCallback(req,res){
//     res.status(200).send(`request received`)
// }

// server.get('/',requestCallback)
// server.listen(3000)



// The .mjs extension stands for "Module JavaScript".
// It is used to indicate that a JavaScript file should be treated as an ES module (using import/export syntax) by Node.js.

// Use .mjs if you want to use ES module syntax and your package.json does not have "type": "module".
// If your package.json has "type": "module", you can use .js for ES modules.
// Summary:
// .mjs files are always parsed as ES modules by Node.js.


// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//   res.status(200).send('request received');
// });

// app.listen(3000, () => {
//   console.log('Express server running at http://localhost:3000/');
// });

import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('reqeust receieved from client')
})

app.listen(3000,()=>{
    console.log('express server is running')
})