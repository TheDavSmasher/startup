import React from "react";

import './canvas.css';

export function Canvas() {
    return (
        <main>
            <div class="reference-area">
                <div class="palette text-white-50">
                    <span>Color Palette</span>
                    <img src="pallete.png" />
                    <button class="btn btn-secondary">Generate</button>
                </div>
                <div class="empty"></div>
                <div class="chatbox">
                    <div class="chat-title">
                        <span>Chat History</span>
                    </div>
                    <ul>
                        <li class="message"><span class="user">Addie: </span> Looks great!</li>
                        <li class="message"><span class="user">Sam: </span> I'll be working on frame 26.</li>
                        <li class="message"><span class="user">You: </span> I'll be back</li>
                        <li class="message"><span class="user">Addie: </span> see ya</li>
                    </ul>
                    <div class="input-group send-message-form">
                        <input type="text" id="newMessage" class="form-control send-message-box"/>
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-success">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-canvas">
                <div class="pixel-canvas">
                    <img src="pixelCanvas.jpeg" />
                </div>
                <br />
                <div class="tools">
                    <button class="btn btn-info">Previous Frame</button>
                    <button class="btn btn-info">Undo</button>
                    <button class="btn btn-info">Save</button>
                    <button class="btn btn-info">Redo</button>
                    <button class="btn btn-info">Next Frame</button>
                </div>
            </div>
            <div class="color-area">
                <div class="colorpick">
                    <span>Active Color</span>
                    <div class="color-picker">
                        <div class="alpha-selection">
                            <label for="red">A</label>
                            <input type="range" name="alpha" id="alpha" min="0" max="255" step="1" />
                        </div>
                        <div class="color-selection">
                            <div class="rgb-selection">
                                <div class="rgb-value">
                                    <label for="red">R</label>
                                    <input type="range" name="red" id="red" min="0" max="255" step="1" class="form-range" />
                                </div>
                                <div class="rgb-value">
                                    <label for="green">G</label>
                                    <input type="range" name="green" id="green" min="0" max="255" step="1" class="form-range" />
                                </div>
                                <div class="rgb-value">
                                    <label for="blue">B</label>
                                    <input type="range" name="green" id="green" min="0" max="255" step="1" class="form-range" />
                                </div> 
                            </div>
                            <div class="general-selection">
                                <input type="color" name="selection" id="selection" class="form-control form-control-color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}