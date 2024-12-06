import React from "react";
import { History } from './messageHandler'
import { delay } from './delay';

export function Chatbox(props) {
    const userName = props.userName;

    const [messageText, setMessageText] = React.useState('');
    const [messageList, setMessageList] = React.useState([]);

    React.useEffect(() => {
        History.addHandler(addMessage);

        return () => {
            History.removeHandler(addMessage);
        };
    });

    function addMessage(message) {
        setMessageList([...messageList, message]);
        delay(10000, () => {
            const sliced = [];
            for (let index = 1; index < messageList.length; index++) {
                sliced.push(messageList[index]);
            }            
            setMessageList(sliced);
        });
    }

    function sendMessage() {
        History.broadcastMessage(userName, messageText, Date.now());
        setMessageText('');
    }

    function getTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }

    function createMessageArray() {
        return messageList.map((message) => {
            return (
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-config='{"hide":9000}' >
                    <div className="toast-header">
                        <img src="..." class="rounded me-2" alt="..." />
                        <strong class="me-auto">{message.name}</strong>
                        <small class="text-body-secondary">{getTime(message.time)}</small>
                    </div>
                    <div className="toast-body">{message.text}</div>
                </div>
            );
        })
    }

    return (
        <div className="chatbox">
            <div className="toast-container position-static">{createMessageArray()}</div>
            <ul>
                <li className="message"><span className="user">Addie: </span> Looks great!</li>
                <li className="message"><span className="user">Sam: </span> I'll be working on frame 26.</li>
                <li className="message"><span className="user">You: </span> I'll be back</li>
                <li className="message"><span className="user">Addie: </span> see ya</li>
            </ul>
            <div className="input-group send-message-form">
                <input type="text" id="newMessage" className="form-control send-message-box" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success" onClick={sendMessage} disabled={!messageText} >Send</button>
                </div>
            </div>
        </div>
    );
}