// 1. String concatenation challenge

const dealerName = "Maganjo Farms";
const location = "Kampala";
const product = "Maize";

const message = "Dealer: " + dealerName + " | Location: " + location + " | Product: " + product;


console.log(message);

// 2. Temporal literal practice

const message2 = `Dealer: ${dealerName} | Location: ${location} | Product: ${product}`;

console.log("\nChallenge 2 Output:");
console.log(message2);

// 3. Type checking and conversion
const stringValue = "456";
const numberValue = 123;
const booleanValue = true;

// 1. Type Checking (typeof)
console.log("\nChallenge 3 Output (Type Checking):");
console.log(`Type of stringValue: ${typeof stringValue}`); // string
console.log(`Type of numberValue: ${typeof numberValue}`); // number

// 2. Type Conversion
console.log("\nChallenge 3 Output (Type Conversion):");

// Convert Number to String
const numToString = String(numberValue); // "123"
console.log(`Number to String: ${typeof numToString} (${numToString})`);

// Convert String to Number
const stringToNum = Number(stringValue); // 456
console.log(`String to Number: ${typeof stringToNum} (${stringToNum})`);

// Convert values to Boolean
const numToBoolean = Boolean(0); // false (Falsy value)
const stringToBoolean = Boolean("hello"); // true (Truthy value)
console.log(`0 to Boolean: ${numToBoolean}`);
console.log(`"hello" to Boolean: ${stringToBoolean}`);