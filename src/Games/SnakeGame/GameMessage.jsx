import React from 'react'

export default function GameMessage(props) {
    //props.isPlaying [NOTSTARTED,PLAYING,PAUSED,ENDED]
    return (
        <div>
            {props.isPlaying === "PLAYING" ?
                <p className="text-muted">Press 'Q' to Quit, or 'P' to pause the game.</p> :
                props.isPlaying === "ENDED" ?
                    <div class="card border-danger mb-3" >
                        <div class="card-header">Well Done! #Sarcasm</div>
                        <div class="card-body">
                            <h4 class="card-title ">WormHearted Lord. {props.playerName}</h4>
                            <p class="card-text">No. of Seconds Survived: {props.score}</p>
                        </div>
                    </div> :
                    props.isPlaying === "PAUSED" ?
                        <p className="text-muted">"Press 'Space Bar' or 'Enter' to Continue"</p> :
                        props.isPlaying === "NOTSTARTED" ?
                            <p className="text-muted">"Press 'Space Bar' or 'Enter' to Start"</p> :
                            <p className="text-muted"></p>
            }
        </div>
    )
}
