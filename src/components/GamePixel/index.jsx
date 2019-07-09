import React from 'react'
import './GamePixel.css'

export default function GamePixel(props) {
    let pixelHeight = props.pixelHeight || "20px";
    let pixelWidth = props.pixelWidth || "20px";
    return (
        <div className={props.pixelType} style={{ height: pixelHeight, width: pixelWidth }} >
            {props.key}
        </div>
    )
}
