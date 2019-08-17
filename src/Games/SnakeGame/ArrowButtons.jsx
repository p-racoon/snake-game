import React from 'react'

export default function ArrowButtons(props) {
    //[NOTSTARTED,PLAYING,PAUSED,ENDED]
    return (
        <div className="row buttons">
            <div className="col-3">
                <button type="button" class="btn btn-primary" onClick={() => { props.endGame() }}>Quit</button>
                <button type="button" class="btn btn-primary" onClick={() => {
                    if (props.isPlaying === "PLAYING")
                        props.stopGame();
                    else if (props.isPlaying === "PAUSED" || props.isPlaying === "ENDED" || props.isPlaying === "NOTSTARTED")
                        props.startGame();
                    else {
                        alert("lojaojfij")
                        console.log(props)
                    }

                }}> >  / | | </button>
            </div>
            <div className="col">
                <button type="button" class="btn btn-primary" onClick={() => props.setVelocity({ x: -1, y: 0 })}>W &uarr;</button> <br />
                <button type="button" class="btn btn-primary" onClick={() => props.setVelocity({ x: 0, y: -1 })}>A &larr;</button>
                <button type="button" class="btn btn-primary" onClick={() => props.setVelocity({ x: 1, y: 0 })}>S &darr;</button>
                <button type="button" class="btn btn-primary" onClick={() => props.setVelocity({ x: 0, y: 1 })}>D &rarr;</button>
            </div>
            <div className="col-3">
                <button type="button" class="btn btn-primary" onClick={() => props.reverseDirection()} >Reverse</button>
            </div>
        </div>
    )

}
