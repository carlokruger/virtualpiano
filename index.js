
document.addEventListener('keydown', (e) =>{
    // console.log(e.key.toUpperCase());
    const validKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
    let pressedKey = e.key.toUpperCase();
    if(validKeys.includes(pressedKey)){
        switch(pressedKey){
            case "A":
                let A = new Audio("media/A.mp3");
                A.play()
                break;
            case "S":
                let S = new Audio("media/S.mp3");
                S.play()
                break;
            case "D":
                let D = new Audio("media/D.mp3");
                D.play()
                break;
            case "F":
                let F = new Audio("media/F.mp3");
                F.play()
                break;
            case "G":
                let G = new Audio("media/G.mp3");
                G.play()
                break;
            case "H":
                let H = new Audio("media/H.mp3");
                H.play()
                break;
            case "J":
                let J = new Audio("media/J.mp3");
                J.play()
                break;
            case "W":
                let W = new Audio("media/W.mp3");
                W.play()
                break;
            case "E":
                let E = new Audio("media/E.mp3");
                E.play()
                break;
            case "T":
                let T = new Audio("media/T.mp3");
                T.play()
                break;
            case "Y":
                let Y = new Audio("media/Y.mp3");
                Y.play()
                break;
            case "U":
                let U = new Audio("media/U.mp3");
                U.play()
                break;
        }

    }
    else{
        console.warn('This key is unbound');
    }
})

