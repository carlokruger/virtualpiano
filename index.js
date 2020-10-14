document.addEventListener('keydown', (e) =>{
    // console.log(e.key.toUpperCase());
    const validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
    let pressedKey = e.key.toUpperCase();
    if(validKeys.includes(pressedKey)){
        console.log(`The '${pressedKey}' key is pressed.`);
    }
    else{
        console.warn('This key is unbound');
    }
})