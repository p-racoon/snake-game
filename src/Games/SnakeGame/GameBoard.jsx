import React from 'react'
import GamePixel from "../../components/GamePixel";

export default function GameBoard({ gridSize, apple, isSnake }) {
    return (
        <>
            {[...Array(gridSize)].map((e, rowIndex) =>
                <div className="game-row " key={rowIndex}>
                    {
                        [...Array(gridSize)].map((e, columnIndex) =>
                            <div className="" key={rowIndex + "_" + columnIndex}>
                                <GamePixel pixelType={
                                    (apple.x == rowIndex && apple.y == columnIndex) ? " apple " :
                                        isSnake(rowIndex, columnIndex) ? "snake" :
                                            "square"
                                } />
                            </div >)
                    }
                </div>)
            }
        </>
    );
}
