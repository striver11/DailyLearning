// 🔹 for...in

// Iterates over the keys (property names / indexes) of an object.
// Returns keys as strings.
// Works for objects and arrays, but risky on arrays because it includes custom properties.
// Order is not guaranteed for objects.

// Example 1: Using for...in with an object


let person = { name: "Alice", age: 25, city: "Paris" };

for (let key in person) {
    console.log(key, ":", person[key]);
}


//output
// name : Alice
// age : 25
// city : Paris

let arr = ['a', 'b', 'c'];
arr.extra = "I am extra!";

for (let i in arr) {
    console.log(i, ":", arr[i]);
}

//output:
// 0 : a
// 1 : b
// 2 : c
// extra : I am extra!



// 🔹 for...of

// Iterates over the values of an iterable (arrays, strings, sets, maps).
// Works only on iterable objects.
// Ignores keys/properties — gives you direct values.
// Maintains order of iteration.

// Example 3: Using for...of with an array

let arr = ['a', 'b', 'c'];

for (let value of arr) {
    console.log(value);
}

//output
// a
// b
// c

// Example 4: Using for...of with a string

let str = "JS";

for (let ch of str) {
    console.log(ch);
}

//output
// J
// S

// Example 5: Using for...of with a Map

let map = new Map();
map.set("name", "Alice");
map.set("age", 25);

for (let [key, value] of map) {
    console.log(key, ":", value);
}


//ouput
// name : Alice
// age : 25



// 🔹 Side-by-Side   Comparison
// Feature	                  for...in (keys)	                         for...of (values)
// Works on Objects	        ✅ Yes	                                 ❌ No (error)
// Works on Arrays	            ⚠️ Yes (but risky, includes properties)	    ✅ Yes, safe
// Iterates	                Keys / Indexes	                                 Values
// Returns type	                String keys	                             Actual values
// Order guarantee	              ❌ Not always	                          ✅ Yes
// 🔹 Summary

// Use for...in → when you want to iterate keys/properties of an object.

// Use for...of → when you want to iterate values of arrays, strings, maps, sets.