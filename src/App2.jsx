import React, { useState } from 'react'
import SnakeGame from "./Games/SnakeGame"
import WormGameInstructions from "./Games/SnakeGame/Instructions"
import './index2.css'

export default function App2() {
    const [wormMessage, setWormMessage] = useState("Feed Me Right Now")
    const [instructionDivVisibile, setInstructionDivVisibile] = useState(true)
    return (
        <div className="container">
            <div className="row ">
                <div className="col text-center">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-1">
                            <img
                                src="/apple-e-worm.png"
                                alt="apple-earthworm"
                                className=" img-fluid rounded mx-auto d-block"
                                onClick={() => setInstructionDivVisibile(!instructionDivVisibile)} />
                        </div>
                        <div className="col-5 ">
                            <div className="card border-primary mt-3 p-2">
                                <h2 class="">{wormMessage}</h2>
                                <h5 class="">-EarthWorm</h5>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    {/* <span class="border-top my-3" /> */}
                    {instructionDivVisibile ?
                        <WormGameInstructions setInstructionDivVisibile={setInstructionDivVisibile} /> :
                        <SnakeGame gridSize={20} />}
                </div>
            </div>
        </div>

    )
    // function getResolution() {
    //     alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
    // }
}
