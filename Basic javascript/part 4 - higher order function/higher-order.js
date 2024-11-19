// Magical Potion Brewery

// Ingredient list
const ingredients = [
    { name: 'Dragon Scale', potency: 5 },
    { name: 'Unicorn Hair', potency: 3 },
    { name: 'Phoenix Feather', potency: 7 },
    { name: 'Troll Toenail', potency: 1 },
    { name: 'Mermaid Tear', potency: 4 },
    { name: 'Fairy Dust', potency: 6 },
    { name: 'Goblin Blood', potency: 2 },
];

// #TODO 1: Create a higher-order function called 'potionMaker'
// This function should take a brewing method as an argument and return a new function
// The returned function should take an array of ingredients and apply the brewing method
function potionMaker(brewingMethod) {
    return function(ingredients) {
        return ingredients.reduce((total, ingredient) => {
            return total + brewingMethod(ingredient);
        }, 0);
    };
}

// Brewing methods
const standardBrew = (ingredient) => ingredient.potency;
const enhancedBrew = (ingredient) => ingredient.potency * 1.5;
const weakenedBrew = (ingredient) => ingredient.potency * 0.8;

// #TODO 2: Use the potionMaker to create three types of potions
const standardPotion = potionMaker(standardBrew);
const enhancedPotion = potionMaker(enhancedBrew);
const weakenedPotion = potionMaker(weakenedBrew);

// #TODO 3: Create a higher-order function called 'filterIngredients'
// This function should take a criteria function as an argument and return a new function
// The returned function should take an array of ingredients and filter them based on the criteria
function filterIngredients(criteria) {
    return function(ingredients) {
        return ingredients.filter(criteria);
    };
}

// Filter criteria
const highPotency = (ingredient) => ingredient.potency > 5;
const lowPotency = (ingredient) => ingredient.potency <= 3;

// #TODO 4: Use the filterIngredients to create two ingredient filters
const highPotencyFilter = filterIngredients(highPotency);
const lowPotencyFilter = filterIngredients(lowPotency);

// Test your functions
console.log("Standard Potion Strength:", standardPotion(ingredients)); // Expected: Sum of potencies
console.log("Enhanced Potion Strength:", enhancedPotion(ingredients)); // Expected: Sum of potencies * 1.5
console.log("Weakened Potion Strength:", weakenedPotion(ingredients)); // Expected: Sum of potencies * 0.8

console.log("High Potency Ingredients:", highPotencyFilter(ingredients)); // Ingredients with potency > 5
console.log("Low Potency Ingredients:", lowPotencyFilter(ingredients)); // Ingredients with potency <= 3

// #TODO 5: Create a function that combines filtering and potion making
// This function should take a filter and a brewing method, and return a new function
// The returned function should filter the ingredients and then brew the potion
function specialPotionMaker(filter, brewingMethod) {
    return function(ingredients) {
        const filteredIngredients = filter(ingredients);
        return potionMaker(brewingMethod)(filteredIngredients);
    };
}

// #TODO 6: Use the specialPotionMaker to create a potion that only uses high potency ingredients and enhances them
const superPotion = specialPotionMaker(highPotencyFilter, enhancedBrew);

console.log("Super Potion Strength:", superPotion(ingredients)); // Expected: Sum of (potency * 1.5) for ingredients with potency > 5

// Bonus Challenge:
// #TODO 7: Create a higher-order function that can chain multiple brewing methods
// This function should take any number of brewing methods and return a new brewing method that applies all of them in sequence
function chainBrewingMethods(...methods) {
    return function(ingredient) {
        return methods.reduce((currentPotency, method) => method({ ...ingredient, potency: currentPotency }), ingredient.potency);
    };
}

// #TODO 8: Use the chainBrewingMethods to create a complex brewing method and make a potion with it
const complexBrew = chainBrewingMethods(enhancedBrew, standardBrew, weakenedBrew);
const complexPotion = potionMaker(complexBrew);

console.log("Complex Potion Strength:", complexPotion(ingredients)); // Expected: Sum of chained brewing methods on each ingredient
