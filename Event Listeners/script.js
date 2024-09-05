btn1.addEventListener('click', () => {
    console.log('Button 1 clicked - handler1')
})
btn1.addEventListener('click', () => {
    console.log('Button 1 clicked - handler2')
})

handler3 = () => {
    console.log('Button 1 clicked - handler3')
}
btn1.addEventListener('click', handler3)
btn1.addEventListener('click', () => {
    console.log('Button 1 clicked - handler4')
})
// event objects same as before

// ---------------------------------------------------------------------------------------------------------------------
btn1.removeEventListener('click', handler3) // remove specific handler