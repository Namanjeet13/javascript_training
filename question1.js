// Prompt the user to enter their full name. Generate a username for them based on the
// input. Start the username with @, followed by their full name and Ending with the fullname length.


let fullName = prompt("Enter your full name:");
fullName = fullName.replaceAll(" ", "");
console.log("@" + fullName + fullName.length);