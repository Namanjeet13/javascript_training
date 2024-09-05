let h1 = document.querySelector('h1');

console.log(h1);

let id = h1.getAttribute('id');
console.log(id);

let name = h1.getAttribute('name');
console.log(name);

let para = document.querySelector('p');
console.log(para.getAttribute('class'));

console.log(para.setAttribute('class', 'new-class'));

// Style modification

h1.style.color ='red';
h1.style.backgroundColor = 'black';
h1.style.fontSize = '14px';

let div = document.querySelector('div');
div.style.backgroundColor = 'blue';
