import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (register(name, email, password)) {
            navigate('/profile-setup');
        } else {
            alert('User already exists');
        }
    };

    return (
        <div id="auth-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="auth-container">
                    {isLogin ? (
                        <div className="auth-form" id="login-form">
                            <h2>Login to Your Account</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn--primary btn--full-width">Login</button>
                            </form>
                            <div className="auth-switch">
                                <p>Don't have an account? <button className="btn--text" onClick={() => setIsLogin(false)} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline' }}>Register</button></p>
                            </div>
                        </div>
                    ) : (
                        <div className="auth-form" id="register-form">
                            <h2>Create an Account</h2>
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn--primary btn--full-width">Register</button>
                            </form>
                            <div className="auth-switch">
                                <p>Already have an account? <button className="btn--text" onClick={() => setIsLogin(true)} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline' }}>Login</button></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
