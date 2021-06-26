// Weather Prediction
// To convert Kelvin to Celsius and then to Fahrenheit

// expected forecast: 293 Kelvin.
const kelvin = 293;

// convert kelvin to celsius
const celsius = kelvin - 273;

// use equation to convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature in ${fahrenheit} degrees Fahrenheit.`);
// Output: The temperature in 68 degrees Fahrenheit.

//  use equation to convert celsius to newton
let newton = celsius * (33/100);

// round down newton variable
newton = Math.floor(newton);
console.log(`The temperature in ${newton} degrees newton.`); 
// Output: The temperature in 6 degrees newton.