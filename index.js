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

// 4. String method challenge
const rawInput = "  Hello world! This is a test.  ";
const searchWord = "world";

// Chain methods together for efficient manipulation
const processedString = rawInput.trim()              // 1. Remove leading/trailing whitespace
                                .toUpperCase()       // 2. Convert to uppercase
                                .replace("TEST", "CHALLENGE"); // 3. Replace 'TEST' with 'CHALLENGE'

// Other methods
const lowerCaseString = processedString.toLowerCase();

const includesCheck = processedString.includes(searchWord.toUpperCase());

const wordsArray = lowerCaseString.split(" "); // Split the string into an array of words

console.log("\nChallenge 4 Output:");
console.log(`Processed String: ${processedString}`);
console.log(`Includes '${searchWord.toUpperCase()}'? ${includesCheck}`);
console.log(`Words Array (Split): ${wordsArray}`);


//5. KGL data formatting Task

const rawDealerData = "  KGL-4789|Maganjo Millers | Maize | 02-12-2025  ";

// 1. Clean and Validate Input (Trim and Uppercase)
const trimmedData = rawDealerData.trim();
const upperCaseData = trimmedData.toUpperCase();

// 2. Split the data into individual components (using the | separator)
const dataArray = upperCaseData.split("|");

// 3. Process each component to remove extra spaces (mapping trim over the array)
const formattedData = dataArray.map(item => item.trim());

// 4. Use Template Literals (Day 1/Challenge 2) for final structured output
const [productCode, dealerNameRecord, productName, procurementDate] = formattedData;

const dbRecord = {
    Code: productCode,
    Dealer: dealerNameRecord,
    Product: productName,
    Date: procurementDate
};

console.log("\nChallenge 5 Output (Final Database Record):");
console.log(dbRecord);
