class Message {
    constructor(name, text, time) {
        this.name = name;
        this.text = text;
        this.time = time;
    }
}

class MessageHistory {
    messages = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = () => {};
        this.socket.onclose = () => {};
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastMessage(from, text, time) {
        const event = new Message(from, text, time);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.messages.push(event);

        this.messages.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }
}

const History = new MessageHistory();
export { History }