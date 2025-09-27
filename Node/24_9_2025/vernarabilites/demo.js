import { error } from "console";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

replace(/&/g,"&amp")
replace(/</g,"&lt")
replace(/>/g,"&gt")
replace(/"/g,"&quote")
replace(/'/g,"&#039")

vernarabile one 
app.get("/file", (req,res) => {
  const file = req.query.path;
  const data = fs.readFileSync(file, "utf8");
  res.send(data);
});


i corrected and wrote the correct code
const SAFE_DIR=path.resolve("./public")

function sendJsonError(res,status,message){
    return res.status(status).json({error:message})
}

app.get("/file",async(req,res)=>{
   try{
    const filepath=req.query.file;
    if(!filepath) return sendJsonError(res,400,"file parameter required")

        //resolve path inside safe dir
        const resolvepath=path.resolve(SAFE_DIR,filepath)
        //ensure resolve path traversal is inside the safe dir
        if(!(resolvepath===SAFE_DIR)||resolvepath.startsWith(SAFE_DIR+path.sep){
            return sendJsonError(res,403,"access denined")
        }

        try{
            const data=await fs.readFile(resolvepath,"utf8")
            res.type("text/plain").status(200).send(data);
        }catch(err){
            if(err&&err.code==="ENOENT") return sendJsonError(res,404,"file not found")
        }
        return sendJsonError(res,500,"cannot read the file")

   }catch(e){
    return sendJsonError(res,500,"internalserver error")
   }
})


verarable version 
app.get("/hello", (req,res) => {
  res.send(`<div>Welcome, ${req.query.name}</div>`);
})


corrected version
cosnst name=req.query.name;
const safeName=escapeHtml(name);

function escapeHtml(name){
    if(typeof name !=='string'){
        str=String(name)
    }

    return str
            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quote;")
            .replace(/'/g,"&#039")
}

app.get('/hello',(req,res)=>{
    res.send(`<div>Welcome, ${safeName}</div>`)
})




app.get("/user", async (req,res) => {
  const id = req.query.id;
  const q = `SELECT * FROM users WHERE id = ${id}`;
  const r = await db.query(q);
  res.json(r.rows);
});


app.get("/user", async (req,res) => {
  const id = req.query.id;
  const q = `SELECT * FROM users WHERE id = ?`;
  const r = await db.query(q,[${id}]);
  res.json(r.rows);
});

