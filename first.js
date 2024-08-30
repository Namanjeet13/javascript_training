// Strings
let str1 = "Hello, World!";
let str2 = 'Hello, World!';

// String length
let length1 = str1.length; // Output: 13
let length2 = str2.length; // Output: 13

// String indices
console.log(str1[0]); // Output: H
console.log(str2[8]); // Output: r

//Template literals

let obj = {
    item: "pen",
    price: 10
};

// String interpolation using template literals
let output = `The cost of ${obj.item} is ${obj.price} dollars.`;
console.log(output);
console.log("The cost of", obj.item, "is", obj.price, "dollars.");

let specialString = `This is template literal ${1 + 2}`;
console.log(specialString);

// Escape characters
console.log("Hello \n World");
console.log("Hello \t World");

let str = "Hello\tWorld"; // String length expected to be 12
console.log(str.length); // Output: 11 // Escape characters have 1 character length

// String Methods
// Always returns a new string

let str3 = "Namanjeet Singh";

// Convert to uppercase
console.log(str3.toUpperCase()); // Output: NAMANJEET SINGH

// Convert to lowercase
console.log(str3.toLowerCase()); // Output: namanjeet singh

// trim() removes whitespace from both ends of a string
console.log("   Namanjeet Singh   ".trim()); // Output: Hello World

// slice() returns a new string with a portion of the original string
console.log(str3.slice(0, 5)); // Output: Naman
console.log(str3.slice(-5)); // Output: Singh

// concat() joins two or more strings together
console.log(str3.concat(" is a good boy")); // Output: Namanjeet Singh is a good boy
console.log(str3 + str1); // Output: Namanjeet SinghHello, World!

// replace() replaces a specified value with another value in a string
console.log(str3.replace("Singh", "Kharoud")); // Output: Namanjeet Kharoud
console.log(str3.replaceAll(" ", "-")); // Output: Namanjeet-Singh // Note: replaceAll() replaces all occurrences

// charAt() returns the character at the specified index in a string
console.log(str3.charAt(5)); // Output: j
