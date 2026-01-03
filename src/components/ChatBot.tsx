import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot } from 'lucide-react';



const chatbotResponses = {
    greetings: "Hiii 👋 I'm your AI Career Mentor! What's your name?",
    farewells: "Goodbye! Best of luck on your career journey.",
    thanks: "You're welcome! I'm happy to help.",
    career_advice: "Let's dive into your career journey! I'll ask a few questions to understand you better.",
    default: "That’s a great question! I can guide you on careers, resumes, and interviews.",
};

const careerQuestions = [
    "1️⃣ Personal Background\n• What’s your current education level?\n• Which course/branch/stream are you in?\n• Do you have any work experience or internships? If yes, please describe.",
    "2️⃣ Career Goals & Interests\n• What type of career are you interested in (e.g., software, data science, design, management, research)?\n• Which industries excite you (IT, finance, healthcare, education, gaming, etc.)?\n• Do you prefer working with people, data, machines, or creative tasks?",
    "3️⃣ Skills & Strengths\n• List your technical skills (programming, tools, platforms).\n• What soft skills do you have (communication, teamwork)?\n• Which subjects/topics do you enjoy learning the most?",
    "4️⃣ Learning Preferences\n• How do you prefer to learn (online courses, hands-on projects, books, tutorials)?\n• How much time per week can you dedicate to learning new skills?",
    "5️⃣ Achievements & Portfolio\n• Have you done any projects, competitions, or certifications?\n• Do you have a GitHub, LinkedIn, or portfolio website?",
    "6️⃣ Career Challenges\n• What challenges are you facing in career planning?\n• Are you preparing for any exams or certifications?",
    "7️⃣ Aspirations & Work Style\n• Do you want to work in startups, MNCs, government, or as a freelancer?\n• Are you interested in entrepreneurship?",
    "8️⃣ Location & Flexibility\n• Which locations/countries are you open to?\n• Are you open to remote or only on-site roles?",
    "9️⃣ Timeline & Commitment\n• When do you plan to start your career?\n• Are you looking for internships, full-time roles, or higher studies?",
    "🔟 Feedback & Updates\n• Do you want periodic career tips or skill-building roadmaps?\n• Would you like notifications for events, hackathons, or job openings?",
];

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: chatbotResponses.greetings, sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [userName, setUserName] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const generateAIResponse = (message: string) => {
        if (!userName) {
            setUserName(message);
            return `Nice to meet you, ${message}! Let's start your career journey. ${careerQuestions[currentStep]}`;
        }

        if (currentStep < careerQuestions.length - 1) {
            setCurrentStep(prev => prev + 1);
            return careerQuestions[currentStep + 1];
        } else {
            return `✅ Thanks, ${userName}! I’ve noted all your answers. I’ll use them to guide you with career paths, skills, and opportunities.`;
        }
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");

        setTimeout(() => {
            // Simple keyword matching for non-flow interactions could be added here
            // For now, following the flow logic from original app
            const botResponseText = generateAIResponse(userMessage.text);
            setMessages(prev => [...prev, { text: botResponseText, sender: 'bot' }]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    if (!isOpen) {
        return (
            <div className="chatbot-container">
                <div className="chatbot-toggle" onClick={() => setIsOpen(true)}>
                    <Bot size={32} />
                </div>
            </div>
        );
    }

    return (
        <div className="chatbot-container">
            <div className="chatbot-window">
                <div className="chatbot-header">
                    <h4>AI Career Mentor</h4>
                    <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                </div>
                <div className="chatbot-messages" id="chatbot-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.sender}-message`}>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
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
                    <button onClick={handleSend}><Send size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
