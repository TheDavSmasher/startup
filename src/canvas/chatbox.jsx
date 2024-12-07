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
        const text = messageText;
        setMessageText('');
        History.broadcastMessage(userName, text, Date.now());
    }

    function getTime(date) {
        const value = new Date(date);
        return value.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    }

    function createMessageArray() {
        const messageArray = messageList.map((message) =>
            (<div key={message.time} className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay='{"hide":9000}' >
                <div className="toast-header">
                    <strong className="me-auto">{message.name}</strong>
                    <small className="text-body-secondary">{getTime(message.time)}</small>
                </div>
                <div className="toast-body">{message.text}</div>
            </div>)
        );
        return messageArray;
    }

    return (
        <div className="chatbox">
            <div className="toast-container position-static">{createMessageArray()}</div>
            <div className="input-group send-message-form">
                <input type="text" id="newMessage" className="form-control send-message-box" value={messageText} onChange={(e) => setMessageText(e.target.value)} onKeyDown={(e) => {handleEnter(e, sendMessage)}} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success" onClick={sendMessage} disabled={!messageText} >Send</button>
                </div>
            </div>
        </div>
    );
}

function handleEnter(event, message) {
    if (event.key === 'Enter') {
        message();
    }
}