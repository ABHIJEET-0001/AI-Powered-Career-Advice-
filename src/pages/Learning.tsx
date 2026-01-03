import React from 'react';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/data';
import { useNavigate } from 'react-router-dom';

const Learning: React.FC = () => {
    const { currentUser, updateUser } = useAuth();
    const navigate = useNavigate();

    const handleEnroll = (courseId: number) => {
        if (!currentUser) {
            alert("Please log in to enroll in courses.");
            navigate('/auth');
            return;
        }

        if (!currentUser.enrolledCourses) {
            currentUser.enrolledCourses = [];
        }

        if (!currentUser.enrolledCourses.includes(courseId)) {
            const updatedUser = {
                ...currentUser,
                enrolledCourses: [...currentUser.enrolledCourses, courseId]
            };
            updateUser(updatedUser);
        }
    };

    return (
        <div id="learning-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="page-header">
                    <h2>Learning Hub</h2>
                    <p>Explore courses and resources to develop your skills</p>
                </div>
                <div className="courses-grid">
                    {courses.map(course => {
                        const isEnrolled = currentUser?.enrolledCourses?.includes(course.id);
                        return (
                            <div className="course-card" key={course.id}>
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <div className="course-card-features">
                                    {course.features.map((feature, i) => (
                                        <span key={i}><i className="fas fa-check-circle" style={{ color: 'var(--accent)' }}></i> {feature} {i < course.features.length - 1 ? ' • ' : ''}</span>
                                    ))}
                                </div>
                                <div className="course-card-info">
                                    <div>
                                        <span>{course.duration} • {course.level}</span><br />
                                        <span className="course-card-rating">Rating: {course.rating} ★</span>
                                    </div>
                                    <button
                                        className={`btn btn--primary btn--sm ${isEnrolled ? "enrolled" : ""}`}
                                        onClick={() => !isEnrolled && handleEnroll(course.id)}
                                        disabled={isEnrolled}
                                    >
                                        {isEnrolled ? "Enrolled" : "Enroll Now"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Learning;
