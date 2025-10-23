const songTimes = [
  ["Stairway to Heaven", "8:05"],
  ["Immigrant Song", "2:27"],
  ["Rock and Roll", "3:41"],
  ["Communication Breakdown", "2:29"],
  ["Good Times Bad Times", "2:48"],
  ["Hot Dog", "3:19"],
  ["The Crunge", "3:18"],
  ["Achilles Last Stand", "10:26"],
  ["Black Dog", "4:55"]
];

function parseTime(timeSt){
    const [min,sec]=timeSt.split(':').map(Number)
    return min*60+sec;
}

function findPair(songs){
    const target=7*60;
    const seen=new Map();
    for(let [title,dur] of songs){
        const timesec=parseTime(dur);
        const need=target-timesec;
        if(seen.has(need)){
            return [seen.get(need),title]
        }
        seen.set(timesec,title)
    }

    return [];

}

console.log(findPair(songTimes))