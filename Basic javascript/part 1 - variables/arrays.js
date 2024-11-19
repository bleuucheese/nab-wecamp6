// Party Planning Array Exercise

// Let's plan a party using arrays!

// Guest list
let guests = ['Alice', 'Bob', 'Charlie', 'David'];

// #TODO 1: Add 'Eve' to the end of the guest list
// Hint: Use the push() method
guests.push('Eve');

console.log("Updated guest list:", guests);

// #TODO 2: Remove the first person from the list (they can't make it)
// Hint: Use the shift() method
guests.shift();

console.log("Guest list after removal:", guests);

// Party supplies
let supplies = ['balloons', 'cake', 'cups', 'streamers'];

// #TODO 3: Check if 'cups' is in the supplies list
// Hint: Use the includes() method
let hasCups = supplies.includes('cups');
console.log("Do we have cups?", hasCups);

// #TODO 4: Replace 'streamers' with 'party hats' in the supplies array
// Hint: Find the index of 'streamers' and then use that index to replace it
let streamersIndex = supplies.indexOf('streamers');
supplies[streamersIndex] = 'party hats';

// Use map to replace 'streamers' with 'party hats' in case there are multiple occurrences
// supplies = supplies.map(item => item === 'streamers' ? 'party hats' : item);



console.log("Updated supplies:", supplies);