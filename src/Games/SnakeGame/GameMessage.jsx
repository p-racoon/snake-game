import React from 'react'

export default function GameMessage(props) {
    //props.isPlaying [NOTSTARTED,PLAYING,PAUSED,ENDED]
    return (
        <div>
            {props.isPlaying === "PLAYING" ?
                <p className="text-muted">Press 'Q' to Quit, or 'P' to pause the game.</p> :
                props.isPlaying === "ENDED" ?
                    <div class="card text-white bg-primary mb-3" >
                        <div class="card-header">Well Done! #Sarcasm</div>
                        <div class="card-body">
                            <h4 class="card-title ">Lord. {props.playerName}</h4>
                            <p class="card-text">No. of Seconds Survived: {props.score}</p>
                        </div>
                    </div> :
                    props.isPlaying === "PAUSED" ?
                        "paused" :
                        props.isPlaying === "NOTSTARTED" ?
                            "notstarted" :
                            <p className="text-muted">nothningness</p>
            }

        </div>
    )
}
