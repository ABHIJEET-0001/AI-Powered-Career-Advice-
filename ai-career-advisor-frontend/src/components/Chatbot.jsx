import { useState, useEffect, useRef } from 'react';
import { careerQuestions, chatbotResponses } from '../data';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initial greeting
    setMessages([{ text: chatbotResponses.greetings, sender: 'bot' }]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const generateAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (!userName) {
      setUserName(message);
      return `Nice to meet you, ${message}! Let's start your career journey. ${careerQuestions[currentStep]}`;
    }

    if (currentStep < careerQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
      return careerQuestions[currentStep + 1];
    } else {
      return `✅ Thanks, ${userName}! I've noted all your answers. I'll use them to guide you with career paths, skills, and opportunities.`;
    }
  };

  const sendMessage = () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    setInputValue('');

    // Generate and add bot response after a delay
    setTimeout(() => {
      const response = generateAIResponse(message);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <i className="fas fa-robot"></i>
      </div>
      
      <div className={`chatbot-window ${isOpen ? '' : 'hidden'}`} id="chatbot-window">
        <div className="chatbot-header">
          <h4>AI Career Mentor</h4>
          <button onClick={toggleChatbot}>&times;</button>
        </div>
        
        <div className="chatbot-messages" id="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}-message`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;