import React from "react";

function GetHex(color) {
    var value = color.toString(16);
    if (value.length < 2) {
        value = "0" + value;
    }
    return value;
}

function GetColor(red, green, blue) {
    return "#" + GetHex(red) + GetHex(green) + GetHex(blue);
}

export function ColorPicker({ currentColor, changeActiveColor }) {
    const [red, setRed] = React.useState(currentColor[0]);
    const [green, setGreen] = React.useState(currentColor[1]);
    const [blue, setBlue] = React.useState(currentColor[2]);
    const [alpha, setAlpha] = React.useState(255);

    function setColor(value) {
        setRed(parseInt(value.substr(1,2), 16));
        setGreen(parseInt(value.substr(3,2), 16));
        setBlue(parseInt(value.substr(5,2), 16));
    }

    React.useEffect(() => {
        changeActiveColor([red, green, blue, alpha]);
    }, [red, green, blue, alpha])

    return (
        <div className="colorpick">
            <span>Active Color</span>
            <div className="color-picker">
                <div className="alpha-selection">
                    <label htmlFor="alpha">A</label>
                    <input type="range" name="alpha" id="alpha" min="0" max="255" step="1" value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} />
                </div>
                <div className="color-selection">
                    <div className="rgb-selection">
                        <div className="rgb-value">
                            <label htmlFor="red">R</label>
                            <input type="range" name="red" id="red" min="0" max="255" step="1" className="form-range" value={red} onChange={(e) => setRed(Number(e.target.value))} />
                        </div>
                        <div className="rgb-value">
                            <label htmlFor="green">G</label>
                            <input type="range" name="green" id="green" min="0" max="255" step="1" className="form-range" value={green} onChange={(e) => setGreen(Number(e.target.value))} />
                        </div>
                        <div className="rgb-value">
                            <label htmlFor="blue">B</label>
                            <input type="range" name="green" id="green" min="0" max="255" step="1" className="form-range" value={blue} onChange={(e) => setBlue(Number(e.target.value))} />
                        </div> 
                    </div>
                    <div className="general-selection">
                        <input type="color" name="selection" id="selection" className="form-control form-control-color" value={GetColor(red, green, blue)} onChange={(e) => setColor(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
}