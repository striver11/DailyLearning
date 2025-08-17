//convert min to sec

let min='2:30'

let arra=min.split(":")

//convert min to sec
let timSec=parseInt(arra[0])*60+parseInt(arra[1])

console.log(timSec)


//convert sec to min

let sec=150

let m=Math.floor(sec/60)
let si=sec%60
console.log([m,si].join(':'))


//hours to sec converter
let tim="2h:30m:40s"

let re=tim.replace(/[hms]/g,'')

console.log(re) //2:30:40
let stim=re.split(":")

let time=stim
    .map((num)=>parseInt(num) )

console.log(time)
    
let times=time[0]*60*60+time[1]*60+time[2]
console.log('total seconds:',times)

//seconds to hours
let seco=9040
let [hour,mine,sece]=[Math.floor(seco/3600),Math.floor(seco/60),seco/3600]
console.log([h,m,s].join(':'))

// Problems:

// You defined [h, mi, sece] but then try to log [h, m, s]. The variables m and s don’t exist.

// Math.floor(se/60) gives total minutes, not minutes leftover after hours.

// se/3600 gives hours as a decimal, not seconds.

let se = 9040;

let h = Math.floor(se / 3600);           // hours
let mi = Math.floor((se % 3600) / 60);   // leftover minutes
let s = se % 60;                          // leftover seconds

console.log([h, mi, s].join(':'));        // "2:30:40"

// ✅ Explanation:

// % gives the remainder. So (se % 3600) is the seconds left after removing hours.

// Divide that by 60 to get minutes.

// Remaining % 60 gives seconds.

let totalSec = 9040;
let units = [3600, 60, 1]; // hours, minutes, seconds

let hms = units.map((unit, idx) => {
  if (idx === 0) return Math.floor(totalSec / unit);          // hours
  if (idx === 1) return Math.floor((totalSec % 3600) / unit); // minutes
  return totalSec % 60;                                       // seconds
});

console.log(hms.join(':')); // "2:30:40"

// Explanation:

// map iterates over [3600, 60, 1].

// idx === 0 → divide total seconds by 3600 to get hours.

// idx === 1 → take leftover seconds (% 3600) and divide by 60 for minutes.

// idx === 2 → leftover seconds.