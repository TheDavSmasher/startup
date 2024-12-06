import React from "react";
import { History } from './messageHandler'
import { delay } from './delay';

export function Chatbox(props) {
    const userName = props.userName;

    const [messageList, setMessageList] = React.useState([]);

    React.useEffect(() => {
        History.addHandler(addMessage);

        return () => {
            History.removeHandler(addMessage);
        };
    });

    function addMessage(message) {
        setMessageList([...messageList, message]);
        delay(2000, () => {
            const sliced = [];
            for (let index = 1; index < messageList.length; index++) {
                sliced.push(messageList[index]);
            }            
            setMessageList(sliced);
        });
    }

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