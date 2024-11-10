import React from "react";

import './pixelCanvas.css';

export function PixelCanvas({ currentColor, width, height }) {
    const [history, setHistory] = React.useState([Array(height).fill(Array(width).fill([0,0,0,0]))]);
    const [currentHistory, setCurrentHistory] = React.useState(0);

    function handleUpdate(nextHistory) {
        const newHistory = [...history.slice(0, currentHistory + 1), nextHistory];
        setHistory(newHistory);
        setCurrentHistory(newHistory.length - 1);
    }

    function undo() {
        if (currentHistory > 0) {
            setCurrentHistory(currentHistory - 1);
        }
    }

    function redo() {
        if (currentHistory < history.length - 1) {
            setCurrentHistory(currentHistory + 1);
        }
    }

    return (
        <div className="main-canvas">
            <div className="pixel-canvas">
                <ColorCanvas currentColor={currentColor} pixelArray={history[currentHistory]} onChange={handleUpdate} />
            </div>
            <br />
            <div className="tools">
                <button className="btn btn-info">Previous Frame</button>
                <button className="btn btn-info" onClick={undo}>Undo</button>
                <button className="btn btn-info">Save</button>
                <button className="btn btn-info" onClick={redo}>Redo</button>
                <button className="btn btn-info">Next Frame</button>
            </div>
        </div>
    );
}

function ColorCanvas({ currentColor, pixelArray, onChange }) {
    function handleClick(e, i, j) {
        e.preventDefault();
        const nextPixels = DeepCopy(pixelArray);
        if (e.nativeEvent.button === 0) {
            nextPixels[i][j] = currentColor();
        } else if (e.nativeEvent.button === 2) {
            nextPixels[i][j] = [0,0,0,0];
        }
        onChange(nextPixels);
    }

    return (
        <div className="pixel-array">
            {pixelArray.map((row, rowIndex) => (
                <div className="pixel-row" key={rowIndex} >
                    {row.map((color, colIndex) => (
                        <Pixel value={color} onPixelClick={handleClick} i={rowIndex} j={colIndex} key={rowIndex+','+colIndex} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Pixel({ value, onPixelClick, i, j }) {
    return (
        <button className="pixel" style={PixelColor(value)} onClick={(e) => onPixelClick(e, i, j)} onContextMenu={(e) => onPixelClick(e, i, j)} ></button>
    );
}

function PixelColor(values) {
    return {
        background: 'rgba('+values[0]+','+values[1]+','+values[2]+','+(values[3]/255)+')'
    }
}

function DeepCopy(array) {
    const newArray = array.slice();
    for (let index = 0; index < array.length; index++) {
        newArray[index] = array[index].slice();
    }
    return newArray;
}
