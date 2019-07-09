export function onKeyPressed(e, startGame, stopGame, setVelocity) {
    switch (e.code) {
        
        case "Space":
        case "Enter":
            startGame();
            break;
        case "Escape":
            stopGame();
            break;
        case "KeyA":
        case "ArrowLeft":
            setVelocity({ x: 0, y: -1 })
            break;
        case "KeyW":
        case "ArrowUp":
            setVelocity({ x: -1, y: 0 })
            break;
        case "KeyD":
        case "ArrowRight":
            setVelocity({ x: 0, y: 1 })
            break;
        case "KeyS":
        case "ArrowDown":
            setVelocity({ x: 1, y: 0 })
            break;
        default:
            //uselessKey pressed
            break;
    }
}