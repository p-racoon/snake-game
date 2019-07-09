import React from 'react'
import SnakeGame from "./Games/SnakeGame"
import './index2.css'

export default function App2() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <SnakeGame gridSize={20}/>
                </div>
            </div>
        </div>

    )
    // function getResolution() {
    //     alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
    // }
}
