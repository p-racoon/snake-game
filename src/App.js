import React, { useState, useEffect, useRef } from 'react';
import './App.css';

let canvas = null;
let ctx = null;

let XVelocity = 0
let YVelocity = 0
let PlayerPositionX = 10
let PlayerPositionY = 10
let AppleX = 0
let AppleY = 0
let gridSize = 25;
let tileCount = 20;
let trail = []
let snakeSize = 5
function App() {
  // let [isPlaying, setIsPlaying] = 0)
  // let ctx = null;
  // let [state, setstate] = initialState)
  let canvasRef = React.useRef(null)
  useEffect(() => {
    document.addEventListener("keydown", (e) => onKeyPressed(e));
    return () => {
      document.removeEventListener("keydown", (e) => onKeyPressed(e));
    };
  })
  useEffect(() => {
    canvas = canvasRef.current
    ctx = canvas.getContext('2d')
  })
  return (
    <>
      <div className=" game">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          // width={window.innerWidth * 0.8}
          // height={window.innerHeight * 0.8}
          onClick={e => {
            // alert(e.clientX)

          }}
        />

      </div>
    </>
  );

  function game() {
    let newXPosition = PlayerPositionX + XVelocity;
    let newYPosition = PlayerPositionY + YVelocity;
    if (newXPosition < 0) {
      newXPosition = tileCount - 1;
    }
    else if (newXPosition > tileCount - 1) {
      newXPosition = 0;
    }
    if (newYPosition < 0) {
      newYPosition = tileCount - 1;
    }
    else if (newYPosition > tileCount - 1) {
      newYPosition = 0;
    }
    PlayerPositionX = newXPosition
    PlayerPositionY = newYPosition

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "red";
    ctx.fillRect(AppleX * gridSize, AppleY * gridSize, gridSize - 2, gridSize - 2)

    ctx.fillStyle = "blue";
    for (let i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
      if (trail[i].x == PlayerPositionX && trail[i].y == PlayerPositionY) {

      }
    }
    trail.push({ x: PlayerPositionX, y: PlayerPositionY })
    while (trail.length > snakeSize) {
      trail.shift()
    }

    if (AppleX == PlayerPositionX && AppleY == PlayerPositionY) {
      snakeSize += 1
      AppleX = Math.floor(Math.random() * tileCount)
      AppleY = Math.floor(Math.random() * tileCount)
    }

  }
  function startGame() {
    // setIsPlaying(() => setInterval(game, 1000 / 15))
    setInterval(game, 1000 / 15)
  }
  function stopGame() {
    // clearInterval(isPlaying)
    // setIsPlaying(0)
  }
  function onKeyPressed(e) {
    switch (e.code) {
      case "Space":
      case "Enter":
        startGame();
        break;
      case "Escape":
        stopGame();
      case "KeyA":
      case "ArrowLeft":
        XVelocity = -1
        YVelocity = 0
        break;
      case "KeyW":
      case "ArrowUp":
        XVelocity = 0
        YVelocity = -1
        break;
      case "KeyD":
      case "ArrowRight":
        XVelocity = 1
        YVelocity = 0
        break;
      case "KeyS":
      case "ArrowDown":
        XVelocity = 0
        YVelocity = 1
        break;
      default:
        //uselessKey pressed
        break;
    }
  }
}

export default App;
