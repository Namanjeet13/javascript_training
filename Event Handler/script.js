let btn1 = document.querySelector('#btn1')

// btn1.onclick = () => {
//     console.log('Button 1 clicked')
//     let a = 25;
//     a++;
//     console.log(a);
// }

// Event object 
btn1.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX, e.clientY)
}


let div = document.querySelector('div');
div.onmouseover = () => {
    console.log('Mouse over the box')
    div.style.backgroundColor ='red';
}