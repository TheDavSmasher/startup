import React from "react";

import './paletteService.css'

export function PaletteService({ currentColor, changeActiveColor }) {
    const [colorArray, setColorArray] = React.useState(Array(5).fill([0,0,0]));

    async function generateNewPalette(reference) {
        const url = "http://colormind.io/api/";
        const data = {
            model : "default",
            input : [reference, "N", "N", "N", "N"]
        }
        try {
            const response = await fetch(url, {body : JSON.stringify(data), method : "post"});
            const value = await response.text();
            const arrays = JSON.parse(value);
            setColorArray(arrays.result);
        } catch (error) {
            console.error("Error: Could not get new palette.");
        }
    }

    React.useEffect(() => {
        setColorArray([
            [31,14,15],
            [92,65,35],
            [89,79,32],
            [38,46,26],
            [23,38,50]
        ]);
    }, [])

    return (
        <div className="palette text-white-50">
            <span>Color Palette</span>
            <div className="palette-options">
                <ColorSquare value={colorArray[0]} updateColor={changeActiveColor} />
                <ColorSquare value={colorArray[1]} updateColor={changeActiveColor} />
                <ColorSquare value={colorArray[2]} updateColor={changeActiveColor} />
                <ColorSquare value={colorArray[3]} updateColor={changeActiveColor} />
                <ColorSquare value={colorArray[4]} updateColor={changeActiveColor} />
            </div>
            <button className="btn btn-secondary" onClick={() => generateNewPalette(currentColor.slice(0, -1))}>Generate New</button>
        </div>
    );
}

function ColorSquare({ value, updateColor }) {
    return (
        <button className="palette-color" style={PixelColor(value)} onClick={() => addAlpha(value, updateColor)}></button>
    );
}

function PixelColor(values) {
    return {
        background: 'rgb('+values[0]+','+values[1]+','+values[2]+')'
    }
}

function addAlpha(value, update) {
    value.push(255);
    update(value);
}