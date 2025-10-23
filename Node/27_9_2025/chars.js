let s = 'abc';   // required chars
let s1 = 'abcba';

let s1a = s1.split('');
let l = s1a.length;
let per = [];

// generate all substrings
for (let i = 0; i < l; i++) {
    let temp = [];
    for (let j = i; j < l; j++) {
        temp.push(s1a[j]);
        per.push(temp.join(''));
    }
}

console.log(per);

let count = 0;
for (let sub of per) {
    // check if substring contains ALL characters of s
    if ([...s].every(ch => sub.includes(ch))) {
        count++;
    }
}
console.log(count);
