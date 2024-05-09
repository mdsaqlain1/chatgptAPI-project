import '../App'
import { useState } from 'react';
import ChatMessage from './ChatMessage';

export default function ChatContainer() {
    const [messages, setMessages] = useState([]);
  
    const addMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    };
  
    return (
      <div id="chat_container">
        {messages.map((message, index) => (
          <ChatMessage key={index} isBot={message.isBot} text={message.text} />
        ))}
      </div>
    );
  }