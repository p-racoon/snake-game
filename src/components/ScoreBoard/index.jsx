import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="row score-board">
            <div className="col">
                {props.playerName || "Player Name"}
            </div>
            <div className="col">
                Level: {props.level || "0"}
            </div>
            <div className="col">
                Score:{props.score || "0"}
            </div>
        </div>

    )
}
