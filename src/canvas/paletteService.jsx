import React from "react";

import './paletteService.css'

export function PaletteService({ changeColor }) {
    const [colorArray, setColorArray] = React.useState(Array(5).fill([0,0,0,0]));

    React.useEffect(() => {
        setColorArray([
            [31,14,15,255],
            [92,65,35,255],
            [89,79,32,255],
            [38,46,26,255],
            [23,38,50,255]
        ]);
    }, [])

    return (
        <div className="palette text-white-50">
            <span>Color Palette</span>
            <div className="palette-options">
                <ColorSquare value={colorArray[0]} updateColor={changeColor} />
                <ColorSquare value={colorArray[1]} updateColor={changeColor} />
                <ColorSquare value={colorArray[2]} updateColor={changeColor} />
                <ColorSquare value={colorArray[3]} updateColor={changeColor} />
                <ColorSquare value={colorArray[4]} updateColor={changeColor} />
            </div>
            <button className="btn btn-secondary">Generate</button>
        </div>
    );
}

function ColorSquare({ value, updateColor }) {
    return (
        <button className="palette-color" style={PixelColor(value)} onClick={() => updateColor(value)}></button>
    );
}

function PixelColor(values) {
    return {
        background: 'rgba('+values[0]+','+values[1]+','+values[2]+','+(values[3]/255)+')'
    }
}