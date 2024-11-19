// Welcome to the Hogwarts School of Witchcraft and Wizardry!
// Let's explore magical scopes in JavaScript!

// Global scope - accessible everywhere
let schoolName = "Hogwarts";

// #TODO 1: Create a function called sortingHat
// It should have a local variable houseName and randomly assign it one of the four houses
// (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin)
// Return the houseName
// Hint: Use Math.random() to generate a random number
function sortingHat() {
    // Your code here
    let houseName = "";
    let houseNames = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    // To get a random number within a range of numbers, use Math.floor(Math.random() * (max - min + 1)) + min
    // In this case 0 is the min and 3 is the max


    let randomIndex = Math.floor(Math.random() * houseNames.length);
    return houseNames[randomIndex];
}

// Test sortingHat function
console.log(`The Sorting Hat placed you in ${sortingHat()}!`);

// #TODO 2: Try to access houseName here
// What happens? Why?: ReferenceError: houseName is not defined
// console.log(houseName);

// #TODO 3: Create a function called castSpell
// It should take a parameter 'spell'
// Inside the function, create a local variable 'message' that uses the spell parameter
// Return the message
// Hint: Use a template literal
function castSpell(spell) {
    // Your code here
    let message = `You cast the spell: ${spell}`;
    return message;
}

// Test castSpell function
console.log(castSpell("Expelliarmus"));

// #TODO 4: Create a function called learningYears
// Inside this function, use let to create variables for each year at Hogwarts
// (firstYear, secondYear, thirdYear, fourthYear)
// Assign each year a task (like "Learn Charms", "Study Potions", etc.)
// Use console.log to print each year and its task
// Hint: Demonstrate block scope by using if statements
function learningYears() {
    // Your code here
    // demonstrate block scope by using if statements
    let firstYear = "Learn Charms";
    if (firstYear) {
        console.log(`First Year: ${firstYear}`);
    }

    let secondYear = "Study Potions";
    if (secondYear) {
        console.log(`Second Year: ${secondYear}`);
    }

    let thirdYear = "Practice Transfiguration";
    if (thirdYear) {
        console.log(`Third Year: ${thirdYear}`);
    }

    let fourthYear = "Master Defense Against the Dark Arts";
    if (fourthYear) {
        console.log(`Fourth Year: ${fourthYear}`);
    }

}

// Test learningYears function
learningYears();

// #TODO 5: Create a function called secretSpell
// Inside this function, declare a variable called 'spellName' using var
// Create an inner function called revealSpell that tries to console.log spellName
// Call revealSpell inside secretSpell
// Return the inner function revealSpell
// Demonstrate closure by assigning secretSpell() to a variable and then calling it
function secretSpell() {
    // Your code here
    var spellName = "Expecto Patronum";
    return function revealSpell() {
        console.log(spellName);
    }
}

// Test secretSpell function
let revealSecretSpell = secretSpell();
revealSecretSpell();

// #TODO 6: Create an Immediately Invoked Function Expression (IIFE)
// This IIFE should console.log a message about a secret chamber in Hogwarts
// Hint: (function() { ... })();
// Your code here

(function() {
    console.log("There is a secret chamber in Hogwarts!");
})();

console.log("Congratulations! You've mastered the scopes of Hogwarts!");