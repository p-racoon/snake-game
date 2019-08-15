
import React, { useState, useEffect, useReducer } from 'react'
import ScoreBoard from "../../components/ScoreBoard";
import { onKeyPressed } from "./onKeyPressed";
import { takeRight, take, reverse } from 'lodash'
import GameBoard from './GameBoard'

let trail = [{ x: 10, y: 6 },{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }]; //initial trail
let PlayerPosition = { x: 10, y: 10 } //starting PlayerPosition
let snakeSize = 4 //initialSize 4
let gameTick = null;
let velocity = { x: 0, y: 1 };
let gridSize = 20
let apple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize)
}
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
            {/* <ScoreBoard playerName={isPlaying} level={scoreBoard.playerLevel} score={scoreBoard.playerScore} /> */}
            <div className="game-board d-flex justify-content-center">
                {/* <div className="col"></div> */}
                <div className="">
                    <GameBoard gridSize={props.gridSize} apple={apple} isSnake={isSnake}></GameBoard>
                </div>
                {/* <div className="col"></div> */}
            </div>
            <div className="row buttons">
                buttons{ScoreBoard.playerName}
            </div>
            <div className="row instructions">
                How to Play?
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
    // const [playerScore, setPlayerScore] = useState(0)
    // const [playerLevel, setPlayerLevel] = useState(0)
    function setVelocity2(payload) {
        velocity = payload;
        setVelocity(payload);
    }
    // const [playerName, setPlayerName] = useState("")



    function game() {
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
        trail = [{ x: 10, y: 6 },{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }]; //initial trail
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



