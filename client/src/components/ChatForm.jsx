import "../App";
import { useState } from "react";
import send from '../assets/send.svg';

export default function ChatForm({ onSubmit }) {
    const [prompt, setPrompt] = useState('');
  
    const handleChange = (e) => {
      setPrompt(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(prompt);
      setPrompt('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          rows="1"
          cols="1"
          placeholder="Ask codex..."
          value={prompt}
          onChange={handleChange}
        ></textarea>
        <button type="submit">
          <img src={send} alt="send" />
        </button>
      </form>
    );
  }