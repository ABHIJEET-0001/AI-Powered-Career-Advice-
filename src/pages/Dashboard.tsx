import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { careers, courses } from '../data/data';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ClipboardList, BookOpen, FileText, Users, Briefcase, Handshake } from 'lucide-react';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Dashboard: React.FC = () => {
    const { currentUser, updateUser } = useAuth();
    const navigate = useNavigate();

    const completion = currentUser?.assessment ? "100%" : (currentUser?.profile ? "75%" : "25%");
    const careerMatchesCount = 3; // Mock logic
    const skillsToDevelop = currentUser?.profile ? currentUser.profile.skills.length + 5 : "N/A";
    const enrolledCourses = courses.filter(course => currentUser?.enrolledCourses?.includes(course.id));

    const chartData = {
        labels: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
        datasets: [
            {
                label: 'Current Skills',
                data: [75, 45, 60, 80, 30],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: '#4361ee',
                borderWidth: 2,
            },
            {
                label: 'Required Skills',
                data: [90, 85, 80, 85, 75],
                backgroundColor: 'rgba(6, 214, 160, 0.2)',
                borderColor: '#06d6a0',
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    const handleUnenroll = (courseId: number) => {
        if (currentUser) {
            const updatedCourses = currentUser.enrolledCourses.filter(id => id !== courseId);
            updateUser({ ...currentUser, enrolledCourses: updatedCourses });
        }
    };

    return (
        <div id="dashboard-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="dashboard-container">
                    <div className="dashboard-header">
                        <h1>Welcome back, <span id="user-name">{currentUser?.name || "User"}</span>!</h1>
                        <p>Here's your personalized career guidance</p>
                    </div>

                    <div className="dashboard-stats">
                        <div className="stat-card">
                            <h3>{completion}</h3>
                            <p>Profile Completion</p>
                        </div>
                        <div className="stat-card">
                            <h3>{careerMatchesCount}</h3>
                            <p>Career Matches</p>
                        </div>
                        <div className="stat-card">
                            <h3>{skillsToDevelop}</h3>
                            <p>Skills to Develop</p>
                        </div>
                        <div className="stat-card">
                            <h3>{currentUser?.enrolledCourses?.length || 0}</h3>
                            <p>Courses Enrolled</p>
                        </div>
                    </div>

                    <div className="dashboard-actions">
                        <div className="action-card" onClick={() => navigate('/assessment')}>
                            <div className="action-icon"><ClipboardList /></div>
                            <div className="action-content">
                                <h4>Career Assessment</h4>
                                <p>Get personalized recommendations</p>
                            </div>
                        </div>
                        <div className="action-card" onClick={() => navigate('/learning')}>
                            <div className="action-icon"><BookOpen /></div>
                            <div className="action-content">
                                <h4>Learning Hub</h4>
                                <p>Explore courses and grow your skills</p>
                            </div>
                        </div>
                        <div className="action-card" onClick={() => navigate('/resume')}>
                            <div className="action-icon"><FileText /></div>
                            <div className="action-content">
                                <h4>Resume Builder</h4>
                                <p>Create a professional resume with AI</p>
                            </div>
                        </div>
                        <div className="action-card" onClick={() => navigate('/community')}>
                            <div className="action-icon"><Users /></div>
                            <div className="action-content">
                                <h4>Community</h4>
                                <p>Connect with mentors and peers</p>
                            </div>
                        </div>
                        <div className="action-card" onClick={() => alert("Simulated Job Search")}> {/* Placeholder for Job Search Modal */}
                            <div className="action-icon"><Briefcase /></div>
                            <div className="action-content">
                                <h4>Job Search Simulator</h4>
                                <p>Practice finding jobs</p>
                            </div>
                        </div>
                        <div className="action-card" onClick={() => navigate('/community')}>
                            <div className="action-icon"><Handshake /></div>
                            <div className="action-content">
                                <h4>Mentor Connect</h4>
                                <p>Find and connect with mentors</p>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-main-content">
                        <div className="dashboard-card">
                            <h3>Career Recommendations</h3>
                            <div id="career-recommendations">
                                {careers.slice(0, 3).map(career => (
                                    <div key={career.id} className="topic-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/careers')}>
                                        <div>
                                            <h4>{career.title}</h4>
                                            <span>{career.salary_range}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <h3>Skill Gap Analysis</h3>
                            <div className="skill-gap-chart" style={{ height: '300px' }}>
                                <Radar data={chartData} options={chartOptions} />
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <h3>Learning Roadmap</h3>
                            <div className="roadmap-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>Short-term (0-6 months)</h4>
                                        <p>Complete Python fundamentals and basic statistics</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>Medium-term (6-12 months)</h4>
                                        <p>Learn machine learning and data visualization</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h4>Long-term (1-2 years)</h4>
                                        <p>Advanced ML, deep learning, and domain expertise</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <h3>My Enrolled Courses</h3>
                            <div id="enrolled-courses-list">
                                {enrolledCourses.length === 0 ? (
                                    <p>You have not enrolled in any courses yet.</p>
                                ) : (
                                    enrolledCourses.map(course => (
                                        <div key={course.id} className="topic-item">
                                            <div>
                                                <h4>{course.title}</h4>
                                                <span>{course.provider}</span>
                                            </div>
                                            <button className="btn btn-danger btn--sm" onClick={() => handleUnenroll(course.id)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
