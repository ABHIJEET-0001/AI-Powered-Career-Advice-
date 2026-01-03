import { useState } from 'react';

function ProfileSetupPage({ currentUser, updateUser, showPage }) {
  const [educationLevel, setEducationLevel] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [interests, setInterests] = useState([]);

  const addSkill = () => {
    const skill = skillInput.trim();
    if (!skill) return;
    setSkills([...skills, skill]);
    setSkillInput('');
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter(i => i !== value));
    }
  };

  const saveProfile = () => {
    if (!educationLevel || skills.length === 0 || interests.length === 0) {
      alert('Please complete all profile fields');
      return;
    }

    updateUser({
      profile: {
        educationLevel,
        skills,
        interests,
      }
    });
    
    showPage('assessment');
  };

  return (
    <div id="profile-setup-page" className="page active">
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
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <button className="btn btn--primary" onClick={addSkill}>Add</button>
              </div>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Interests</label>
            <div className="interests-grid">
              <div className="checkbox-item">
                <input type="checkbox" id="tech" value="technology" onChange={handleInterestChange} />
                <label htmlFor="tech">Technology</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="business" value="business" onChange={handleInterestChange} />
                <label htmlFor="business">Business</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="design" value="design" onChange={handleInterestChange} />
                <label htmlFor="design">Design</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="healthcare" value="healthcare" onChange={handleInterestChange} />
                <label htmlFor="healthcare">Healthcare</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="education" value="education" onChange={handleInterestChange} />
                <label htmlFor="education">Education</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="arts" value="arts" onChange={handleInterestChange} />
                <label htmlFor="arts">Arts</label>
              </div>
            </div>
          </div>

          <button className="btn btn--primary btn--full-width" onClick={saveProfile}>
            Save Profile & Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetupPage;