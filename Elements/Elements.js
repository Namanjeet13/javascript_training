let newBtn1 = document.createElement('button');
newBtn1.textContent = 'New Button 1';

let newBtn2 = document.createElement('button');
newBtn2.textContent = 'New Button 2';

let newBtn3 = document.createElement('button');
newBtn3.textContent = 'New Button 3';

let newBtn4 = document.createElement('button');
newBtn4.textContent = 'New Button 4';

// Append new button to the body (appending to the end)
let div = document.querySelector('div');
div.appendChild(newBtn1);

// Prepend new button to the body (before the first child)
div.prepend(newBtn2);

// Before new button to the body (before its own parent)
div.before(newBtn3);

// After new button to the body (after its own parent)
div.after(newBtn4);

// Remove from the body
let para = document.querySelector('p');
para.remove();