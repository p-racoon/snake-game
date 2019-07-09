
import React, { useState, useEffect } from 'react'
import GamePixel from "../../components/GamePixel";
import ScoreBoard from "../../components/ScoreBoard";
import { onKeyPressed } from "./onKeyPressed";
import { takeRight } from 'lodash'

let trail = [{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }];
let PlayerPosition = { x: 10, y: 10 }
let snakeSize = 4
let gameTick = null;
let velocity = { x: 0, y: 1 };
let gridSize = 20
let apple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize)
}
export default function SnakeGame(props) {
    gridSize = props.gridSize;
    const [isPlaying, setIsPlaying] = useState(false)
    const [, setVelocity] = useState({ x: 0, y: 1 })
    const [, setPlayerPosition] = useState({ x: 10, y: 10 });
    const [, setApple] = useState({
        x: Math.floor(Math.random() * props.gridSize),
        y: Math.floor(Math.random() * props.gridSize)
    })
    // const [trail, setTrail] = useState([{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }, { x: 10, y: 10 }])
    // const [snakeSize, setSnakeSize] = useState(4)
    const [playerScore, setPlayerScore] = useState(0)
    const [playerLevel, setPlayerLevel] = useState(0)
    function setVelocity2(payload) {
        velocity = payload;
        setVelocity(payload);
    }
    const [playerName, setPlayerName] = useState("")
    const handleKeyPress = (e) =>
        onKeyPressed(e, startGame, stopGame, setVelocity2);
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [])
    return (
        <>
            <ScoreBoard playerName={isPlaying} level={playerLevel} score={playerScore} />
            <div className="row game-board">
                <div className="col"></div>
                <div className="col">
                    {[...Array(props.gridSize)].map((e, rowIndex) =>
                        <div className="game-row" key={rowIndex}>
                            {
                                [...Array(props.gridSize)].map((e, columnIndex) =>
                                    <div className="col" key={rowIndex + "_" + columnIndex}>
                                        <GamePixel pixelType={
                                            (apple.x == rowIndex && apple.y == columnIndex) ? " apple " :
                                                isSnake(rowIndex, columnIndex) ? "snake" :
                                                    "square"
                                        } />
                                    </div >)
                            }
                        </div>)
                    }
                </div>
                <div className="col"></div>
            </div>
            <div className="row buttons">
                buttons
                    </div>
            <div className="row instructions">
                How to Play?
                    </div>
        </>)

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
            snakeSize = 4;
        }
        trail.push({ x: newXPosition, y: newYPosition })
        //while (trailCopy.length > snakeSize) {
        if (trail.length > snakeSize) {
            // ordTrail.shift()
            // setTrail(trailCopy.slice(snakeSize))
            trail = takeRight(trail, snakeSize);
        }
        // setTrail(trailCopy);
        if (apple.x === newXPosition && apple.y === newYPosition) {
            setPlayerScore(playerScore + 1)
            // setSnakeSize(snakeSize + 1)
            snakeSize += 1;
            apple = {
                x: Math.floor(Math.random() * props.gridSize),
                y: Math.floor(Math.random() * props.gridSize)
            }
            // setApple(
            //     {
            //         x: Math.floor(Math.random() * props.gridSize),
            //         y: Math.floor(Math.random() * props.gridSize)
            //     }
            // )
        }
    }
    function startGame() {
        setIsPlaying(true)
        gameTick = setInterval(game, 1000 / 10)
    }
    function stopGame() {
        clearInterval(gameTick)
        setIsPlaying(false)
    }
    function isSnake(x, y) {
        if (trail.find(obj => obj.x == x && obj.y == y)) {
            return true
        }
        return false;
    }
}



