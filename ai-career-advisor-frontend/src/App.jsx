import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import AssessmentPage from './pages/AssessmentPage';
import CareersPage from './pages/CareersPage';
import DashboardPage from './pages/DashboardPage';
import LearningHubPage from './pages/LearningHubPage';
import CommunityPage from './pages/CommunityPage';
import ResumePage from './pages/ResumePage';

function App() {
  const [page, setPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Load user and theme from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const showPage = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      if (!user.enrolledCourses) user.enrolledCourses = [];
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      showPage('dashboard');
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'User with this email already exists' };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      profile: null,
      enrolledCourses: [],
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showPage('profile-setup');
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    showPage('home');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...currentUser, ...updates };
    setCurrentUser(updatedUser);
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  const handleGetStartedClick = () => {
    if (currentUser) {
      showPage('dashboard');
    } else {
      showPage('auth');
    }
  };

  return (
    <div>
      <Navbar 
        currentUser={currentUser}
        showPage={showPage}
        logout={logout}
        theme={theme}
        toggleTheme={toggleTheme}
        handleGetStartedClick={handleGetStartedClick}
      />

      {page === 'home' && <HomePage showPage={showPage} handleGetStartedClick={handleGetStartedClick} />}
      {page === 'auth' && <AuthPage login={login} register={register} />}
      {page === 'profile-setup' && <ProfileSetupPage currentUser={currentUser} updateUser={updateUser} showPage={showPage} />}
      {page === 'assessment' && <AssessmentPage currentUser={currentUser} updateUser={updateUser} showPage={showPage} />}
      {page === 'careers' && <CareersPage />}
      {page === 'dashboard' && <DashboardPage currentUser={currentUser} showPage={showPage} updateUser={updateUser} />}
      {page === 'learning' && <LearningHubPage currentUser={currentUser} updateUser={updateUser} />}
      {page === 'community' && <CommunityPage />}
      {page === 'resume' && <ResumePage />}

      <Chatbot />
      <Footer showPage={showPage} />
    </div>
  );
}

export default App;