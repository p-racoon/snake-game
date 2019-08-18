import React, { useState } from 'react'
import SnakeGame from "./Games/SnakeGame"
import WormGameInstructions from "./Games/SnakeGame/Instructions"
import './index2.css'

export default function App2() {
    const [wormMessage, setWormMessage] = useState("Feed Me Right Now")
    const [instructionDivVisibile, setInstructionDivVisibile] = useState(true)
    const [playerName, setPlayerName] = useState("GuestUser" + Math.floor(Math.random() * 1000));
    return (
        <div className="container">
            <div className="row ">
                <div className="col text-center">
                    <div className="row">
                        <div className="col-lg-3 col-0"></div>
                        <div className="col">
                            <img
                                src="./apple-e-worm.png"
                                alt="apple-earthworm"
                                className="worm-icon rounded img-fluid mx-auto"
                                onClick={() => setInstructionDivVisibile(!instructionDivVisibile)} />
                        </div>
                        <div className="col-lg-4 col-7">
                            <div className="card border-primary mt-3 p-2">
                                <h2 className="">{wormMessage}</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-0"></div>
                    </div>
                    {/* <span className="border-top my-3" /> */}

                    {instructionDivVisibile ?
                        <div className="row">
                            <div className="col ">
                                <div className="jumbotron m-2">
                                    <div className="form-group row text-center">
                                        <div className="col"></div>
                                        <label className="col-sm-4 col-form-label" htmlFor="playerName">Please Enter Your Name, Wormhearted Saviour</label>
                                        <input
                                            type="text"
                                            className="col-sm-3 form-control"
                                            placeholder={playerName}
                                            id="playerName"
                                            maxLength="15"
                                            value={playerName}
                                            onChange={(e) => setPlayerName(e.target.value)}
                                            onFocus={(e) => e.target.select()} />
                                        <div className="col"></div>
                                    </div>
                                    <WormGameInstructions playerName={playerName} setInstructionDivVisibile={setInstructionDivVisibile} />
                                </div>
                            </div>
                        </div> :
                        <SnakeGame gridSize={20} playerName={playerName} setWormMessage={setWormMessage} />}
                </div>
            </div>
        </div>

    )
    // function getResolution() {
    //     alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
    // }
}
