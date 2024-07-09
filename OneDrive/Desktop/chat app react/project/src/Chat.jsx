// Chat.js
//for singleuser
// import React, { useState, useEffect } from 'react';

// const Chat = () => {
//     const [message, setMessage] = useState('');
//     const [chatLog, setChatLog] = useState([]);
//     const [ws, setWs] = useState(null);

//     useEffect(() => {
//         const socket = new WebSocket('ws://localhost:8000/ws/chat/room/');
//         setWs(socket);

//         socket.onmessage = function(event) {
//             const data = JSON.parse(event.data);
//             setChatLog(prev => [...prev, data.message]);
//         };

//         return () => socket.close();
//     }, []);

//     const sendMessage = () => {
//         if (ws) {
//             ws.send(JSON.stringify({ 'message': message }));
//             setMessage('');
//         }
//     };

//     return (
//         <div>
//             <div>
//                 {chatLog.map((msg, index) => <div key={index}>{msg}</div>)}
//             </div>
//             <input
//                 type="text"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default Chat;

import React, { useState, useEffect } from 'react';

const Chat = ({ username, roomName }) => {
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);
        setWs(socket);

        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            setChatLog(prev => [...prev, `${data.username}: ${data.message}`]);
        };

        socket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };

        return () => socket.close();
    }, [roomName]);

    const sendMessage = () => {
        if (ws) {
            ws.send(JSON.stringify({ 'username': username, 'message': message }));
            setMessage('');
        }
    };

    return (
        <div>
            <div>
                {chatLog.map((msg, index) => <div key={index}>{msg}</div>)}
            </div>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
