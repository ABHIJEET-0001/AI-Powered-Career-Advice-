import { useState } from 'react';

function AuthPage({ login, register }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password');
      return;
    }
    
    const success = login(formData.email, formData.password);
    if (!success) {
      alert('Invalid email or password');
    }
  };

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill all fields');
      return;
    }
    
    const result = register(formData.name, formData.email, formData.password);
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <div id="auth-page" className="page active">
      <div className="container">
        <div className="auth-container">
          {/* Login Form */}
          <div className={`auth-form ${isLogin ? '' : 'hidden'}`} id="login-form">
            <h2>Login to Your Account</h2>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn--primary btn--full-width" onClick={handleLogin}>
              Login
            </button>
            <div className="auth-switch">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={(e) => {e.preventDefault(); setIsLogin(false);}}>
                  Register
                </a>
              </p>
            </div>
          </div>

          {/* Register Form */}
          <div className={`auth-form ${isLogin ? 'hidden' : ''}`} id="register-form">
            <h2>Create an Account</h2>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn--primary btn--full-width" onClick={handleRegister}>
              Register
            </button>
            <div className="auth-switch">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={(e) => {e.preventDefault(); setIsLogin(true);}}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;