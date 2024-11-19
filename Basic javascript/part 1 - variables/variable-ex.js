// Welcome to the Virtual Pet Creator!
// Follow the TODO instructions to bring your pet to life!

// #TODO 1: Declare a variable named 'petName' using 'let' and assign it your pet's name
let petName = 'Marcel';
// #TODO 2: Declare a variable named 'petType' using 'const' and assign it the type of your pet (e.g., "dog", "cat", "dragon")
const petType = 'bear';
// #TODO 3: Declare a variable named 'petAge' using 'let' and assign it your pet's age
let petAge = 23;
// #TODO 4: Declare a variable named 'petHappy' using 'let' and set it to true or false
let petHappy = true;
// #TODO 5: Create a variable named 'petFood' and assign it the number of food items your pet has
let petFood = 69;
// Don't modify this function, it uses your variables!
function displayPetInfo() {
    console.log(`Name: ${petName}`);
    console.log(`Type: ${petType}`);
    console.log(`Age: ${petAge}`);
    console.log(`Is Happy: ${petHappy}`);
    console.log(`Food Items: ${petFood}`);
}

// Display initial pet info
console.log("Initial Pet Info:");
displayPetInfo();

// #TODO 6: Increase your pet's age by 1
petAge++;
// #TODO 7: Change your pet's happiness to the opposite of what it was
petHappy = !petHappy;
// #TODO 8: Increase the pet's food by 2
petFood += 2;
// Display updated pet info
console.log("\nUpdated Pet Info:");
displayPetInfo();

// #TODO 9: Try to change the petType - what happens? (Uncomment the next line)
// Outputs: TypeError: Assignment to constant variable.
// petType = "unicorn";

// #TODO 10: Declare a new variable named 'petColor' using 'let' and assign it a color
let petColor = 'white';

// Final pet info
console.log("\nFinal Pet Info:");
displayPetInfo();
console.log(`Color: ${petColor}`);

// Bonus Challenge:
// #TODO 11: Create a template literal that describes your pet using all the variables
let petDescription = `My pet ${petName} is a ${petAge}-year-old ${petColor} ${petType}. ` +
                     `It is ${petHappy ? "happy" : "not happy"} and has ${petFood} food items.`;

console.log("\nPet Description:");
console.log(petDescription);