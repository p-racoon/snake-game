import React, { useState } from 'react'

export default function Instructions(props) {
    const [acceptButtonMessage, setAcceptButtonMessage] = useState("Got It!")
    return (
        <div className="row">
            <div className="col ">
                <div className="jumbotron m-2">
                    <h1 className="display-3">Instructions</h1>
                    <p className="lead">
                        EarthWorm- "I used to happy this time of the year.
                        Every time it rained I got to meet my introverted Cousins, as the rains would push them out of their homes. We used to have a feast roaming and chugging up.
                        Things have changed now, the water stings, and food is nowhere to be found.
                        This time it is just me. I guess I am the last ones.
                        We have been forced to have an apples only diet, but we don't know where these apples are, help us to find the apples, before the stinging ends forever.
                        You are our last hope, help us!!"</p>
                    <hr className="my-4" />
                    <p>
                        Acid Rain is killing the worms, every 2 seconds a part of the worm dies, you have to be quick.<br />
                        Press 'Space' or 'Enter' to start the game.<br />
                        Press 'Escape' or 'P' to Pause the game. <br />
                        Use the Arrow Keys, or (WASD) to guide the worm.<br />
                        This is not a snake game it's a worm game, worms do not bite themselves( Actually neither do snakes, but anyways), so making them bite their own tails won't kill the worms.<br />
                        And, Earthworms can eat form either of their heads, so just press the key, which is opposite to the direction of the worm( e.g. - If the worm is going right, press the 'Left Arrow key' or 'W' to reverse its direction)<br />
                        It is a race against time.<br />
                    </p>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg"
                            onClick={() => setAcceptButtonMessage("Seriously! I hope you got this! Counting on you")}
                            onDoubleClick={() => props.setInstructionDivVisibile(false)}>
                            {acceptButtonMessage}</button>
                    </p>
                    <p className="text-muted">(Click on the Apple & worm image on top Read instructions again)</p>
                </div>
            </div>
        </div>
    )
}
