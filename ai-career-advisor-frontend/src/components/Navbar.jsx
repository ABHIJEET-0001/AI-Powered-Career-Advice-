import { useState } from 'react';

function Navbar({ currentUser, showPage, logout, theme, toggleTheme, handleGetStartedClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h2>AI Career Advisor</h2>
        </div>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <a href="#" className="nav-link" onClick={(e) => {e.preventDefault(); showPage('home'); setMobileMenuOpen(false);}}>Home</a>
          <a href="#" className="nav-link" onClick={(e) => {e.preventDefault(); showPage('careers'); setMobileMenuOpen(false);}}>Explore Careers</a>
          <a href="#" className="nav-link" onClick={(e) => {e.preventDefault(); showPage('learning'); setMobileMenuOpen(false);}}>Learning Hub</a>
          <a href="#" className="nav-link" onClick={(e) => {e.preventDefault(); showPage('community'); setMobileMenuOpen(false);}}>Community</a>
          
          {currentUser && (
            <a href="#" id="dashboard-link" className="nav-link" onClick={(e) => {e.preventDefault(); showPage('dashboard'); setMobileMenuOpen(false);}}>Dashboard</a>
          )}
          
          <button 
            id="auth-button" 
            className="btn btn--primary" 
            onClick={() => { currentUser ? logout() : handleGetStartedClick(); setMobileMenuOpen(false); }}
          >
            {currentUser ? 'Logout' : 'Get Started'}
          </button>
          
          <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
        </div>
        
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;