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

const required_parts1 = ["sensor", "speaker", "display", "claw"];
const required_parts2 = ["sensor", "speaker", "display"];
const required_parts3 = ["antenna", "claw"];



function getRoboParts(allParts,required_parts1){

    let roboParts=new Map()

    for(let parts of allParts){
        let [robo,part]=parts.split('_')
        let roboName=robo.charAt(0).toUpperCase()+robo.slice(1)

        if(!roboParts.has(roboName)){
            roboParts.set(roboName,new Set())
        }
        roboParts.get(roboName).add(part)

    }

    console.log(roboParts)

    

}



getRoboParts(allParts,required_parts1)