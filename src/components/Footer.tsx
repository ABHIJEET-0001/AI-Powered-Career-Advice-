import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>AI Career Advisor</h4>
                        <p>Your personalized career guidance platform powered by AI</p>
                    </div>
                    <div className="footer-section">
                        <h5>Quick Links</h5>
                        <Link to="/">Home</Link>
                        <Link to="/careers">Explore Careers</Link>
                        <Link to="/learning">Learning Hub</Link>
                        <Link to="/community">Community</Link>
                    </div>
                    <div className="footer-section">
                        <h5>Resources</h5>
                        <a href="#">Career Blog</a>
                        <a href="#">Skill Assessment</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Interview Prep</a>
                    </div>
                    <div className="footer-section">
                        <h5>Support</h5>
                        <a href="#">Help Center</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 AI Career Advisor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
