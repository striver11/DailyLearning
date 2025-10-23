function filterRooms(instructions, treasureRooms) {
    const incomingCount = {};
    const nextRoom = {};

    // Count incoming instructions and map nextRoom for each source
    for (const [src, dest] of instructions) {
        incomingCount[dest] = (incomingCount[dest] || 0) + 1;
        nextRoom[src] = dest;
    }

    

    const treasureSet = new Set(treasureRooms);
    const result = [];

    console.log(incomingCount)
    console.log("88888888888888888"+nextRoom)

    // Check each room receiving incoming instructions
    for (const room in incomingCount) {
        if (incomingCount[room] >= 2) {
            const next = nextRoom[room];
            if (next && treasureSet.has(next)) {
                result.push(room);
            }
        }
    }
    return result;
}

// Test cases
const instructions1 = [
    ["jasmin", "tulip"],
    ["lily", "tulip"],
    ["tulip", "tulip"],
    ["rose", "rose"],
    ["violet", "rose"],
    ["sunflower", "violet"],
    ["daisy", "violet"],
    ["iris", "violet"]
];
const treasureRooms1 = ["lily", "tulip", "violet", "rose"];
const treasureRooms2 = ["lily", "jasmin", "violet"];

const instructions2 = [
    ["jasmin", "tulip"],
    ["lily", "tulip"],
    ["tulip", "violet"],
    ["violet", "violet"]
];
const treasureRooms3 = ["violet"];

console.log(filterRooms(instructions1, treasureRooms1)); // ["tulip", "violet"]
// console.log(filterRooms(instructions1, treasureRooms2)); // []
// console.log(filterRooms(instructions2, treasureRooms3)); // ["tulip"]
