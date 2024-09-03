// Create an array to store Companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company from the array

companies.shift();

console.log(companies);

// Remove Uber & add Ola in its place

companies.splice(2, 1, "Ola");

console.log(companies);

// Add Amazon to the end of the array

companies.push("Amazon");

console.log(companies);

// reverse the order of the array

companies.reverse();

console.log(companies);

// Sort the array in alphabetical order

companies.sort();

console.log(companies);