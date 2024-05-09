import './App.css';
import ChatContainer from './components/ChatContainer';
import ChatForm from './components/ChatForm';
import addMessage from './components/ChatContainer';

function App() {
  const handleSubmit = async (prompt) => {
    // Your API call logic goes here
    console.log(prompt);
    const response = await fetch('http://localhost:5000/', { method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }) });
    const data = await response.json();
    addMessage({ isBot: true, text: data.bot });
  };

  return (
    <div id="app">
      <ChatContainer />
      <ChatForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;