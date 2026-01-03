function Footer({ showPage }) {
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
            <a href="#" onClick={(e) => {e.preventDefault(); showPage('home');}}>Home</a>
            <a href="#" onClick={(e) => {e.preventDefault(); showPage('careers');}}>Explore Careers</a>
            <a href="#" onClick={(e) => {e.preventDefault(); showPage('learning');}}>Learning Hub</a>
            <a href="#" onClick={(e) => {e.preventDefault(); showPage('community');}}>Community</a>
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
}

export default Footer;