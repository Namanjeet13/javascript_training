// Arrays

let foodItems = ["potato", "apple", "litchi", "tomato" ]

console.log("Original array: ", foodItems)

// Push method adds an element to the end of an array

foodItems.push("mango", "banana", "peach")

console.log("pushed", foodItems)

// Pop method removes the last element from an array

foodItems.pop()

console.log("popped", foodItems)

//toString method converts an array to a string

let foodString = foodItems.toString()

console.log("toString: ", foodString)

// Concat method combines two or more arrays into a new array

let marvel_heroes = ["Iron Man", "Thor", "Hulk"]
let dc_heroes = ["Batman", "Superman", "Wonder Woman"]
let indian_heroes = ["Krish", "Gandhi", "Mahatma Gandhi"]

let combined_heroes = marvel_heroes.concat(dc_heroes, indian_heroes);

console.log("Concatenated arrays: ", combined_heroes)

// unshift method adds an element to the beginning of an array

marvel_heroes.unshift("Captain America");

console.log("unshifted", marvel_heroes)

// shift method removes the first element from an array

marvel_heroes.shift();

console.log("shifted", marvel_heroes)

// slice method returns a new array containing a shallow copy of a portion of an array

let superheroes_slice = marvel_heroes.slice(1, 3);

console.log("Sliced array: ", superheroes_slice)

// splice method adds/removes elements from an array changing the original array

marvel_heroes.splice(5, 0, "Black Widow", "Hawkeye");

console.log("Spliced array: ", marvel_heroes)

