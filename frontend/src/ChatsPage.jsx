import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatsPage.css';

const ChatsPage = (props) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/messages')
            .then(response => {
                setMessages(response.data);
            });
    }, []);

    const sendMessage = () => {
        axios.post('http://localhost:3001/send', { text: newMessage, username: props.user.username })
            .then(response => {
                setMessages([...messages, response.data]);
                setNewMessage('');
            });
    };

    return (
        <div className="chat-container">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className={`message-item ${message.username === props.user.username ? 'my-message' : 'their-message'}`}>
                        <div className="message-content">
                            <div className="message-username">{message.username}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="message-input-container">
                <input
                    className="message-input"
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="send-button" onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatsPage;

