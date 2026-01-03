import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleAuthClick = () => {
        if (currentUser) {
            logout();
            navigate('/');
        } else {
            navigate('/auth');
        }
        setIsMobileMenuOpen(false);
    };

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <Link to="/" onClick={closeMenu}>
                        <h2>AI Career Advisor</h2>
                    </Link>
                </div>
                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/careers" className="nav-link" onClick={closeMenu}>Explore Careers</Link>
                    <Link to="/learning" className="nav-link" onClick={closeMenu}>Learning Hub</Link>
                    <Link to="/community" className="nav-link" onClick={closeMenu}>Community</Link>

                    {currentUser && (
                        <Link to="/dashboard" id="dashboard-link" className="nav-link" onClick={closeMenu}>Dashboard</Link>
                    )}

                    <button id="auth-button" className="btn btn--primary" onClick={handleAuthClick}>
                        {currentUser ? 'Logout' : 'Get Started'}
                    </button>

                    <ThemeToggle />
                </div>
                <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
