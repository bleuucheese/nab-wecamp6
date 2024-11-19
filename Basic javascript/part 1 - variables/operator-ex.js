// Welcome to the Lemonade Stand Simulator!
// Follow the TODO instructions to run your lemonade business!

// Initial resources
let lemons = 20;
let sugar = 15;
let water = 50;
let cups = 30;
let money = 10;

// Prices and costs
const lemonadePrice = 2;
const costPerLemonade = 0.5;

// #TODO 1: Use the addition operator to add 5 more lemons to your inventory
lemons += 5;
// #TODO 2: Use the multiplication operator to double your sugar supply
sugar *= 2;
// #TODO 3: Use the division operator to split your water supply into 5 equal parts.
// Store the result in a new variable called 'waterPerPitcher'
let waterPerPitcher = water / 5;
// #TODO 4: Use the modulus operator to find out how many cups will be left if you use whole sets of 6
let cupsLeftOver = cups % 6;
// Display inventory
console.log("Inventory:");
console.log(`Lemons: ${lemons}`);
console.log(`Sugar: ${sugar}`);
console.log(`Water: ${water}`);
console.log(`Cups: ${cups}`);
console.log(`Money: $${money}`);
console.log(`Water per pitcher: ${waterPerPitcher}`);
console.log(`Cups left over: ${cupsLeftOver}`);

// Simulation of a day's sales
let lemonadesSold = 25;

// #TODO 5: Use the subtraction operator to decrease your resources based on lemonades sold
// Each lemonade uses: 1 lemon, 1 sugar, 2 water, 1 cup
lemons -= lemonadesSold * 1;
sugar -= lemonadesSold * 1;
water -= lemonadesSold * 2;
cups -= lemonadesSold * 1;

// #TODO 6: Use the addition operator and multiplication operator to calculate your earnings and add them to your money
let earnings = lemonadePrice * lemonadesSold;
// #TODO 7: Use the multiplication operator to calculate the total cost of the lemonades sold
let totalCost = costPerLemonade * lemonadesSold;
// #TODO 8: Use the subtraction operator to subtract the cost from your money
let profit = earnings - totalCost;
// #TODO 9: Use comparison operators to check if you've made a profit
let profitMesage = '';
if (profit > 0) {
    profitMessage = "Profit!";
}
else {
    profitMessage = "Loss!";
}
// #TODO 10: Use the ternary operator to set a message variable to "Profit!" if you've made money, or "Loss!" if you haven't
message = profit > 0 ? 'Profit!' : 'Loss!';
// Display results
console.log("\nAfter a day of sales:");
console.log(`Lemons: ${lemons}`);
console.log(`Sugar: ${sugar}`);
console.log(`Water: ${water}`);
console.log(`Cups: ${cups}`);
console.log(`Money: $${money}`);
console.log(`Profit status: ${message}`);

// #TODO 11: Use the logical AND operator to check if you have enough resources for 10 more lemonades
let canMakeTenMore = lemons >= 10*1 && sugar >= 10*1 && water >= 10 *2 && cups >= 10 * 1;
console.log(`Can make 10 more lemonades: ${canMakeTenMore}`);

// Bonus Challenge:
// #TODO 12: Use the exponentiation operator to calculate how many lemonades you can theoretically make if you triple your sales every day for 5 days
let potentialSales = lemonadesSold * 3 ** 5;
console.log(`Potential sales after 5 days of tripling: ${potentialSales}`);