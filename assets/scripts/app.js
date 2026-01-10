// Application Data
const appData = {
  careers: [
    {
      id: 1,
      title: "Data Scientist",
      description:
        "Analyze complex data to help businesses make decisions. Data scientists use statistical methods, machine learning, and analytics to extract insights from data.",
      required_skills: [
        "Python",
        "Machine Learning",
        "Statistics",
        "SQL",
        "Data Visualization",
      ],
      salary_range: "₹8-25 LPA",
      growth_outlook: "High demand, 25% growth expected",
      learning_path: [
        "Statistics Fundamentals",
        "Python Programming",
        "Machine Learning",
        "Deep Learning",
        "Big Data Tools",
      ],
      growth: "high",
      skill_level: "advanced",
      salary_category: "high",
    },
    {
      id: 2,
      title: "UX Designer",
      description:
        "Design user-friendly interfaces and experiences. UX designers focus on creating products that provide meaningful and relevant experiences to users.",
      required_skills: [
        "Figma",
        "User Research",
        "Prototyping",
        "Wireframing",
        "Design Thinking",
      ],
      salary_range: "₹6-20 LPA",
      growth_outlook: "Growing field, focus on digital experiences",
      learning_path: [
        "Design Fundamentals",
        "User Research Methods",
        "Prototyping Tools",
        "Interaction Design",
        "Design Systems",
      ],
      growth: "high",
      skill_level: "intermediate",
      salary_category: "medium",
    },
    {
      id: 3,
      title: "Software Engineer",
      description:
        "Develop and maintain software applications. Software engineers apply engineering principles to software development.",
      required_skills: [
        "Programming",
        "Problem Solving",
        "System Design",
        "Database Management",
        "Testing",
      ],
      salary_range: "₹5-30 LPA",
      growth_outlook: "Excellent prospects across all industries",
      learning_path: [
        "Programming Basics",
        "Data Structures",
        "Web Development",
        "System Design",
        "Software Architecture",
      ],
      growth: "high",
      skill_level: "intermediate",
      salary_category: "high",
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      description:
        "Promote brands and products through digital channels. Digital marketers use online platforms to reach customers.",
      required_skills: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Creation",
        "Analytics",
        "Email Marketing",
      ],
      salary_range: "₹4-15 LPA",
      growth_outlook: "Rapid growth with digital transformation",
      learning_path: [
        "Marketing Fundamentals",
        "SEO Optimization",
        "Social Media Strategy",
        "Content Marketing",
        "Marketing Analytics",
      ],
      growth: "medium",
      skill_level: "beginner",
      salary_category: "medium",
    },
    {
      id: 5,
      title: "Cloud Architect",
      description:
        "Design and manage cloud computing strategies. Cloud architects oversee cloud adoption plans and cloud application design.",
      required_skills: [
        "AWS/Azure",
        "DevOps",
        "Security",
        "Networking",
        "Architecture Design",
      ],
      salary_range: "₹12-40 LPA",
      growth_outlook: "Extremely high demand with cloud adoption",
      learning_path: [
        "Cloud Fundamentals",
        "Platform Certification",
        "DevOps Tools",
        "Security Best Practices",
        "Advanced Architecture",
      ],
      growth: "high",
      skill_level: "advanced",
      salary_category: "high",
    },
    {
      id: 6,
      title: "Data Analyst",
      description:
        "Interpret data to inform business decisions. Data analysts transform data into insights that drive business value.",
      required_skills: [
        "Excel",
        "SQL",
        "Data Visualization",
        "Statistics",
        "Reporting",
      ],
      salary_range: "₹4-18 LPA",
      growth_outlook: "Strong demand across industries",
      learning_path: [
        "Excel Mastery",
        "SQL Fundamentals",
        "Data Visualization Tools",
        "Statistical Analysis",
        "Reporting Techniques",
      ],
      growth: "medium",
      skill_level: "beginner",
      salary_category: "medium",
    },
  ],
  courses: [
    {
      id: 1,
      title: "Python for Data Science",
      provider: "Coursera",
      description:
        "Learn Python programming fundamentals for data analysis and visualization.",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.8,
      features: ["Certificate", "Flexible deadlines", "Peer review"],
    },
    {
      id: 2,
      title: "Machine Learning A-Z™",
      provider: "Udemy",
      description:
        "Introduction to machine learning algorithms and applications with hands-on Python & R exercises.",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.7,
      features: ["Certificate", "Lifetime access", "Practical projects"],
    },
    {
      id: 3,
      title: "Google UX Design Professional Certificate",
      provider: "Coursera",
      description:
        "Master the fundamentals of user experience design and research to kickstart your UX career.",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.8,
      features: [
        "Professional Certificate",
        "Portfolio projects",
        "Google certified",
      ],
    },
    {
      id: 4,
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Udemy",
      description:
        "Learn to deploy and manage applications on Amazon Web Services and pass the certification exam.",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.9,
      features: ["Exam prep", "Practice tests", "Expert instructor"],
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      provider: "Google Digital Garage",
      description:
        "Master the basics of digital marketing with our free course, packed with practical exercises and real-world examples.",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.6,
      features: ["Free Certificate", "Self-paced", "Beginner-friendly"],
    },
    {
      id: 6,
      title: "The Complete Full-Stack Web Developer Course",
      provider: "Udemy",
      description:
        "Learn to build modern web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      duration: "20 weeks",
      level: "Intermediate",
      rating: 4.8,
      features: ["Certificate", "80+ hours of video", "Build 10+ projects"],
    },
  ],
  assessmentQuestions: [
    {
      id: 1,
      question:
        "When faced with a complex problem, what is your initial approach?",
      options: [
        "Break it down into smaller, manageable parts.",
        "Research existing solutions and best practices.",
        "Brainstorm a wide range of creative ideas.",
        "Create a detailed, step-by-step plan before starting.",
        "Experiment with different approaches immediately.",
        "Discuss it with colleagues to get different perspectives.",
        "Analyze the available data to find patterns or insights.",
      ],
    },
    {
      id: 2,
      question: "Which work environment makes you feel most productive?",
      options: [
        "A quiet, focused space for deep concentration.",
        "A highly collaborative, open-plan office.",
        "A flexible, remote environment where I manage my schedule.",
        "A structured, corporate setting with clear processes.",
        "A fast-paced, dynamic startup environment.",
        "A creative studio or workshop with hands-on projects.",
        "An academic or research-oriented setting.",
      ],
    },
    {
      id: 3,
      question: "What kind of tasks give you the most satisfaction?",
      options: [
        "Organizing information and creating efficient systems.",
        "Solving a difficult logical or mathematical puzzle.",
        "Creating something visually beautiful or aesthetic.",
        "Helping or teaching others to understand something.",
        "Persuading or negotiating with people.",
        "Building something tangible with my hands or with code.",
        "Discovering a new insight or pattern from data.",
        "Leading a team and coordinating a project.",
      ],
    },
    {
      id: 4,
      question: "How do you prefer to learn new things?",
      options: [
        "Through structured online courses with clear modules.",
        "By reading books, articles, and documentation.",
        "By watching video tutorials and demonstrations.",
        "Through hands-on projects and learning by doing.",
        "By attending workshops or classes with an instructor.",
        "By discussing concepts with a mentor or expert.",
        "Through self-directed exploration and experimentation.",
      ],
    },
    {
      id: 5,
      question: "In a team project, what role do you naturally take on?",
      options: [
        "The Leader: organizing the team and delegating tasks.",
        "The Analyst: digging into the data and details.",
        "The Innovator: coming up with new and creative ideas.",
        "The Implementer: focusing on getting the work done.",
        "The Mediator: ensuring everyone works together smoothly.",
        "The Specialist: providing deep expertise in an area.",
        "The Presenter: communicating the team's findings.",
      ],
    },
    {
      id: 6,
      question: "Which of these subjects are you most drawn to?",
      options: [
        "Psychology and human behavior.",
        "Technology and computer science.",
        "Art, design, and aesthetics.",
        "Economics and business strategy.",
        "Biology and life sciences.",
        "Mathematics and statistics.",
        "Communication and languages.",
        "Engineering and physics.",
      ],
    },
    {
      id: 7,
      question: "What is your primary motivator at work?",
      options: [
        "Financial reward and stability.",
        "Mastering a new skill and personal growth.",
        "Making a positive impact on society.",
        "Gaining recognition and advancing my career.",
        "Solving intellectually stimulating problems.",
        "Creative expression and innovation.",
        "Having autonomy and control over my work.",
        "Working with a great team and strong social connections.",
      ],
    },
    {
      id: 8,
      question: "How do you handle tight deadlines and pressure?",
      options: [
        "I thrive under pressure; it helps me focus.",
        "I create a detailed to-do list and prioritize.",
        "I communicate with stakeholders to manage expectations.",
        "I focus on one task at a time to avoid being overwhelmed.",
        "I use stress as fuel to get things done.",
        "I ask for help or delegate if possible.",
        "I prefer environments without constant high pressure.",
      ],
    },
    {
      id: 9,
      question: "In a successful project, what part are you most proud of?",
      options: [
        "The flawless execution and efficiency of the process.",
        "The innovative solution no one thought of before.",
        "The positive feedback from users or clients.",
        "The measurable business results achieved.",
        "The complex technical challenge that was overcome.",
        "The strong collaboration that made it happen.",
        "The clean, elegant design and user experience.",
      ],
    },
    {
      id: 10,
      question: "Which statement best describes your long-term career goal?",
      options: [
        "To become a top expert in a specialized field.",
        "To lead a large team or an entire company.",
        "To create my own business or product.",
        "To have a stable, secure job with good work-life balance.",
        "To work on globally impactful projects.",
        "To have the flexibility to work from anywhere.",
        "To constantly learn and adapt to new challenges.",
      ],
    },
  ],
};

// Application State
let currentUser = null;
let currentPage = "home";
let assessmentData = {
  currentQuestion: 0,
  answers: [],
  completed: false,
};
let skillGapChartInstance = null;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
  updateLoginStateUI();
  loadCareers();
  loadCourses();
  initTheme();
  addExperience(true); // Add initial example
  addEducation(true); // Add initial example
  // Initialize form validation for profile setup
  setupProfileFormValidation();

  // Set initial form validation state if profile page exists
  if (document.getElementById("profile-setup-page")) {
    validateProfileForm();
  }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function initTheme() {
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
});
// --- Smarter Chatbot with Career Questions ---
const chatbotKnowledge = {
  greetings: ["hello", "hi", "hey"],
  farewells: ["bye", "goodbye"],
  thanks: ["thank you", "thanks", "thx"],
  career_advice: ["advice", "help", "career"],
};

const chatbotResponses = {
  greetings:
    "Hiii 👋 I'm your AI Career Mentor! What's your name?",
  farewells: "Goodbye! Best of luck on your career journey.",
  thanks: "You're welcome! I'm happy to help.",
  career_advice:
    "Let's dive into your career journey! I'll ask a few questions to understand you better.",
  default:
    "That’s a great question! I can guide you on careers, resumes, and interviews.",
};

// Stepwise career questions
const careerQuestions = [
  // 1️⃣ Personal Background
  "1️⃣ Personal Background\n• What’s your current education level?\n• Which course/branch/stream are you in?\n• Do you have any work experience or internships? If yes, please describe.",
  // 2️⃣ Career Goals & Interests
  "2️⃣ Career Goals & Interests\n• What type of career are you interested in (e.g., software, data science, design, management, research)?\n• Which industries excite you (IT, finance, healthcare, education, gaming, etc.)?\n• Do you prefer working with people, data, machines, or creative tasks?",
  // 3️⃣ Skills & Strengths
  "3️⃣ Skills & Strengths\n• List your technical skills (programming, tools, platforms).\n• What soft skills do you have (communication, teamwork)?\n• Which subjects/topics do you enjoy learning the most?",
  // 4️⃣ Learning Preferences
  "4️⃣ Learning Preferences\n• How do you prefer to learn (online courses, hands-on projects, books, tutorials)?\n• How much time per week can you dedicate to learning new skills?",
  // 5️⃣ Achievements & Portfolio
  "5️⃣ Achievements & Portfolio\n• Have you done any projects, competitions, or certifications?\n• Do you have a GitHub, LinkedIn, or portfolio website?",
  // 6️⃣ Career Challenges
  "6️⃣ Career Challenges\n• What challenges are you facing in career planning?\n• Are you preparing for any exams or certifications?",
  // 7️⃣ Aspirations & Work Style
  "7️⃣ Aspirations & Work Style\n• Do you want to work in startups, MNCs, government, or as a freelancer?\n• Are you interested in entrepreneurship?",
  // 8️⃣ Location & Flexibility
  "8️⃣ Location & Flexibility\n• Which locations/countries are you open to?\n• Are you open to remote or only on-site roles?",
  // 9️⃣ Timeline & Commitment
  "9️⃣ Timeline & Commitment\n• When do you plan to start your career?\n• Are you looking for internships, full-time roles, or higher studies?",
  // 🔟 Feedback & Updates
  "🔟 Feedback & Updates\n• Do you want periodic career tips or skill-building roadmaps?\n• Would you like notifications for events, hackathons, or job openings?",
];

let currentStep = 0;
let userName = "";

// ===== Core Functions =====
function generateAIResponse(message) {
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

function toggleChatbot() {
  document.getElementById("chatbot-window").classList.toggle("hidden");
}

function handleChatInput(event) {
  if (event.key === "Enter") sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById("chatbot-input");
  const message = input.value.trim();
  if (!message) return;
  addChatMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    const response = generateAIResponse(message);
    addChatMessage(response, "bot");
  }, 600);
}

function addChatMessage(message, sender) {
  const messagesContainer = document.getElementById("chatbot-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML = `<p>${message}</p>`;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ===== Auto greet on load =====
window.onload = () => {
  addChatMessage(chatbotResponses.greetings, "bot");
};

// Navigation Functions
function handleGetStartedClick() {
  if (currentUser) {
    showPage("dashboard");
  } else {
    showPage("auth");
  }
}

function setActiveNav(pageName) {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to the clicked link
  if (pageName === 'home') {
    document.querySelector('.nav-link[onclick*="showPage(\'home\')"]').classList.add('active');
  } else {
    document.querySelector(`.nav-link[onclick*="showPage('${pageName}')"]`).classList.add('active');
  }
}

function showPage(pageName) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  const targetPage = document.getElementById(`${pageName}-page`);
  if (targetPage) {
    targetPage.classList.add("active");
    currentPage = pageName;
    window.scrollTo(0, 0);
    switch (pageName) {
      case "careers":
        loadCareers();
        break;
      case "dashboard":
        loadDashboard();
        break;
      case "learning":
        loadCourses();
        break;
      case "assessment":
        resetAssessment();
        loadQuestion();
        break;
      case "profile-setup":
        loadProfileForEditing();
        break;
    }
  }
  document.getElementById("nav-menu").classList.remove("active");
  
  // Set active navigation link
  setActiveNav(pageName);
}

function toggleMobileMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Auth Functions
function showLoginForm() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}

function showRegisterForm() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  if (!email || !password) return alert("Please enter both email and password");

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    if (!currentUser.enrolledCourses) {
      currentUser.enrolledCourses = []; // Ensure old users have this property
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateLoginStateUI();
    showPage("dashboard");
  } else {
    alert("Invalid email or password");
  }
}

function register() {
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  if (!name || !email || !password) return alert("Please fill all fields");

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some((u) => u.email === email))
    return alert("User with this email already exists");

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    profile: null,
    enrolledCourses: [],
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateLoginStateUI();
  showPage("profile-setup");
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateLoginStateUI();
  showPage("home");
}

function updateLoginStateUI() {
  const authButton = document.getElementById("auth-button");
  const dashboardLink = document.getElementById("dashboard-link");

  if (currentUser) {
    dashboardLink.classList.remove("hidden");
    authButton.textContent = "Logout";
    authButton.onclick = logout;
    if (document.getElementById("user-name")) {
      document.getElementById("user-name").textContent = currentUser.name;
    }
  } else {
    dashboardLink.classList.add("hidden");
    authButton.textContent = "Get Started";
    authButton.onclick = () => handleGetStartedClick();
  }
}

// Profile Setup Functions
function addSkill() {
  const skillInput = document.getElementById("skill-input");
  const skill = skillInput.value.trim();

  // Validate skill length
  if (!skill) {
    showValidationError("skills-error", "Please enter a skill");
    return;
  }

  if (skill.length < 3) {
    showValidationError("skills-error", "Skill must be at least 3 characters long");
    return;
  }

  const skillsList = document.getElementById("skills-list");
  const skillTag = document.createElement("span");
  skillTag.className = "skill-tag";
  // store the actual skill text in a data attribute to avoid serializing the remove button
  skillTag.dataset.skill = skill;
  skillTag.appendChild(document.createTextNode(skill));

  // Add remove button
  const removeButton = document.createElement("span");
  removeButton.className = "remove-skill";
  removeButton.innerHTML = "&times;";
  skillTag.appendChild(removeButton);

  skillsList.appendChild(skillTag);
  skillInput.value = "";
  clearValidationError("skills-error");

  // Validate form after adding skill
  validateProfileForm();
}

// Allow removing skills by delegating click events
function setupSkillRemoval() {
  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-skill")) {
        const parent = event.target.parentElement;
        if (parent) parent.remove();
        validateProfileForm();
      }
    });
  }
}

// Simple validation helpers
function showValidationError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
}
function chooseCareerPath(careerId) {
  if (!currentUser) return;

  currentUser.selectedCareerPath = careerId;
  updateUserInStorage();
  alert("Career path selected successfully!");
  closeModal("career-modal");
  showPage("dashboard");
}


function clearValidationError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = "";
  el.style.display = "none";
}

// Validate profile form and enable/disable save button
function validateProfileForm() {
  const education = document.getElementById("education-level");
  const skillsList = document.getElementById("skills-list");
  const interests = document.querySelectorAll('.interests-grid input[type="checkbox"]:checked');
  const saveButton = document.querySelector('.profile-setup .btn--full-width');

  let valid = true;

  if (!education || !education.value) {
    showValidationError("education-error", "Please select your education level");
    if (education) education.classList.add('error');
    valid = false;
  } else {
    clearValidationError("education-error");
    if (education) education.classList.remove('error');
  }

  if (!skillsList || skillsList.children.length === 0) {
    showValidationError("skills-error", "Please add at least one skill");
    const skillInput = document.getElementById('skill-input');
    if (skillInput) skillInput.classList.add('error');
    valid = false;
  } else {
    clearValidationError("skills-error");
    const skillInput = document.getElementById('skill-input');
    if (skillInput) skillInput.classList.remove('error');
  }

  if (!interests || interests.length === 0) {
    showValidationError("interests-error", "Please select at least one interest");
    valid = false;
  } else {
    clearValidationError("interests-error");
  }

  if (saveButton) saveButton.disabled = !valid;
}

function loadProfileForEditing() {
  if (!currentUser || !currentUser.profile) return;

  // Set education
  const educationSelect = document.getElementById("education-level");
  if (educationSelect) educationSelect.value = currentUser.profile.educationLevel;

  // Set skills
  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.innerHTML = "";
    currentUser.profile.skills.forEach(skill => {
      const skillTag = document.createElement("span");
      skillTag.className = "skill-tag";
      skillTag.dataset.skill = skill;
      skillTag.appendChild(document.createTextNode(skill));

      const removeButton = document.createElement("span");
      removeButton.className = "remove-skill";
      removeButton.innerHTML = "&times;";
      skillTag.appendChild(removeButton);

      skillsList.appendChild(skillTag);
    });
  }

  // Set interests
  const interests = currentUser.profile.interests || [];
  document.querySelectorAll('.interests-grid input[type="checkbox"]').forEach(cb => {
    cb.checked = interests.includes(cb.value);
  });

  // Set Coding Profiles
  if (currentUser.profile.codingProfiles) {
    if (document.getElementById("github-profile")) document.getElementById("github-profile").value = currentUser.profile.codingProfiles.github || "";
    if (document.getElementById("leetcode-profile")) document.getElementById("leetcode-profile").value = currentUser.profile.codingProfiles.leetcode || "";
    if (document.getElementById("codeforces-profile")) document.getElementById("codeforces-profile").value = currentUser.profile.codingProfiles.codeforces || "";
  }

  // Change button text if updating
  const saveBtn = document.querySelector('.profile-setup .btn--full-width');
  if (saveBtn) saveBtn.textContent = "Update Profile";

  validateProfileForm();
}

// Setup form listeners and skill removal
function setupProfileFormValidation() {
  const education = document.getElementById("education-level");
  const skillInput = document.getElementById("skill-input");
  const interests = document.querySelectorAll('.interests-grid input[type="checkbox"]');

  if (education) education.addEventListener("change", validateProfileForm);
  if (skillInput) {
    skillInput.addEventListener("input", function () { clearValidationError("skills-error"); });
    // allow Enter to add
    skillInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        addSkill();
      }
    });
  }
  interests.forEach(cb => cb.addEventListener("change", validateProfileForm));

  // Setup skill removal delegation
  setupSkillRemoval();
}

function saveProfile() {
  const educationLevel = document.getElementById("education-level").value;

  const skills = Array.from(
    document.getElementById("skills-list").children
  ).map((el) =>
    el.dataset && el.dataset.skill
      ? el.dataset.skill
      : el.textContent.trim()
  );

  const interests = Array.from(
    document.querySelectorAll('.interests-grid input[type="checkbox"]:checked')
  ).map((cb) => cb.value);

  // ✅ Optional coding profiles (NEW FEATURE)
  const codingProfiles = {
    github: document.getElementById("github-profile")?.value.trim() || "",
    linkedin: document.getElementById("linkedin-profile")?.value.trim() || "",
    leetcode: document.getElementById("leetcode-profile")?.value.trim() || "",
    codeforces: document.getElementById("codeforces-profile")?.value.trim() || "",
  };

  // Validation (unchanged behavior)
  if (!educationLevel || skills.length === 0 || interests.length === 0) {
    return alert("Please complete required profile fields");
  }

  // ✅ Store everything together
  currentUser.profile = {
    educationLevel,
    skills,
    interests,
    codingProfiles,
  };

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  showPage("assessment");
}
function openEditProfile() {
  if (!currentUser || !currentUser.profile) {
    return showPage("profile-setup");
  }

  // Prefill education
  document.getElementById("education-level").value =
    currentUser.profile.educationLevel || "";

  // Prefill skills
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  (currentUser.profile.skills || []).forEach((skill) => {
    const skillTag = document.createElement("span");
    skillTag.className = "skill-tag";
    skillTag.dataset.skill = skill;
    skillTag.appendChild(document.createTextNode(skill));

    const removeButton = document.createElement("span");
    removeButton.className = "remove-skill";
    removeButton.innerHTML = "&times;";
    skillTag.appendChild(removeButton);

    skillsList.appendChild(skillTag);
  });

  // Prefill interests
  document
    .querySelectorAll('.interests-grid input[type="checkbox"]')
    .forEach((cb) => {
      cb.checked = currentUser.profile.interests.includes(cb.value);
    });

  // ✅ Prefill coding profiles
  const profiles = currentUser.profile.codingProfiles || {};
  document.getElementById("github-profile").value = profiles.github || "";
  document.getElementById("linkedin-profile").value = profiles.linkedin || "";
  document.getElementById("leetcode-profile").value = profiles.leetcode || "";
  document.getElementById("codeforces-profile").value = profiles.codeforces || "";

  validateProfileForm();
  showPage("profile-setup");
}


// Assessment Functions
function resetAssessment() {
  assessmentData = {
    currentQuestion: 0,
    answers: [],
    completed: false,
  };
}

function skipAssessment() {
  showPage("dashboard");
}

function skipQuestion() {
  assessmentData.answers[assessmentData.currentQuestion] = "skipped";
  if (
    assessmentData.currentQuestion ===
    appData.assessmentQuestions.length - 1
  ) {
    finishAssessment();
  } else {
    nextQuestion(true); // pass true to indicate it's a skip
  }
}

function loadQuestion() {
  if (assessmentData.currentQuestion >= appData.assessmentQuestions.length)
    return;

  const totalQuestionsSpan = document.getElementById("total-questions");
  if (totalQuestionsSpan)
    totalQuestionsSpan.textContent = appData.assessmentQuestions.length;

  const question = appData.assessmentQuestions[assessmentData.currentQuestion];
  document.getElementById("question-text").textContent = question.question;
  const answerOptions = document.getElementById("answer-options");
  answerOptions.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "answer-option";
    optionElement.textContent = option;
    optionElement.onclick = () => selectAnswer(index);
    if (assessmentData.answers[assessmentData.currentQuestion] === index) {
      optionElement.classList.add("selected");
    }
    answerOptions.appendChild(optionElement);
  });

  document.getElementById("current-question").textContent =
    assessmentData.currentQuestion + 1;
  document.getElementById("assessment-progress").style.width = `${((assessmentData.currentQuestion + 1) /
    appData.assessmentQuestions.length) *
    100
    }%`;

  // Button visibility
  document
    .getElementById("prev-button")
    .classList.toggle("hidden", assessmentData.currentQuestion === 0);
  const isLastQuestion =
    assessmentData.currentQuestion === appData.assessmentQuestions.length - 1;
  document
    .getElementById("next-button")
    .classList.toggle("hidden", isLastQuestion);
  document
    .getElementById("finish-button")
    .classList.toggle("hidden", !isLastQuestion);
}

function selectAnswer(index) {
  document
    .querySelectorAll(".answer-option")
    .forEach((option) => option.classList.remove("selected"));
  document.querySelectorAll(".answer-option")[index].classList.add("selected");
  assessmentData.answers[assessmentData.currentQuestion] = index;
}

function nextQuestion(isSkipping = false) {
  if (
    assessmentData.answers[assessmentData.currentQuestion] === undefined &&
    !isSkipping
  )
    return alert("Please select an answer or skip the question.");
  if (assessmentData.currentQuestion < appData.assessmentQuestions.length - 1) {
    assessmentData.currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (assessmentData.currentQuestion > 0) {
    assessmentData.currentQuestion--;
    loadQuestion();
  }
}

function finishAssessment() {
  if (assessmentData.answers[assessmentData.currentQuestion] === undefined) {
    assessmentData.answers[assessmentData.currentQuestion] = "skipped";
  }
  assessmentData.completed = true;
  if (currentUser) {
    currentUser.assessment = assessmentData;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = currentUser;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }
  showPage("dashboard");
}

// Career Exploration Functions
function loadCareers() {
  displayCareers(appData.careers);
}

function displayCareers(careers) {
  const container = document.getElementById("careers-grid");
  if (!container) return;
  container.innerHTML = careers
    .map(
      (career) => `
                <div class="career-card">
                    <div>
                        <h3>${career.title}</h3>
                        <div class="skills-list">
                            ${career.required_skills
          .slice(0, 3)
          .map(
            (skill) =>
              `<span class="skill-tag">${skill}</span>`
          )
          .join("")}
                        </div>
                    </div>
                    <p style="flex-grow: 1;">${career.description}</p>
                    <div class="career-card-info">
                        <span class="salary-range">${career.salary_range}</span>
                        <button class="btn btn--primary btn--sm" onclick="showCareerDetails(${career.id
        })">Learn More</button>
                    </div>
                </div>
            `
    )
    .join("");
}

function searchCareers(query) {
  const filtered = appData.careers.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );
  displayCareers(filtered);
}

function filterCareers(type, value) {
  if (!value) return displayCareers(appData.careers);
  const filtered = appData.careers.filter((c) => {
    if (type === "salary") return c.salary_category === value;
    if (type === "growth") return c.growth === value;
    if (type === "skills") return c.skill_level === value;
    return true;
  });
  displayCareers(filtered);
}

function showCareerDetails(careerId) {
  const career = appData.careers.find((c) => c.id === careerId);
  if (!career) return;

  const fit = calculateCareerFit(career);

  document.getElementById("modal-career-title").textContent = career.title;

  document.getElementById("career-details").innerHTML = `
                <div class="career-detail-section"><h4>Overview</h4><p>${career.description
    }</p></div>
                <div class="career-detail-section"><h4>Required Skills</h4><div class="skills-list">${career.required_skills
      .map((skill) => `<span class="skill-tag">${skill}</span>`)
      .join("")}</div></div>
                <div class="career-detail-section"><h4>Salary Range</h4><p class="salary-range">${career.salary_range
    }</p></div>
                <div class="career-detail-section"><h4>Future Outlook</h4><p>${career.growth_outlook
    }</p></div>
                <div class="career-detail-section"><h4>Learning Path</h4><div class="learning-path">${career.learning_path
      .map(
        (step, index) =>
          `<div class="learning-step"><div class="step-number-small">${index + 1
          }</div><span>${step}</span></div>`
      )
      .join("")}</div></div>
            ` +
    `<div class="career-detail-section">
      <h4>Career Fit Summary</h4>
      <p><strong>${fit.score}% Match</strong></p>
      <p><strong>Strengths:</strong> ${
        fit.matchedSkills.length
          ? fit.matchedSkills.join(", ")
          : "No strong matches yet"
      }</p>
      <p><strong>Skills to Improve:</strong> ${
        fit.missingSkills.join(", ")
      }</p>
      <p><strong>Estimated Time to Job-Ready:</strong> ${fit.timeToReady}</p>

      <button class="btn btn--primary mt-4"
        onclick="chooseCareerPath(${career.id})">
        Choose This Career Path
      </button>
    </div>

    <div class="career-detail-section">
      <h4>Required Skills</h4>
      <div class="skills-list">
        ${career.required_skills
          .map((skill) => {
            const skillLower = skill.toLowerCase();
const exact = fit.matchedSkills.includes(skill);
const partial = currentUser?.profile?.skills.some(
  s =>
    s.toLowerCase().includes(skillLower) ||
    skillLower.includes(s.toLowerCase())
);

let cls = "skill-missing";
let symbol = "✗";

if (exact) {
  cls = "skill-owned";
  symbol = "✓";
} else if (partial) {
  cls = "skill-partial";
  symbol = "~";
}

return `
  <span class="skill-tag ${cls}">
    ${skill} ${symbol}
  </span>`;

          })
          .join("")}
      </div>
    </div>

<div class="career-detail-section">
  <h4>Salary Range</h4>
  ${
    (() => {
      const cleaned = career.salary_range
        .replace("₹", "")
        .replace(" LPA", "");
      const [min, max] = cleaned.split("-");
      return `
        <ul>
          <li><strong>Entry-level:</strong> ₹${min} LPA</li>
          <li><strong>Mid-level:</strong> ₹${cleaned} LPA</li>
          <li><strong>Senior-level:</strong> ₹${max} LPA</li>
        </ul>
      `;
    })()
  }
</div>


    <div class="career-detail-section">
      <h4>Actionable Learning Path</h4>
      ${career.learning_path
        .map(
          (step, index) => `
          <div class="topic-item">
            <div>
              <strong>${step}</strong>
              <span>Estimated: 4–6 weeks</span>
            </div>
            <button class="btn btn--outline btn--sm"
              onclick="showPage('learning')">
              Start Learning
            </button>
          </div>
        `
        )
        .join("")}
    </div>
  `;

  openModal("career-modal");
}


function loadDashboard() {
  if (!currentUser) return showPage("auth");
  document.getElementById("user-name").textContent = currentUser.name;
  updateDashboardStats();
  loadCareerRecommendations();
  initializeSkillGapChart();
  loadEnrolledCourses();
  renderCodingProfiles();
  renderChosenCareer(); 
}
 function openChosenCareer() {
  if (!currentUser?.selectedCareerPath) return;
  showCareerDetails(currentUser.selectedCareerPath);
}



function updateDashboardStats() {
  const completion =
    currentUser && currentUser.assessment
      ? "100%"
      : currentUser && currentUser.profile
        ? "75%"
        : "25%";
  document.getElementById("profile-completion").textContent = completion;
  document.getElementById("career-matches").textContent =
    calculateCareerMatches().length;
  document.getElementById("skills-to-develop").textContent = currentUser.profile
    ? currentUser.profile.skills.length + 5
    : "N/A";
  document.getElementById("enrolled-courses-count").textContent =
    currentUser.enrolledCourses?.length || 0;
}// Dashboard Functions

function renderChosenCareer() {
  const card = document.getElementById("chosen-career-card");
  const titleEl = document.getElementById("chosen-career-title");

  if (!card || !currentUser?.selectedCareerPath) {
    card?.classList.add("hidden");
    return;
  }

  const career = appData.careers.find(
    c => c.id === currentUser.selectedCareerPath
  );

  if (!career) {
    card.classList.add("hidden");
    return;
  }

  titleEl.textContent = career.title;
  card.classList.remove("hidden");
}

function renderCodingProfiles() {
  const container = document.getElementById("coding-profiles-list");
  const card = document.getElementById("coding-profiles-card");

  if (!container || !currentUser?.profile?.codingProfiles) {
    if (card) card.style.display = "none";
    return;
  }

  const profiles = currentUser.profile.codingProfiles;

  const links = [
    { label: "GitHub", url: profiles.github },
    { label: "LinkedIn", url: profiles.linkedin },
    { label: "LeetCode", url: profiles.leetcode },
    { label: "Codeforces", url: profiles.codeforces },
  ].filter((p) => p.url);

  if (links.length === 0) {
    card.style.display = "none";
    return;
  }

  card.style.display = "block";

  container.innerHTML = links
    .map(
      (p) => `
        <div class="topic-item">
          <a href="${p.url}" target="_blank" rel="noopener">
            <strong>${p.label}</strong>
          </a>
        </div>
      `
    )
    .join("");
}


function loadCareerRecommendations() {
  const container = document.getElementById("career-recommendations");
  if (!container) return;

  const recommendations = calculateCareerMatches().slice(0, 3);

  container.innerHTML = recommendations
    .map((career) => {
      const isSelected = career.id === currentUser?.selectedCareerPath;

      return `
        <div class="topic-item ${isSelected ? "selected-career" : ""}"
             style="cursor: pointer;"
             onclick="showCareerDetails(${career.id})">
          <div>
            <h4>
              ${career.title}
              ${isSelected ? " ⭐" : ""}
            </h4>
            <span>${career.salary_range}</span>
          </div>
        </div>
      `;
    })
    .join("");
}


function calculateCareerMatches() {
  if (!currentUser || !currentUser.profile) return appData.careers.slice(0, 3);
  return appData.careers.sort(() => 0.5 - Math.random()); // Simple random for demo
}

function initializeSkillGapChart() {
  const ctx = document.getElementById("skillGapChart");
  if (!ctx) return;
  if (skillGapChartInstance) {
    skillGapChartInstance.destroy();
  }
  skillGapChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Python",
        "Machine Learning",
        "Statistics",
        "SQL",
        "Data Visualization",
      ],
      datasets: [
        {
          label: "Current Skills",
          data: [75, 45, 60, 80, 30],
          backgroundColor: "rgba(67, 97, 238, 0.2)",
          borderColor: "#4361ee",
          borderWidth: 2,
        },
        {
          label: "Required Skills",
          data: [90, 85, 80, 85, 75],
          backgroundColor: "rgba(6, 214, 160, 0.2)",
          borderColor: "#06d6a0",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
}
function calculateCareerFit(career) {
  if (!currentUser || !currentUser.profile) {
    return {
      score: 0,
      matchedSkills: [],
      missingSkills: career.required_skills,
      timeToReady: "N/A",
    };
  }

  const userSkills = currentUser.profile.skills.map(s => s.toLowerCase());

  const matchedSkills = career.required_skills.filter(skill =>
    userSkills.includes(skill.toLowerCase())
  );

  const missingSkills = career.required_skills.filter(
    skill => !userSkills.includes(skill.toLowerCase())
  );

  const score =
  career.required_skills.length === 0
    ? 0
    : Math.round(
        (matchedSkills.length / career.required_skills.length) * 100
      );


  return {
    score,
    matchedSkills,
    missingSkills,
    timeToReady:
      missingSkills.length <= 2
        ? "3–6 months"
        : missingSkills.length <= 4
        ? "6–9 months"
        : "9–12 months",
  };
}


// Learning Hub & Enrollment Functions
function loadCourses() {
  const container = document.getElementById("courses-grid");
  if (!container) return;
  container.innerHTML = appData.courses
    .map((course) => {
      const isEnrolled = currentUser?.enrolledCourses?.includes(course.id);
      return `
                <div class="course-card">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-card-features">
                        ${course.features
          .map(
            (feature) =>
              `<span><i class="fas fa-check-circle" style="color: var(--accent);"></i> ${feature}</span>`
          )
          .join(" &bull; ")}
                    </div>
                    <div class="course-card-info">
                        <div>
                            <span>${course.duration} • ${course.level
        }</span><br>
                             <span class="course-card-rating">Rating: ${course.rating
        } ★</span>
                        </div>
                        <button 
                            class="btn btn--primary btn--sm ${isEnrolled ? "enrolled" : ""
        }" 
                            onclick="enrollInCourse(this, ${course.id})"
                            ${isEnrolled ? "disabled" : ""}>
                            ${isEnrolled ? "Enrolled" : "Enroll Now"}
                        </button>
                    </div>
                </div>
            `;
    })
    .join("");
}

function loadEnrolledCourses() {
  const container = document.getElementById("enrolled-courses-list");
  if (!container || !currentUser || !currentUser.enrolledCourses) return;

  const enrolled = appData.courses.filter((course) =>
    currentUser.enrolledCourses.includes(course.id)
  );

  if (enrolled.length === 0) {
    container.innerHTML = "<p>You have not enrolled in any courses yet.</p>";
    return;
  }

  container.innerHTML = enrolled
    .map(
      (course) => `
                <div class="topic-item">
                     <div>
                        <h4>${course.title}</h4>
                        <span>${course.provider}</span>
                    </div>
                    <button class="btn btn-danger btn--sm" onclick="unEnrollCourse(${course.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `
    )
    .join("");
}

function enrollInCourse(button, courseId) {
  if (!currentUser) {
    alert("Please log in to enroll in courses.");
    showPage("auth");
    return;
  }

  if (!currentUser.enrolledCourses) {
    currentUser.enrolledCourses = [];
  }

  if (currentUser.enrolledCourses.includes(courseId)) return;

  currentUser.enrolledCourses.push(courseId);
  updateUserInStorage();

  button.textContent = "Enrolled";
  button.classList.add("enrolled");
  button.disabled = true;
}

function unEnrollCourse(courseId) {
  if (!currentUser || !currentUser.enrolledCourses) return;
  currentUser.enrolledCourses = currentUser.enrolledCourses.filter(
    (id) => id !== courseId
  );
  updateUserInStorage();
  loadEnrolledCourses(); // Refresh the list on the dashboard
}

function updateUserInStorage() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}

// --- Resume Builder Functions ---
function addExperience(isExample = false) {
  const container = document.getElementById("experience-container");
  const item = document.createElement("div");
  item.className = "form-group experience-item";
  item.innerHTML = `
                <input type="text" class="form-control mb-4" placeholder="Job Title" value="${isExample ? "Data Analyst Intern" : ""
    }">
                <input type="text" class="form-control mb-4" placeholder="Company" value="${isExample ? "Tech Solutions Inc." : ""
    }">
                <textarea class="form-control" rows="2" placeholder="Responsibilities...">${isExample
      ? "Analyzed sales data to identify trends, creating dashboards that improved decision-making."
      : ""
    }</textarea>
            `;
  container.appendChild(item);
}

function addEducation(isExample = false) {
  const container = document.getElementById("education-container");
  const item = document.createElement("div");
  item.className = "form-group education-item";
  item.innerHTML = `
                <input type="text" class="form-control mb-4" placeholder="Degree" value="${isExample ? "B.Tech in Computer Science" : ""
    }">
                <input type="text" class="form-control mb-4" placeholder="Institution" value="${isExample ? "University of Technology" : ""
    }">
                <input type="text" class="form-control" placeholder="Years Attended" value="${isExample ? "2019 - 2023" : ""
    }">
            `;
  container.appendChild(item);
}

function addResumeSkill() {
  const skillInput = document.getElementById("resume-skill-input");
  const skill = skillInput.value.trim();
  if (!skill) return;
  const skillsList = document.getElementById("resume-skills");
  const skillTag = document.createElement("span");
  skillTag.className = "skill-tag";
  skillTag.textContent = skill;
  skillsList.appendChild(skillTag);
  skillInput.value = "";
}

function generateResume() {
  const name = document.getElementById("resume-name").value;
  const email = document.getElementById("resume-email").value;
  const phone = document.getElementById("resume-phone").value;
  const summary = document.getElementById("resume-summary").value;
  const template = document.getElementById("resume-template").value;

  const experiences = Array.from(
    document.querySelectorAll("#experience-container .experience-item")
  ).map((item) => ({
    title: item.children[0].value,
    company: item.children[1].value,
    desc: item.children[2].value,
  }));

  const educations = Array.from(
    document.querySelectorAll("#education-container .education-item")
  ).map((item) => ({
    degree: item.children[0].value,
    school: item.children[1].value,
    years: item.children[2].value,
  }));

  const skills = Array.from(
    document.querySelectorAll("#resume-skills .skill-tag")
  ).map((tag) => tag.textContent);

  const previewContent = document.getElementById("resume-preview-content");

  previewContent.className = `resume-template ${template}`;

  previewContent.innerHTML = `
    <h2>${name}</h2>
    <p>${email} | ${phone}</p>

    <h3>Professional Summary</h3>
    <p>${summary}</p>

    <h3>Work Experience</h3>
    ${experiences.map(exp => `
      <p><strong>${exp.title}</strong> – ${exp.company}</p>
      <p>${exp.desc}</p>
    `).join("")}

    <h3>Education</h3>
    ${educations.map(edu => `
      <p><strong>${edu.degree}</strong>, ${edu.school} (${edu.years})</p>
    `).join("")}

    <h3>Skills</h3>
    <p>${skills.join(", ")}</p>
  `;

  openModal("resume-preview-modal");
}

function downloadResume() {
  const { jsPDF } = window.jspdf;
  const resumeContent = document.getElementById("resume-preview-content");
  const originalTheme = document.documentElement.getAttribute("data-theme");

  // Temporarily set a light theme for PDF generation
  document.documentElement.removeAttribute("data-theme");

  html2canvas(resumeContent, {
    scale: 2,
    backgroundColor: "#ffffff", // Force white background
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight - 20);
    pdf.save("resume.pdf");

    // Restore original theme
    if (originalTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });
}
// --- End Resume Builder ---

// --- New Modal & Job Search Functions ---
const dummyJobs = [
  {
    title: "Junior Data Scientist",
    company: "DataCorp",
    location: "Bengaluru, India",
    keywords: ["data scientist", "python", "sql"],
  },
  {
    title: "UX/UI Designer",
    company: "Creative Minds",
    location: "Remote",
    keywords: ["ux", "ui", "designer", "figma"],
  },
  {
    title: "Backend Software Engineer",
    company: "CodeBase Inc.",
    location: "Pune, India",
    keywords: ["software engineer", "java", "backend"],
  },
  {
    title: "Digital Marketing Intern",
    company: "GrowFast",
    location: "Mumbai, India",
    keywords: ["digital marketing", "seo", "intern"],
  },
  {
    title: "Senior Cloud Engineer",
    company: "InfraCloud",
    location: "Hyderabad, India",
    keywords: ["cloud", "aws", "senior"],
  },
];

function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
  if (modalId === "job-search-modal") {
    displayJobs(dummyJobs);
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

function displayJobs(jobs) {
  const container = document.getElementById("job-listings");
  if (!container) return;
  container.innerHTML = jobs
    .map(
      (job) => `
                <div class="topic-item" style="cursor: pointer;" onclick="alert('Applied to ${job.title} at ${job.company}!')">
                   <div>
                     <h4>${job.title}</h4>
                     <span>${job.company} • ${job.location}</span>
                   </div>
                </div>
            `
    )
    .join("");
  if (jobs.length === 0) {
    container.innerHTML = "<p>No jobs found matching your search.</p>";
  }
}

function simulateJobSearch(query) {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) {
    displayJobs(dummyJobs);
    return;
  }
  const filteredJobs = dummyJobs.filter(
    (job) =>
      job.keywords.some((kw) => kw.includes(lowerQuery)) ||
      job.title.toLowerCase().includes(lowerQuery)
  );
  displayJobs(filteredJobs);
}
// --- End New Modal Functions ---

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const debouncedSearch = debounce(searchCareers, 300);
const debouncedJobSearch = debounce(simulateJobSearch, 300);

// ---Start Dynamic Copyright
function setDynamicCopyright(companyName) {
  const currYear = new Date().getFullYear();
  document.getElementById("copyright").textContent = `© ${currYear} ${companyName}. All rights reserved.`;
}
//----End Dynamic Copyright----

// Global Access
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.login = login;
window.register = register;
window.addSkill = addSkill;
window.saveProfile = saveProfile;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.skipAssessment = skipAssessment;
window.skipQuestion = skipQuestion;
window.finishAssessment = finishAssessment;
window.searchCareers = debouncedSearch;
window.filterCareers = filterCareers;
window.showCareerDetails = showCareerDetails;
window.openModal = openModal;
window.closeModal = closeModal;
window.simulateJobSearch = debouncedJobSearch;
window.toggleChatbot = toggleChatbot;
window.handleChatInput = handleChatInput;
window.sendChatMessage = sendChatMessage;
window.addExperience = addExperience;
window.addEducation = addEducation;
window.addResumeSkill = addResumeSkill;
window.generateResume = generateResume;
window.downloadResume = downloadResume;
window.enrollInCourse = enrollInCourse;
window.unEnrollCourse = unEnrollCourse;
window.handleGetStartedClick = handleGetStartedClick;
window.setDynamicCopyright = setDynamicCopyright('AI Career Advisor');
window.setDynamicCopyright=setDynamicCopyright('AI Career Advisor');
window.openEditProfile = openEditProfile;
window.openChosenCareer = openChosenCareer;

// Newsletter Subscription
function subscribeToNewsletter() {
  const emailInput = document.querySelector('.newsletter-input');
  const email = emailInput.value;
  
  if (!email || !isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  alert('Thank you for subscribing to our newsletter!');
  emailInput.value = '';
}

function isValidEmail(email) {
  const emailRegex = /^[\w+\.-]+@[\w+\.-]+\.\w+$/;
  return emailRegex.test(email);
}

// Add event listener to newsletter button
document.addEventListener('DOMContentLoaded', function() {
  const newsletterButton = document.querySelector('.newsletter-button');
  if (newsletterButton) {
    newsletterButton.addEventListener('click', subscribeToNewsletter);
    
    // Also allow subscription on pressing Enter in the email field
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) {
      newsletterInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          subscribeToNewsletter();
        }
      });
    }
  }
});
