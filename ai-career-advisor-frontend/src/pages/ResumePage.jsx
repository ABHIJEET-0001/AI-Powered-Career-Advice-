import { useState } from 'react';

function ResumePage() {
  const [resumeData, setResumeData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91-9876543210',
    summary: 'Results-driven professional with experience in data analysis and machine learning, seeking to leverage analytical skills to drive business solutions.',
  });
  const [experiences, setExperiences] = useState([
    {
      title: 'Data Analyst Intern',
      company: 'Tech Solutions Inc.',
      description: 'Analyzed sales data to identify trends, creating dashboards that improved decision-making.',
    },
  ]);
  const [educations, setEducations] = useState([
    {
      degree: 'B.Tech in Computer Science',
      school: 'University of Technology',
      years: '2019 - 2023',
    },
  ]);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const addExperience = () => {
    setExperiences([...experiences, { title: '', company: '', description: '' }]);
  };

  const updateExperience = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const addEducation = () => {
    setEducations([...educations, { degree: '', school: '', years: '' }]);
  };

  const updateEducation = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  const addSkill = () => {
    const skill = skillInput.trim();
    if (!skill) return;
    setSkills([...skills, skill]);
    setSkillInput('');
  };

  const generateResume = () => {
    setShowPreview(true);
  };

  const downloadResume = () => {
    alert('Resume download functionality would require jsPDF library. For demo, showing alert.');
  };

  return (
    <div id="resume-page" className="page active">
      <div className="container">
        <div className="page-header">
          <h2>Resume Builder</h2>
          <p>Create a professional resume with AI-powered suggestions</p>
        </div>

        <div className="profile-setup">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
              value={resumeData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Info</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={resumeData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <input
              type="tel"
              className="form-control mt-4"
              placeholder="Phone"
              value={resumeData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Professional Summary</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Brief professional summary"
              value={resumeData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Work Experience</label>
            {experiences.map((exp, index) => (
              <div key={index} className="form-group experience-item">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                />
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Responsibilities..."
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                />
              </div>
            ))}
            <button className="btn btn--outline btn--sm mt-4" onClick={addExperience}>
              + Add Experience
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Education</label>
            {educations.map((edu, index) => (
              <div key={index} className="form-group education-item">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Institution"
                  value={edu.school}
                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Years Attended"
                  value={edu.years}
                  onChange={(e) => updateEducation(index, 'years', e.target.value)}
                />
              </div>
            ))}
            <button className="btn btn--outline btn--sm mt-4" onClick={addEducation}>
              + Add Education
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Skills</label>
            <div className="skills-input">
              <div className="skill-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a skill (e.g., Python)"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <button className="btn btn--primary btn--sm" onClick={addSkill}>
                  Add
                </button>
              </div>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn--primary btn--lg" onClick={generateResume}>
              Preview Resume
            </button>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <div className={`modal ${showPreview ? '' : 'hidden'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Resume Preview</h3>
            <button className="modal-close" onClick={() => setShowPreview(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <div id="resume-preview-content">
              <h2 style={{textAlign: 'center'}}>{resumeData.name}</h2>
              <p style={{textAlign: 'center', marginBottom: '20px'}}>
                {resumeData.email} | {resumeData.phone}
              </p>

              <h3>Professional Summary</h3>
              <p>{resumeData.summary}</p>

              <h3>Work Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h4>{exp.title}</h4>
                  <p style={{fontStyle: 'italic'}}>{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              ))}

              <h3>Education</h3>
              {educations.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.school} ({edu.years})</p>
                </div>
              ))}

              <h3>Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn--primary btn--lg" onClick={downloadResume}>
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;