import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { type UserProfile } from '../types';

const ProfileSetup: React.FC = () => {
    const { currentUser, updateUser } = useAuth();
    const navigate = useNavigate();

    const [educationLevel, setEducationLevel] = useState('');
    const [skillInput, setSkillInput] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [interests, setInterests] = useState<string[]>([]);

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput('');
        }
    };

    const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter(i => i !== value));
        }
    };

    const handleSave = () => {
        if (!educationLevel || skills.length === 0 || interests.length === 0) {
            alert('Please complete all profile fields');
            return;
        }

        if (currentUser) {
            const updatedProfile: UserProfile = {
                educationLevel,
                skills,
                interests
            };

            updateUser({
                ...currentUser,
                profile: updatedProfile
            });

            navigate('/assessment');
        }
    };

    return (
        <div id="profile-setup-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="profile-setup">
                    <h2>Complete Your Profile</h2>
                    <div className="form-group">
                        <label className="form-label">Education Level</label>
                        <select
                            className="form-control"
                            value={educationLevel}
                            onChange={(e) => setEducationLevel(e.target.value)}
                        >
                            <option value="">Select your education level</option>
                            <option value="highschool">High School</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Current Skills</label>
                        <div className="skills-input">
                            <div className="skill-item">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Add a skill"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                                />
                                <button className="btn btn--primary" onClick={handleAddSkill}>Add</button>
                            </div>
                            <div id="skills-list" className="skills-list">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Interests</label>
                        <div className="interests-grid">
                            {['Technology', 'Business', 'Design', 'Healthcare', 'Education', 'Arts'].map((interest) => (
                                <div className="checkbox-item" key={interest}>
                                    <input
                                        type="checkbox"
                                        id={interest.toLowerCase()}
                                        value={interest.toLowerCase()}
                                        onChange={handleInterestChange}
                                        checked={interests.includes(interest.toLowerCase())}
                                    />
                                    <label htmlFor={interest.toLowerCase()}>{interest}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="btn btn--primary btn--full-width" onClick={handleSave}>Save Profile & Start Assessment</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetup;
