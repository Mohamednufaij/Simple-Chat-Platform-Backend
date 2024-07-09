import React, { useState } from 'react';
import Chat from './Chat';

const App = () => {
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [joined, setJoined] = useState(false);

    const joinRoom = () => {
        if (username && roomName) {
            setJoined(true);
        }
    };

    return (
        <div>
            {!joined ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter room name"
                        value={roomName}
                        onChange={e => setRoomName(e.target.value)}
                    />
                    <button onClick={joinRoom}>Join Room</button>
                </div>
            ) : (
                <Chat username={username} roomName={roomName} />
            )}
        </div>
    );
};

export default App;

