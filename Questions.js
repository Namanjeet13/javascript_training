// Create a h2 Heading element with text "Hello JavaScript!". Append "from Apna College students" to this text using JS.

let h2 = document.querySelector("h2");

h2.innerText += " from Apna College students";

// Create 3 divs with common class name "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll3(".box");

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx++}`;
}

// ---------------------------------------------------------------------------------------------------------------------