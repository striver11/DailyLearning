const allParts = [
  "Rosie_sensor",
  "Optimus_speaker",
  "Rosie_horm",
  "Ruby_antenna",
  "Victor_display",
  "Rosie_speaker",
  "Optimus_sensor",
  "Ruby_sensor",
  "Nova_claw",
  "Optimus_display",
  "Rosie_display",
  "Ruby_claw",
  "Optimus_claw",
  "Victor_antenna"
];

const requiredParts1 = ["sensor", "speaker", "display", "claw"];
const requiredParts2 = ["sensor", "speaker", "display"];
const requiredParts3 = ["antenna", "claw"];


const allp=[]

const robopr=new Map()

for(let i of allParts){
    const [robo,part]=i.split('_')
    const name=robo.charAt(0).toUpperCase()+robo.slice(1)
    if(!robopr.has(name)){
        robopr.set(name,new Set())
    }
    robopr.get(name).add(part)
}

function roboParts(robopr,req){
    let res=[]

    for(let [robot,parts] of robopr.entries()){
        let hasAll=req.every(p=>parts.has(p.toLowerCase()));
        if(hasAll) res.push(robot);
    }
    return res
}

console.log(robopr)


console.log("RequiredParts2:", roboParts(robopr, requiredParts2)); 


// const gr=Map.groupBy(allp,parts=>parts[0])

// console.log(gr)

// let rm=new Map()
// for(let [r,p] of allp){
//     rm.set(r,rm.get(p))
// }