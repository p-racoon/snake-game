export function onKeyPressed(e, startGame, stopGame, velocity, setVelocity, reverseDirection, endGame) {

    switch (e.code) {
        case "Space":
        case "Enter":
            e.preventDefault();
            startGame();
            break;
        case "Escape":
            stopGame();
            break;
        case "KeyA":
        case "ArrowLeft":
            e.preventDefault();
            setVelocity({ x: 0, y: -1 })
            break;
        case "KeyW":
        case "ArrowUp":
            e.preventDefault();
            setVelocity({ x: -1, y: 0 })
            break;
        case "KeyD":
        case "ArrowRight":
            e.preventDefault();
            setVelocity({ x: 0, y: 1 })
            break;
        case "KeyS":
        case "ArrowDown":
            e.preventDefault();
            setVelocity({ x: 1, y: 0 })
            break;
        case "KeyR":
            reverseDirection();
            break;
        case "KeyQ":
            endGame();
            break;
        default:
            //uselessKey pressed
            break;
    }
}