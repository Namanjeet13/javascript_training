// Create a new button element. Give it a text "Click Me" and a background color of "red" and a text color of "white". Insert the button as the first element in the body.

let body = document.querySelector('body');

// Create a button element
let button = document.createElement('button');
button.innerText = 'Click Me';
button.style.backgroundColor ='red';
button.style.color = 'white';

body.prepend(button);

// Create a <p> tag in html,  give  it a class & some styling.
// Now create a new class in Css and try to append this class to the <p>
// tag using JavaScript.

let para = document.querySelector('p');
para.getAttribute('class'); // to check if class exists
para.setAttribute('class', 'newClass'); // to add new class
para.classList.add('newClass'); // to add new class using classList