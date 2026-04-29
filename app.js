const { multiply, divide } = require('./calculator');
const welcomeMessage = require('./message');

console.log(welcomeMessage());
console.log("Multiply:", multiply(4, 5));
console.log("Divide:", divide(20, 4));
