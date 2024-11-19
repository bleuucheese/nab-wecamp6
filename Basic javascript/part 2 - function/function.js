// Magic Potion Maker Exercise

// Welcome to the Magical Potion Academy! 🧙‍♂️🧪

// #TODO 1: Create a function called 'mixIngredients' that takes two parameters: ingredient1 and ingredient2
// This function should return a string combining the two ingredients
// Example: mixIngredients("dragon scale", "unicorn hair") should return "dragon scale and unicorn hair"
function mixIngredients(ingredient1, ingredient2) {
    // Your code here
    return `${ingredient1} and ${ingredient2}`;
}

// Test your function
console.log(mixIngredients("dragon scale", "unicorn hair"));

// #TODO 2: Create a function called 'cauldronBubble' with no parameters
// This function should return a random number between 1 and 10 (inclusive)
// Hint: Use Math.random() and Math.floor()
function cauldronBubble() {
    // Your code here
    // Math.random() returns a number between 0 and 1 exclusive
    // Our formula:  Math.floor(Math.random() * (max - min + 1)) + min

    return Math.floor(Math.random() * 10) + 1;
}

// Test your function
console.log(cauldronBubble()); // Output: A random number between 1 and 10

// #TODO 3: Create a function called 'castSpell' that takes a spell name as a parameter
// This function should return a function that logs "Casting [spell name]!"
// Hint: This is a closure
function castSpell(spellName) {
    // Returning a function that remembers 'spellName'
    return function() {
        console.log(`Casting ${spellName}!`);
    };
}

// Test your function
let fireball = castSpell("Fireball");
fireball(); // Output: "Casting Fireball!"

// #TODO 4: Create an arrow function called 'measurePotion' that takes a number of ounces as a parameter
// This function should return "Small potion" if ounces < 3, "Medium potion" if ounces is between 3 and 6, and "Large potion" if ounces > 6
const measurePotion = (ounces) => {
    if (ounces < 3) {
        return "Small potion";
    } else if (ounces >= 3 && ounces <= 6) {
        return "Medium potion";
    } else {
        return "Large potion";
    }
};

// Test your function
console.log(measurePotion(2)); // Output: "Small potion"
console.log(measurePotion(4)); // Output: "Medium potion"
console.log(measurePotion(8)); // Output: "Large potion"

// #TODO 5: Create a function called 'potionEffects' that takes any number of effects as parameters
// This function should return a string listing all the effects
// Hint: Use rest parameters and join()
function potionEffects(...effects) {
    // Joining the effects into a single string
    return effects.join(", ");
}

// Test your function
console.log(potionEffects("flying", "invisibility", "super strength")); // Output: "flying, invisibility, super strength"

// #TODO 6: Create an immediately invoked function expression (IIFE) that logs "The potion is ready!"
(function() {
    console.log("The potion is ready!");
})(); // Output: "The potion is ready!"

// #TODO 7: Create a function called 'createPotion' that takes a name parameter and returns an object
// The object should have properties: name, ingredients (an empty array), and an addIngredient method
// The addIngredient method should add an ingredient to the ingredients array
function createPotion(name) {
    return {
        name: name,
        ingredients: [],
        addIngredient: function(ingredient) {
            this.ingredients.push(ingredient);
        },
        // Extended: use ...rest to add multiple ingredients at once
        addIngredients: function(...ingredients) {
            this.ingredients.push(...ingredients);
        }
    };
}

// Test your function
let invisibilityPotion = createPotion("Invisibility");
invisibilityPotion.addIngredient("moonstone");
invisibilityPotion.addIngredient("shadow essence");
console.log(invisibilityPotion);
/* Output:
{
  name: 'Invisibility',
  ingredients: [ 'moonstone', 'shadow essence' ],
  addIngredient: [Function: addIngredient],
  addIngredients: [Function: addIngredients]
}
*/

// Extended functionality: Adding multiple ingredients at once
invisibilityPotion.addIngredients("bat wing", "ghost dust");
console.log(invisibilityPotion);
/* Output:
{
  name: 'Invisibility',
  ingredients: [ 'moonstone', 'shadow essence', 'bat wing', 'ghost dust' ],
  addIngredient: [Function: addIngredient],
  addIngredients: [Function: addIngredients]
}
*/

console.log("Congratulations! You've completed the Magic Potion Maker exercise!");
// Output: "Congratulations! You've completed the Magic Potion Maker exercise!"