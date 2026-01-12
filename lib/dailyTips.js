// lib/dailyTips.js

const careerTips = [
    "Update your LinkedIn headline to include specific AI skills you are learning.",
    "Don't just learn syntax; learn how to solve problems with Python.",
    "Networking is key: Comment on 3 posts by AI researchers today.",
    "Build a portfolio project that solves a real-world problem, no matter how small.",
    "Read one research paper abstract today to stay ahead of the curve.",
    "Optimize your GitHub profile README to tell a story about your projects.",
    "Reach out to one person in a role you admire for a virtual coffee chat.",
    "Practice explaining a complex AI concept to a 5-year-old.",
    "Check for local AI meetups or hackathons to join this month."
];
  
export function getDailyTip() {
    const date = new Date();
    // Calculate day of the year (1-365)
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Rotate through tips
    const tipIndex = dayOfYear % careerTips.length;
    
    return careerTips[tipIndex];
}