import React from "react";

export function PaletteService(props) {
    return (
        <div className="palette text-white-50">
            <span>Color Palette</span>
            <img src="pallete.png" />
            <button className="btn btn-secondary">Generate</button>
        </div>
    );
}