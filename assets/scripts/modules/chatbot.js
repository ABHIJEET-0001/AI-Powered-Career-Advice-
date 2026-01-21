// chatbot.js - Handles AI mentor chatbot

const chatbotKnowledge = {
  greetings: ["hello", "hi", "hey"],
  farewells: ["bye", "goodbye"],
  thanks: ["thank you", "thanks", "thx"],
  career_advice: ["advice", "help", "career"],
};

const chatbotResponses = {
  greetings: "Hiii 👋 I'm your AI Career Mentor! What's your name?",
  farewells: "Goodbye! Best of luck on your career journey.",
  thanks: "You're welcome! I'm happy to help.",
  career_advice: "Let's dive into your career journey! I'll ask a few questions to understand you better.",
  default: "That’s a great question! I can guide you on careers, resumes, and interviews.",
};

const careerQuestions = [
  // ...existing career questions...
];

let currentStep = 0;
let userName = "";

export function startChat() {
    // Start chatbot logic
}

export function sendMessage() {
    // Send message logic
}

export function generateAIResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (!userName) {
    userName = message;
    return `Nice to meet you, ${userName}! Let's start your career journey. ${careerQuestions[currentStep]}`;
  }

  if (currentStep < careerQuestions.length - 1) {
    currentStep++;
    return careerQuestions[currentStep];
  } else {
    return `✅ Thanks, ${userName}! I’ve noted all your answers. I’ll use them to guide you with career paths, skills, and opportunities.`;
  }
}

export function toggleChatbot() {
  document.getElementById("chatbot-window").classList.toggle("hidden");
}

export function handleChatInput(event) {
  if (event.key === "Enter") sendChatMessage();
}

export function sendChatMessage() {
  const input = document.getElementById("chatbot-input");
  const message = input.value.trim();
  if (!message) return;
}