const filter_rooms = (instructions, treasure_rooms) => {
 

  // Step 1: Count how many rooms point to each destination
  const incomingCount = {};
  const nextRoom = {}; // map each room to the room it points to

  for (let [src, dest] of instructions) {
    nextRoom[src] = dest; // record where each room points
    incomingCount[dest] = (incomingCount[dest] || 0) + 1;
  }

  console.log(incomingCount)

  // Step 2: Filter rooms that satisfy both conditions
  const result = [];
  for (let room in incomingCount) {
 console.log(nextRoom)
 console.log(nextRoom[room])
    if (
      incomingCount[room] >= 2 &&       // at least two rooms point to this room
      treasure_rooms.includes(nextRoom[room]) // this room points to a treasure room
    ) {
      result.push(room);
    }
  }

  return result;
};

// Test cases
const instructions_1 = [
  ["jasmin", "tulip"],
  ["lily", "tulip"],
  ["tulip", "tulip"],
  ["rose", "rose"],
  ["violet", "rose"],
  ["sunflower", "violet"],
  ["daisy", "violet"],
  ["iris", "violet"]
];

const instructions_2 = [
  ["jasmin", "tulip"],
  ["lily", "tulip"],
  ["tulip", "violet"],
  ["violet", "violet"]
];

const treasure_rooms_1 = ["lily", "tulip", "violet", "rose"];
const treasure_rooms_2 = ["lily", "jasmin", "violet"];
const treasure_rooms_3 = ["violet"];

// console.log(filter_rooms(instructions_1, treasure_rooms_1)); // ["tulip", "violet"]
console.log(filter_rooms(instructions_1, treasure_rooms_2)); // []
// console.log(filter_rooms(instructions_2, treasure_rooms_3)); // ["tulip"]


