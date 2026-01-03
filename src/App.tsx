import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProfileSetup from './pages/ProfileSetup';
import Assessment from './pages/Assessment';
import Careers from './pages/Careers';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Community from './pages/Community';
import Resume from './pages/Resume';
import PrivateRoute from './components/PrivateRoute';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/community" element={<Community />} />

            <Route path="/profile-setup" element={<PrivateRoute><ProfileSetup /></PrivateRoute>} />
            <Route path="/assessment" element={<PrivateRoute><Assessment /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/resume" element={<PrivateRoute><Resume /></PrivateRoute>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
