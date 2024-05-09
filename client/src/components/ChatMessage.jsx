import '../App'; // Import your CSS file

import bot from '../assets/bot.svg';
import user from '../assets/user.svg';

export default function ChatMessage({ isBot, text }) {
    return (
      <div className={`wrapper ${isBot ? 'ai' : ''}`}>
        <div className="chat">
          <div className="profile">
            <img src={isBot ? bot : user} alt={isBot ? 'bot' : 'user'} />
          </div>
          <div className="message">{text}</div>
        </div>
      </div>
    );
  }