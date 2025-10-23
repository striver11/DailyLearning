let a=[['a',6],['a',4],['b',4],['b',6],['a',6],['c',4]]

const g=Map.groupBy(a,le=>le[1]===6)

// Map(2) {
//   true => [ [ 'a', 6 ], [ 'b', 6 ], [ 'a', 6 ] ],
//   false => [ [ 'a', 4 ], [ 'b', 4 ], [ 'c', 4 ] ]
// }

console.log(g)

const trueg=g.get(true)

console.log(trueg)
[ [ 'a', 6 ], [ 'b', 6 ], [ 'a', 6 ] ]

// let sett=new Set(trueg.keys())
// console.log(sett)

let set =[...new Set(trueg.map(num=>num[0][0]))]
console.log(set)
[ 'a', 'b' ]