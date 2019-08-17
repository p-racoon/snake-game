
import React, { useState, useEffect, useReducer } from 'react'
import ScoreBoard from "../../components/ScoreBoard";
import { onKeyPressed } from "./onKeyPressed";
import { takeRight, take, reverse } from 'lodash'
import GameBoard from './GameBoard'
import GameMessage from "./GameMessage";

let trail = [{ x: 10, y: 6 }, { x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }]; //initial trail
let PlayerPosition = { x: 10, y: 10 } //starting PlayerPosition
let snakeSize = 4 //initialSize 4
let gameTick = null;
let velocity = { x: 0, y: 1 };
let gridSize = 20
let apple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize)
}
let totalTime = 0;
let cutOffTime = 2;
let direction = "forward";
export default function SnakeGame(props) {
    gridSize = props.gridSize;
    const [isPlaying, setIsPlaying] = useState(false)
    const [, setVelocity] = useState({ x: 0, y: 1 })
    const [, setPlayerPosition] = useState({ x: 10, y: 10 });
    const [, setApple] = useState({
        x: Math.floor(Math.random() * props.gridSize),
        y: Math.floor(Math.random() * props.gridSize)
    })
    const [scoreBoard, dispatchToScoreBoard] = useReducer(scoreBoardReducer, {
        playerName: "Guest user" + Math.floor(Math.random() * 1000),
        playerScore: 0,
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [])
    return (
        <>
            <ScoreBoard playerName={props.playerName} gameStatus={isPlaying} level={scoreBoard.playerLevel} score={totalTime.toFixed(2)} score1={scoreBoard.playerScore} />
            <div className="game-board d-flex justify-content-center">
                {/* <div className="col"></div> */}
                <div className="">
                    {/* {isPlaying=="GameInProgress"?} */}
                    <GameMessage score={totalTime.toFixed(2)} playerName={props.playerName} />
                    <GameBoard gridSize={props.gridSize} apple={apple} isSnake={isSnake}></GameBoard>
                </div>
                {/* <div className="col"></div> */}
            </div>
            <div className="row buttons">
                {/* <ArrowKeysInput /> */}
                <div className="col-3">
                    <button type="button" class="btn btn-primary">Quit</button>
                    <button type="button" class="btn btn-primary"> >  / | | </button>
                </div>
                <div className="col">
                    <button type="button" class="btn btn-primary">W &uarr;</button> <br />
                    <button type="button" class="btn btn-primary">A &larr;</button>
                    <button type="button" class="btn btn-primary">S &darr;</button>
                    <button type="button" class="btn btn-primary">D &rarr;</button>
                </div>
                <div className="col-3">
                    <button type="button" class="btn btn-primary">Reverse</button>
                </div>


            </div>
            <hr />
            <div className="row instructions text-center">
                <div className="col">
                    <h3>How to Play?</h3>
                    <p>Acid Rain is killing the worms, every 2 seconds a part of the worm dies, you have to be quick.<br />
                        Press 'Space' or 'Enter' to start the game.<br />
                        Press 'Escape' or 'P' to Pause the game. <br />
                        Use the Arrow Keys, or (WASD) to guide the worm.<br />
                        This is not a snake game it's a worm game, worms do not bite themselves( Actually neither do snakes, but anyways), so making them bite their own tails won't kill the worms.<br />
                        And, Earthworms can eat form either of their heads, so just press the 'R' key to change the eating mouth<br />
                        It is a race against time.</p>
                </div>
            </div>
        </>)
    function handleKeyPress(e) {
        onKeyPressed(e, startGame, stopGame, velocity, setVelocity2, reverseDirection);
    }
    function scoreBoardReducer(state, action) {
        switch (action.type) {
            case 'playerName':
                return { ...state, ...{ playerName: action.playerName } };
            case 'incrementPlayerScore':
                return { ...state, ...{ playerScore: state.playerScore + 1 } };
            case 'decrementPlayerScore':
                return { ...state, ...{ playerScore: state.playerScore - 1 } };
            default:
                throw new Error();
        }
    }
    function setVelocity2(payload) {
        velocity = payload;
        setVelocity(payload);
    }



    function game() {
        totalTime += 0.1;
        cutOffTime -= 0.1;
        let newXPosition = PlayerPosition.x + velocity.x;
        let newYPosition = PlayerPosition.y + velocity.y;
        if (newXPosition < 0) {
            newXPosition = props.gridSize - 1;
        }
        else if (newXPosition > props.gridSize - 1) {
            newXPosition = 0;
        }
        if (newYPosition < 0) {
            newYPosition = props.gridSize - 1;
        }
        else if (newYPosition > props.gridSize - 1) {
            newYPosition = 0;
        }
        setPlayerPosition({ x: newXPosition, y: newYPosition })
        PlayerPosition = { x: newXPosition, y: newYPosition };
        if (isSnake(newXPosition, newYPosition)) {
            // snakeSize = 4;
            // endGame();
        }
        if (direction == "forward") {
            trail.push({ x: newXPosition, y: newYPosition })
        }
        else {
            trail.unshift({ x: newXPosition, y: newYPosition })
        }

        //while (trailCopy.length > snakeSize) {
        if (trail.length > snakeSize) {
            // ordTrail.shift()
            // setTrail(trailCopy.slice(snakeSize))
            trail = direction === "forward" ? takeRight(trail, snakeSize) : take(trail, snakeSize);
        }
        // setTrail(trailCopy);
        if (apple.x === newXPosition && apple.y === newYPosition) {
            // setPlayerScore(playerScore + 1)
            // setSnakeSize(snakeSize + 1)
            snakeSize += 1;
            apple = {
                x: Math.floor(Math.random() * props.gridSize),
                y: Math.floor(Math.random() * props.gridSize)
            }
        }
        if (cutOffTime <= 0) {
            cutOffTime = 2;
            if (snakeSize <= 1) {
                endGame();
            }
            snakeSize -= 1;

        }
    }
    function startGame() {
        setIsPlaying(scoreBoard.playerName)
        gameTick = setInterval(game, 1000 / 10)
    }
    function stopGame() {
        clearInterval(gameTick)
        setIsPlaying("Paused")
    }
    function endGame() {
        stopGame();
        trail = [{ x: 10, y: 6 }, { x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }]; //initial trail
        PlayerPosition = { x: 10, y: 10 } //starting PlayerPosition
        snakeSize = 5 //initialSize 4
        gameTick = null;
        velocity = { x: 0, y: 1 };
        gridSize = 20
        apple = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        }
        setIsPlaying("Game Over")
    }
    function reverseDirection() {
        PlayerPosition = direction == "forward" ? take(trail)[0] : takeRight(trail)[0]
        velocity = {
            x: velocity.x * -1,
            y: velocity.y * -1,
        }

        // reverse(trail)
        direction = direction == "forward" ? "reverse" : "forward";

    }
    function isSnake(x, y) {
        if (trail.find(obj => obj.x == x && obj.y == y)) {
            return true
        }
        return false;
    }
}



