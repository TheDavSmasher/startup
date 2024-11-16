import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import './paletteService.css'
import { DropdownButton } from "react-bootstrap";

export function PaletteService({ currentColor, changeActiveColor }) {
    const [colorArray, setColorArray] = React.useState(Array(5).fill([0,0,0]));
    const [paletteMode, setPaletteMode] = React.useState("1");

    async function generateNewPalette() {
        const url = "https://www.thecolorapi.com/scheme?rgb=" + currentColor[0] + "," + currentColor[1] + "," + currentColor[2]
        + "&mode=" + getPaletteMode(true);
        try {
            const response = await fetch(url);
            const value = await response.text();
            const json = JSON.parse(value);
            setColorArray(getColorArray(json.colors));
        } catch (error) {
            console.error("Error: Could not get new palette. " + error.message);
        }
    }

    function getPaletteMode(forURI) {
        const number = parseInt(paletteMode);
        switch (number) {
            case 1:
                if (forURI) {
                    return "monochrome";
                }
                return "Monochrome";
            case 2:
                if (forURI) {
                    return "monochrome-dark";
                }
                return "Monochrome (Dark)";
            case 3:
                if (forURI) {
                    return "monochrome-light";
                }
                return "Monochrome (Light)";
            case 4:
                if (forURI) {
                    return "analogic";
                }
                return "Analogic";
            case 5:
                if (forURI) {
                    return "complement";
                }
                return "Complement";
            case 6:
                if (forURI) {
                    return "analogic-complement";
                }
                return "Analogic Complement";
            case 7:
                if (forURI) {
                    return "triad";
                }
                return "Triad";
            case 8:
                if (forURI) {
                    return "quad";
                }
                return "Quad";
        }
    }

    function getColorArray(array) {
        let result = []
        for (let i = 0; i < 5; i++) {
            result.push([array[i].rgb.r, array[i].rgb.g, array[i].rgb.b]);
        }
        return result;
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
            <div className="palette-mode">
                <button className="btn btn-secondary generate-btn" onClick={generateNewPalette}>Generate</button>
                <DropdownButton variant="secondary" onSelect={setPaletteMode} title={getPaletteMode(false)}>
                    <Dropdown.Item eventKey="1" active>Monochrome</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Monochrome (Dark)</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Monochrome (Light)</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Analogic</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Complement</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Analogic Complement</Dropdown.Item>
                    <Dropdown.Item eventKey="7">Triad</Dropdown.Item>
                    <Dropdown.Item eventKey="8">Quad</Dropdown.Item>
                </DropdownButton>
            </div>
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