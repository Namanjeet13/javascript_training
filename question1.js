// Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

function consoleVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    console.log(`Number of vowels in "${str}": ${count}`);
}

 consoleVowels("Hello World");

 // Create an arrow function to perform the same task.

 const consoleVowelsArrow = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    console.log(`Number of vowels in "${str}": ${count}`);
    return count;
 }

 consoleVowelsArrow("Hello World");