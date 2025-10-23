const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"];

console.log(find(words, "ctay"));            // "cat"


function find(words,sec){

    let wordf=new Map();

    for(let w of words){
        let cf= new Map()
        for(let c of w){
            cf.set(c,(cf.get(c)||0)+1)
        }
        wordf.set(w,cf);
    }

    console.log(wordf)

    let sf=new Map()
    for(let c of sec){
        sf.set(c,(sf.get(c)||0)+1)
    }

    console.log(sf)

    let wa=[]
    for(let [w,cf] of wordf){
        let flag=true
        for(let [k,v] of cf){
            if((sf.get(k)||0)<v){
                flag=false
                break;
            }
        }
        if(flag==true){
            wa.push(w)
        }
        
    }

    return wa.length===0?null:wa[0];

  
}