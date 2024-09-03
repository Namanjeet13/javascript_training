let arr = ["pune", "mumbai", "delhi", "chennai", "kolkata"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})

// For a given array of numbers, print the square of each value using the forEach loop.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * num);
})