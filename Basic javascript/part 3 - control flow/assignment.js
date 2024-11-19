// Exercise: Weather Clothing Advisor

// In this exercise, you'll create a function that suggests what to wear based on the weather conditions.

function suggestClothing(temperature, isRaining) {
    let clothing = [];
 
    // TODO 1: Check the temperature and suggest appropriate clothing
    // Hint: Use if-else statements to check different temperature ranges
    // For example:
    // - If temperature is above 25°C, suggest "light clothing"
    // - If temperature is between 15°C and 25°C, suggest "medium clothing"
    // - If temperature is below 15°C, suggest "warm clothing"
   
    // Your code here
    if (temperature > 25) {
        console.log('You should wear light clothing!');
        
    }
    else if (temperature >= 15 && temperature <= 25) {
        console.log('You should wear medium clothing!');
        
    }
    else {
        console.log('You should wear warm clothing!');
     
    }

   
    // TODO 2: Check if it's raining and suggest an umbrella
    // Hint: Use an if statement to check the isRaining boolean
   
    // Your code here
   if (isRaining) {
       console.log("Don't forget your umbrella!");
    }
 
    // TODO 3: Use a for loop to add "sunscreen" to the clothing array if the temperature is above 20°C
    // Hint: The loop should run 3 times to emphasize the importance of sunscreen
   
    // Your code here
   if (temperature > 20) {
       for (let i = 0; i < 3; i++) {
           clothing.push("sunscreen");
       }
      }
 
    // TODO 4: Use a switch statement to add a final suggestion based on the temperature
    // Hint: Use temperature ranges as cases
    // For example:
    // - Above 30°C: "Don't forget to stay hydrated!"
    // - 20°C to 30°C: "Perfect weather for outdoor activities!"
    // - 10°C to 20°C: "Consider bringing a light jacket."
    // - Below 10°C: "Bundle up and stay warm!"
   
    // Your code here, for the switch statement, check the temperature AND use them as range cases
    switch(true) {
        case temperature > 30:
            clothing.push("Don't forget to stay hydrated!");
            break;
        case temperature >= 20 && temperature <= 30:
            clothing.push("Perfect weather for outdoor activities!");
            break;
        case temperature >= 10 && temperature < 20:
            clothing.push("Consider bringing a light jacket.");
            break;
        case temperature < 10:
            clothing.push("Bundle up and stay warm!");
            break;
        default:
            clothing.push("Enjoy the weather!");
            break;
    }
  

  return clothing;
}
 
  // Test the function
  console.log(suggestClothing(28, false));
  console.log("+++++++++++++++++++++++++++++");

  console.log(suggestClothing(18, true));
  console.log("+++++++++++++++++++++++++++++");
  console.log(suggestClothing(5, false));