const allParts = [
  "Rosie_sensor",
  "optimus_speaker",
  "Rosie_horm",
  "Ruby_antenna",
  "victor_display",
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

for(let i of allParts){
    allp.push(i.split('_'))
}

console.log(allp)

