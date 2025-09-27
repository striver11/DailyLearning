JavaScript Array Methods Complete Cheat Sheet
Group 1: Brave New Angry
[Bracket[], new Array(), at()]

[] (Array Literal)
Syntax: [element0, element1, ..., elementN] → Array Definition: Creates a new array with specified elements. Most common way to create arrays.

const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];
new Array()
Syntax: new Array(element0, element1, ..., elementN) or new Array(arrayLength) → Array Definition: Constructor to create arrays. If single number passed, creates empty array with that length. Otherwise creates array with elements.

const arr1 = new Array(3); // [empty × 3]
const arr2 = new Array(1, 2, 3); // [1, 2, 3]
const arr3 = new Array('hello'); // ['hello']
at()
Syntax: array.at(index) → element | undefined Definition: Returns element at specified index. Accepts negative indices (counts from end). Returns undefined if index out of bounds.

const arr = [10, 20, 30, 40, 50];
console.log(arr.at(0));   // 10
console.log(arr.at(-1));  // 50 (last element)
console.log(arr.at(-2));  // 40 (second to last)
console.log(arr.at(10));  // undefined
Group 2: Cat Constructor Copy Every Entry Fill
[concat(), constructor, copyWithin(), every(), entries(), fill()]

concat()
Syntax: array.concat(value0, value1, ..., valueN) → Array Definition: Returns new array with elements from original array plus concatenated values/arrays. Does not modify original array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const result = arr1.concat(arr2, 6, [7, 8]);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr1);   // [1, 2, 3] (unchanged)
constructor
Syntax: array.constructor → Function Definition: Property that returns the Array constructor function. Used to identify array type or create new arrays.

const arr = [1, 2, 3];
console.log(arr.constructor === Array); // true
const newArr = new arr.constructor(4, 5, 6);
console.log(newArr); // [4, 5, 6]
copyWithin()
Syntax: array.copyWithin(target, start, end) → Array Definition: Shallow copies part of array to another location in same array. Modifies original array. End parameter is exclusive.

const arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 3, 5); // Copy elements 3-4 to positions 0-1
console.log(arr); // [4, 5, 3, 4, 5, 6]

const arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.copyWithin(2, 0); // Copy from index 0 to end, paste at index 2
console.log(arr2); // ['a', 'b', 'a', 'b', 'c']
every()
Syntax: array.every(callback(element, index, array), thisArg) → boolean Definition: Tests whether ALL elements pass the test function. Returns true if all elements pass, false otherwise. Short-circuits on first false.

const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

const ages = [25, 30, 35, 17, 40];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // false
entries()
Syntax: array.entries() → Iterator Definition: Returns new Array Iterator with key/value pairs for each index. Each iteration returns [index, value].

const fruits = ['apple', 'banana', 'orange'];
const iterator = fruits.entries();

for (const [index, value] of iterator) {
  console.log(index, value);
}
// 0 'apple'
// 1 'banana' 
// 2 'orange'

// Or convert to array
console.log([...fruits.entries()]); // [[0, 'apple'], [1, 'banana'], [2, 'orange']]
fill()
Syntax: array.fill(value, start, end) → Array Definition: Fills all elements from start to end index with static value. Modifies original array. End is exclusive.

const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0); // Fill entire array
console.log(arr1); // [0, 0, 0, 0, 0]

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 2, 4); // Fill index 2-3 with 9
console.log(arr2); // [1, 2, 9, 9, 5]
Group 3: Filthy Four Foxes Find Flat Map
[filter(), find(), findIndex(), findLast(), findLastIndex(), flat(), flatMap()]

filter()
Syntax: array.filter(callback(element, index, array), thisArg) → Array Definition: Creates new array with all elements that pass the test function. Returns empty array if no elements pass.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const people = [{name: 'John', age: 25}, {name: 'Jane', age: 17}, {name: 'Bob', age: 30}];
const adults = people.filter(person => person.age >= 18);
console.log(adults); // [{name: 'John', age: 25}, {name: 'Bob', age: 30}]
find()
Syntax: array.find(callback(element, index, array), thisArg) → element | undefined Definition: Returns FIRST element that passes test function. Returns undefined if no element found.

const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 3, name: 'Bob'}];
const user = users.find(u => u.id === 2);
console.log(user); // {id: 2, name: 'Jane'}

const numbers = [1, 3, 5, 8, 9];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8
findIndex()
Syntax: array.findIndex(callback(element, index, array), thisArg) → number Definition: Returns INDEX of first element that passes test function. Returns -1 if no element found.

const numbers = [1, 3, 5, 8, 9, 12];
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 3

const people = ['Alice', 'Bob', 'Charlie'];
const bobIndex = people.findIndex(name => name === 'Bob');
console.log(bobIndex); // 1
findLast()
Syntax: array.findLast(callback(element, index, array), thisArg) → element | undefined Definition: Returns LAST element that passes test function, searching backwards. Returns undefined if no element found.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven); // 8

const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}, {type: 'fruit', name: 'banana'}];
const lastFruit = items.findLast(item => item.type === 'fruit');
console.log(lastFruit); // {type: 'fruit', name: 'banana'}
findLastIndex()
Syntax: array.findLastIndex(callback(element, index, array), thisArg) → number Definition: Returns INDEX of last element that passes test function, searching backwards. Returns -1 if no element found.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(lastEvenIndex); // 7

const scores = [85, 92, 78, 95, 88, 96];
const lastHighScoreIndex = scores.findLastIndex(score => score >= 95);
console.log(lastHighScoreIndex); // 5
flat()
Syntax: array.flat(depth) → Array Definition: Creates new array with sub-arrays flattened to specified depth (default 1). Use Infinity for complete flattening.

const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]

const deepNested = [1, [2, [3, [4, [5]]]]];
console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4, 5]
flatMap()
Syntax: array.flatMap(callback(element, index, array), thisArg) → Array Definition: Maps each element using callback, then flattens result by one level. Equivalent to map().flat().

const sentences = ['Hello world', 'How are you', 'Fine thanks'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'How', 'are', 'you', 'Fine', 'thanks']

const numbers = [1, 2, 3, 4];
const doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled); // [1, 2, 2, 4, 3, 6, 4, 8]
Group 4: forEach Keys From LastIndexOf Array Includes IndexOf Join
[forEach(), keys(), from(), lastIndexOf(), isArray(), includes(), indexOf(), join()]

forEach()
Syntax: array.forEach(callback(element, index, array), thisArg) → undefined Definition: Executes callback for each array element. Returns undefined. Cannot break out early (use for...of or find() instead).

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: orange

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10
keys()
Syntax: array.keys() → Iterator Definition: Returns new Array Iterator containing keys (indices) for each index in array.

const fruits = ['apple', 'banana', 'orange'];
const keys = fruits.keys();

for (const key of keys) {
  console.log(key); // 0, 1, 2
}

console.log([...fruits.keys()]); // [0, 1, 2]
Array.from()
Syntax: Array.from(arrayLike, mapFunction, thisArg) → Array Definition: Static method that creates new Array from array-like or iterable object. Optional mapping function applied to each element.

// From string
const chars = Array.from('hello');
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

// From Set
const numbers = Array.from(new Set([1, 2, 3, 2, 1]));
console.log(numbers); // [1, 2, 3]

// With mapping function
const doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]

// From NodeList
const divs = Array.from(document.querySelectorAll('div'));
lastIndexOf()
Syntax: array.lastIndexOf(searchElement, fromIndex) → number Definition: Returns last index of element in array, or -1 if not found. Searches backwards from fromIndex.

const numbers = [1, 2, 3, 2, 4, 2];
console.log(numbers.lastIndexOf(2));    // 5
console.log(numbers.lastIndexOf(2, 3)); // 3 (search from index 3 backwards)
console.log(numbers.lastIndexOf(5));    // -1

const fruits = ['apple', 'banana', 'apple', 'orange'];
console.log(fruits.lastIndexOf('apple')); // 2
Array.isArray()
Syntax: Array.isArray(value) → boolean Definition: Static method that determines whether passed value is an Array. Most reliable way to check for arrays.

console.log(Array.isArray([1, 2, 3]));        // true
console.log(Array.isArray('hello'));          // false
console.log(Array.isArray({length: 3}));      // false
console.log(Array.isArray(new Array(5)));     // true

function checkType(value) {
  return Array.isArray(value) ? 'array' : typeof value;
}
includes()
Syntax: array.includes(searchElement, fromIndex) → boolean Definition: Determines whether array includes certain element. Uses SameValueZero comparison (handles NaN correctly).

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));     // true
console.log(fruits.includes('grape'));      // false
console.log(fruits.includes('apple', 1));   // false (start search from index 1)

const numbers = [1, 2, NaN, 4];
console.log(numbers.includes(NaN)); // true (unlike indexOf)
indexOf()
Syntax: array.indexOf(searchElement, fromIndex) → number Definition: Returns first index of element in array, or -1 if not found. Uses strict equality (===).

const colors = ['red', 'blue', 'green', 'blue'];
console.log(colors.indexOf('blue'));      // 1
console.log(colors.indexOf('blue', 2));   // 3 (start search from index 2)
console.log(colors.indexOf('yellow'));    // -1

const numbers = [1, 2, NaN, 4];
console.log(numbers.indexOf(NaN)); // -1 (cannot find NaN with strict equality)
join()
Syntax: array.join(separator) → string Definition: Joins all array elements into string using specified separator (default comma). Undefined/null elements become empty strings.

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join());        // "apple,banana,orange"
console.log(fruits.join(' - '));   // "apple - banana - orange"
console.log(fruits.join(''));      // "applebananaorange"

const mixed = [1, null, 'hello', undefined, true];
console.log(mixed.join(' | ')); // "1 |  | hello |  | true"
Group 5: Prototype Lengthy Map Of Population
[prototype, length, map(), of(), pop()]

prototype
Syntax: Array.prototype → Object Definition: Property representing the Array prototype object. Allows adding methods to all Array instances.

// Adding custom method to all arrays
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

const numbers = [1, 2, 3, 4, 5];
numbers.shuffle();
console.log(numbers); // Random order like [3, 1, 5, 2, 4]
length
Syntax: array.length → number Definition: Property representing number of elements in array. Can be set to truncate or extend array.

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3

// Truncate array
fruits.length = 2;
console.log(fruits); // ['apple', 'banana']

// Extend array (creates empty slots)
fruits.length = 5;
console.log(fruits); // ['apple', 'banana', empty × 3]
console.log(fruits.length); // 5
map()
Syntax: array.map(callback(element, index, array), thisArg) → Array Definition: Creates new array with results of calling callback on every element. New array has same length as original.

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

const people = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];
const names = people.map(person => person.name);
console.log(names); // ['John', 'Jane']

const withIndex = ['a', 'b', 'c'].map((item, index) => `${index}-${item}`);
console.log(withIndex); // ['0-a', '1-b', '2-c']
Array.of()
Syntax: Array.of(element0, element1, ..., elementN) → Array Definition: Static method that creates Array with variable number of arguments as elements. Unlike Array constructor, always creates array with elements.

const arr1 = Array.of(7);          // [7]
const arr2 = new Array(7);         // [empty × 7]

const numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

const mixed = Array.of('hello', 42, true, null);
console.log(mixed); // ['hello', 42, true, null]
pop()
Syntax: array.pop() → element | undefined Definition: Removes and returns last element from array. Modifies original array. Returns undefined if array empty.

const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'
console.log(fruits);    // ['apple', 'banana']

const empty = [];
console.log(empty.pop()); // undefined

// Common use in stack operations
const stack = [1, 2, 3];
while (stack.length > 0) {
  console.log(stack.pop()); // 3, 2, 1
}
Group 6: Right Shift Push Reduces Some Reverse Shift Slice
[reduceRight(), shift(), push(), reduce(), some(), reverse(), slice()]

reduceRight()
Syntax: array.reduceRight(callback(accumulator, currentValue, index, array), initialValue) → any Definition: Reduces array to single value by calling callback on each element from RIGHT TO LEFT. Optional initial value.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduceRight((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// String concatenation (right to left)
const words = ['world', ' ', 'hello'];
const sentence = words.reduceRight((acc, curr) => acc + curr);
console.log(sentence); // 'hello world'

// Flattening arrays (right to left)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduceRight((acc, curr) => acc.concat(curr), []);
console.log(flat); // [5, 6, 3, 4, 1, 2]
shift()
Syntax: array.shift() → element | undefined Definition: Removes and returns first element from array. Modifies original array and shifts remaining elements down. Returns undefined if empty.

const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits);     // ['banana', 'orange']

// Queue operations
const queue = [1, 2, 3, 4];
while (queue.length > 0) {
  console.log(queue.shift()); // 1, 2, 3, 4
}
push()
Syntax: array.push(element1, element2, ..., elementN) → number Definition: Adds elements to end of array. Modifies original array. Returns new length of array.

const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange', 'grape');
console.log(newLength); // 4
console.log(fruits);    // ['apple', 'banana', 'orange', 'grape']

// Stack operations
const stack = [];
stack.push(1);
stack.push(2, 3, 4);
console.log(stack); // [1, 2, 3, 4]
reduce()
Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue) → any Definition: Reduces array to single value by calling callback on each element from LEFT TO RIGHT. Optional initial value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Find maximum
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc);
console.log(max); // 5

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // {apple: 3, banana: 2, orange: 1}
some()
Syntax: array.some(callback(element, index, array), thisArg) → boolean Definition: Tests whether AT LEAST ONE element passes test function. Returns true if any element passes, false if none pass. Short-circuits on first true.

const numbers = [1, 3, 5, 8, 9];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

const ages = [16, 17, 15, 14];
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // false

const words = ['hello', 'world', 'javascript'];
const hasLongWord = words.some(word => word.length > 5);
console.log(hasLongWord); // true
reverse()
Syntax: array.reverse() → Array Definition: Reverses array IN PLACE. Modifies original array and returns reference to same array.

const numbers = [1, 2, 3, 4, 5];
const reversed = numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]
console.log(reversed); // [5, 4, 3, 2, 1] (same reference)

// To avoid modifying original, use toReversed() or spread operator
const original = [1, 2, 3];
const reversedCopy = [...original].reverse();
console.log(original);     // [1, 2, 3] (unchanged)
console.log(reversedCopy); // [3, 2, 1]
slice()
Syntax: array.slice(start, end) → Array Definition: Returns shallow copy of portion of array from start to end (exclusive). Negative indices count from end. Does not modify original.

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruits.slice(1, 3));    // ['banana', 'orange']
console.log(fruits.slice(2));       // ['orange', 'grape', 'kiwi']
console.log(fruits.slice(-2));      // ['grape', 'kiwi']
console.log(fruits.slice(-3, -1));  // ['orange', 'grape']

// Copy entire array
const copy = fruits.slice();
console.log(copy); // ['apple', 'banana', 'orange', 'grape', 'kiwi']
Group 7: Sort Splice ToReversed Sorted Spliced ToString With ValuesOf Unshift
[sort(), splice(), toReversed(), toSorted(), toSpliced(), toString(), with(), valueOf(), unshift()]

sort()
Syntax: array.sort(compareFunction) → Array Definition: Sorts elements IN PLACE. Default sorts by UTF-16 string conversion. Custom compare function for numeric/custom sorting.

// Default string sorting
const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

// Numeric sorting (requires compare function)
const numbers = [10, 2, 1, 20];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 2, 10, 20]

// Descending
const desc = [1, 5, 3, 9].sort((a, b) => b - a);
console.log(desc); // [9, 5, 3, 1]

// Object sorting
const people = [{name: 'John', age: 25}, {name: 'Jane', age: 20}];
people.sort((a, b) => a.age - b.age);
console.log(people); // [{name: 'Jane', age: 20}, {name: 'John', age: 25}]
splice()
Syntax: array.splice(start, deleteCount, item1, item2, ...) → Array Definition: Changes array by removing/replacing existing elements and/or adding new ones IN PLACE. Returns array of deleted elements.

const fruits = ['apple', 'banana', 'orange', 'grape'];

// Remove 2 elements starting at index 1
const removed = fruits.splice(1, 2);
console.log(removed); // ['banana', 'orange']
console.log(fruits);  // ['apple', 'grape']

// Add elements without removing
const colors = ['red', 'blue'];
colors.splice(1, 0, 'green', 'yellow'); // Insert at index 1
console.log(colors); // ['red', 'green', 'yellow', 'blue']

// Replace elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99); // Replace 1 element at index 2
console.log(numbers); // [1, 2, 99, 4, 5]
toReversed()
Syntax: array.toReversed() → Array Definition: Returns NEW array with elements reversed. Does NOT modify original array. Modern alternative to reverse().

const original = [1, 2, 3, 4, 5];
const reversed = original.toReversed();
console.log(original); // [1, 2, 3, 4, 5] (unchanged)
console.log(reversed); // [5, 4, 3, 2, 1]

const words = ['hello', 'world', 'javascript'];
const reversedWords = words.toReversed();
console.log(reversedWords); // ['javascript', 'world', 'hello']
toSorted()
Syntax: array.toSorted(compareFunction) → Array Definition: Returns NEW sorted array. Does NOT modify original array. Modern alternative to sort().

const original = [3, 1, 4, 1, 5];
const sorted = original.toSorted();
console.log(original); // [3, 1, 4, 1, 5] (unchanged)
console.log(sorted);   // [1, 1, 3, 4, 5]

const numbers = [10, 2, 30, 4];
const numericSort = numbers.toSorted((a, b) => a - b);
console.log(numericSort); // [2, 4, 10, 30]

const people = [{name: 'Bob', age: 30}, {name: 'Alice', age: 25}];
const sortedByAge = people.toSorted((a, b) => a.age - b.age);
console.log(sortedByAge); // [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
toSpliced()
Syntax: array.toSpliced(start, deleteCount, item1, item2, ...) → Array Definition: Returns NEW array with some elements removed/replaced and/or new elements added. Does NOT modify original. Modern alternative to splice().

const original = ['apple', 'banana', 'orange', 'grape'];

// Remove elements
const removed = original.toSpliced(1, 2);
console.log(original); // ['apple', 'banana', 'orange', 'grape'] (unchanged)
console.log(removed);  // ['apple', 'grape']

// Add elements
const colors = ['red', 'blue'];
const withInserted = colors.toSpliced(1, 0, 'green', 'yellow');
console.log(withInserted); // ['red', 'green', 'yellow', 'blue']

// Replace elements
const numbers = [1, 2, 3, 4, 5];
const replaced = numbers.toSpliced(2, 1, 99, 100);
console.log(replaced); // [1, 2, 99, 100, 4, 5]
toString()
Syntax: array.toString() → string Definition: Returns string representation of array elements separated by commas. Equivalent to join(',').

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString()); // "apple,banana,orange"

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // "1,2,3,4,5"

const mixed = [1, 'hello', true, null, undefined];
console.log(mixed.toString()); // "1,hello,true,,"

// Nested arrays are also converted
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.toString()); // "1,2,3,4,5,6"
with()
Syntax: array.with(index, value) → Array Definition: Returns NEW array with element at given index replaced with new value. Does NOT modify original array.

const original = ['apple', 'banana', 'orange'];
const modified = original.with(1, 'grape');
console.log(original); // ['apple', 'banana', 'orange'] (unchanged)
console.log(modified); // ['apple', 'grape', 'orange']

// Works with negative indices
const numbers = [1, 2, 3, 4, 5];
const changed = numbers.with(-1, 99); // Change last element
console.log(changed); // [1, 2, 3, 4, 99]

// Chaining is possible
const result = [1, 2, 3].with(0, 10).with(2, 30);
console.log(result); // [10, 2, 30]
valueOf()
Syntax: array.valueOf() → Array Definition: Returns primitive value of array (the array itself). Rarely used directly - called automatically during type conversion.

const arr = [1, 2, 3];
console.log(arr.valueOf()); // [1, 2, 3]
console.log(arr.valueOf() === arr); // true (same reference)

// Mostly used internally during type coercion
const result = [1, 2] + [3, 4]; // Calls valueOf() then toString()
console.log(result); // "1,23,4"
unshift()
Syntax: array.unshift(element1, element2, ..., elementN) → number Definition: Adds elements to beginning of array. Modifies original array and shifts existing elements up. Returns new length.

const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');
console.log(newLength); // 3
console.log(fruits);    // ['apple', 'banana', 'orange']

// Add multiple elements
const numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers); // [1, 2, 3, 4, 5]

// Common pattern with shift/unshift for queue operations
const queue = [];
queue.unshift('first');
queue.unshift('second');
console.log(queue.shift()); // 'second' (LIFO - Last In, First Out)
Quick Reference Summary
Mutating Methods (modify original array):
copyWithin(), fill(), pop(), push(), reverse(), shift(), sort(), splice(), unshift()

Non-Mutating Methods (return new array/value):
at(), concat(), every(), filter(), find(), findIndex(), findLast(), findLastIndex(), flat(), flatMap(), includes(), indexOf(), join(), lastIndexOf(), map(), reduce(), reduceRight(), slice(), some(), toString(), valueOf()

New Immutable Methods (ES2023):
toReversed(), toSorted(), toSpliced(), with()

Iterator Methods:
entries(), keys(), values() (not covered but returns iterator of values)

Static Methods:
Array.from(), Array.isArray(), Array.of()

Properties:
constructor, length, prototype