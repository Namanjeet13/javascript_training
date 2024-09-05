let body = document.querySelector('body');
let button = document.querySelector('.dark-mode');

button.addEventListener('click', function() {
    if (button.getAttribute('class') === 'dark-mode') {
        button.setAttribute('class', 'light-mode');
        body.style.backgroundColor = 'white';
    } else if (button.getAttribute('class') === 'light-mode') {
        button.setAttribute('class', 'dark-mode');
        body.style.backgroundColor = '#333';
    }
});