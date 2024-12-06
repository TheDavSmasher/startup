import React from "react";
import { delay } from './delay';

export function Chatbox(props) {

    return (
        <div className="chatbox">
            <div className="chat-title">
                <span>Chat History</span>
            </div>
            <ul>
                <li className="message"><span className="user">Addie: </span> Looks great!</li>
                <li className="message"><span className="user">Sam: </span> I'll be working on frame 26.</li>
                <li className="message"><span className="user">You: </span> I'll be back</li>
                <li className="message"><span className="user">Addie: </span> see ya</li>
            </ul>
            <div className="input-group send-message-form">
                <input type="text" id="newMessage" className="form-control send-message-box"/>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success">Send</button>
                </div>
            </div>
        </div>
    );
}