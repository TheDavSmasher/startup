import React from "react";
import { PixelCanvas } from "./pixelCanvas";
import { ColorPicker } from "./colorPicker";
import { PaletteService } from "./paletteService";
import { Chatbox } from "./chatbox";

import './canvas.css';

export function Canvas(props) {
    const [currentColor, setCurrentColor] = React.useState([0, 0, 0, 0])

    return (
        <main>
            <div className="reference-area">
                <PaletteService currentColor={currentColor} changeActiveColor={(color) => setCurrentColor(color)} />
                <div className="empty"></div>
                <Chatbox userName={props.userName} />
            </div>
            <PixelCanvas currentColor={() => currentColor} width={20} height={20} />
            <div className="color-area">
                <ColorPicker currentColor={currentColor} changeActiveColor={(color) => setCurrentColor(color)} />
            </div>
        </main>
    );
}