import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const handleGetStarted = () => {
        if (currentUser) {
            navigate('/dashboard');
        } else {
            navigate('/auth');
        }
    };

    return (
        <div id="home-page" className="page active" style={{ display: 'block' }}>
            <section className="hero" style={{ backgroundImage: 'none' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Find the Right Career Path with AI</h1>
                        <p className="hero-subtitle">Personalized guidance for students & professionals</p>
                        <button className="btn btn--primary btn--lg" onClick={handleGetStarted}>Get Started</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Choose AI Career Advisor?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-route"></i></div>
                            <h3>Personalized Career Roadmap</h3>
                            <p>Get a customized learning path based on your goals and current skills.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
                            <h3>AI Skill Gap Analysis</h3>
                            <p>Identify skill gaps and get recommendations to bridge them effectively.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-file-alt"></i></div>
                            <h3>Resume & Interview Guidance</h3>
                            <p>AI-powered resume building and interview preparation tools.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-industry"></i></div>
                            <h3>Industry Insights</h3>
                            <p>Stay updated with latest industry trends and salary benchmarks.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-users"></i></div>
                            <h3>Community & Mentorship</h3>
                            <p>Connect with peers and industry experts for guidance and networking.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fas fa-magnifying-glass-chart"></i></div>
                            <h3>Job Market Analysis</h3>
                            <p>Get real-time insights into job demand, required skills, and salary expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <div className="container">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Take Assessment</h3>
                            <p>Complete our comprehensive skill and interest assessment.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>AI Analysis</h3>
                            <p>Our AI analyzes your results and career preferences.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Get Roadmap</h3>
                            <p>Receive personalized career recommendations and learning paths.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Learn & Develop</h3>
                            <p>Engage with curated courses to build in-demand skills.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">5</div>
                            <h3>Build Your Brand</h3>
                            <p>Use our tools to create a standout resume and prepare for interviews.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">6</div>
                            <h3>Apply & Grow</h3>
                            <p>Find job opportunities and advance your professional career.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">Success Stories</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"This platform helped me transition from mechanical engineering to data science. The
                                    personalized roadmap was incredibly helpful!"</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Priya Sharma</strong>
                                <span>Data Scientist at TCS</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"The AI mentor guided me through my career change journey. Now I'm working at my dream
                                    company!"</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Rahul Kumar</strong>
                                <span>UX Designer at Flipkart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Start Your Free Career Assessment Today</h2>
                    <button className="btn btn--primary btn--lg" onClick={handleGetStarted}>Get Started Now</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
