// Selector by id
let heading = document.getElementById("heading")
console.log(heading)

// Selector by class
let heading4 = document.getElementsByClassName("heading4");
console.log(heading4)

// Selector by tag name
let paragraph = document.getElementsByTagName("p");
console.log(paragraph)

// Selector by query selector
let firstElement = document.querySelector("p"); //1st element
console.log(firstElement)

// Selector by query selector class
let classElements = document.querySelector(".heading4"); //Use dot for class
console.log(classElements)

// Selector by query selector id
let idElements = document.querySelector("#heading"); //Use hash for id
console.log(idElements)

// Selector by query selector all
let allElements = document.querySelectorAll("p"); //all elements
console.log(allElements)