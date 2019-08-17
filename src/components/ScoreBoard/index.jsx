import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="row score-board ">
            <div className="col text-center">

                <h4>
                    <span class="badge badge-pill badge-dark m-2">{props.playerName || "Player Name"}</span>
                    <span class="badge badge-pill badge-dark m-2">Score:{props.score || "0"}</span>
                </h4>

            </div>
        </div>

    )
}
