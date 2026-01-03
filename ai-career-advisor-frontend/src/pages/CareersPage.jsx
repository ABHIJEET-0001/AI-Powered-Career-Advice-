import { useState } from 'react';
import { appData } from '../data';

function CareersPage() {
  const [displayedCareers, setDisplayedCareers] = useState(appData.careers);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchCareers = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setDisplayedCareers(appData.careers);
      return;
    }
    
    const filtered = appData.careers.filter(c =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedCareers(filtered);
  };

  const filterCareers = (type, value) => {
    if (!value) {
      setDisplayedCareers(appData.careers);
      return;
    }
    
    const filtered = appData.careers.filter(c => {
      if (type === 'salary') return c.salary_category === value;
      if (type === 'growth') return c.growth === value;
      if (type === 'skills') return c.skill_level === value;
      return true;
    });
    setDisplayedCareers(filtered);
  };

  const showCareerDetails = (career) => {
    setSelectedCareer(career);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCareer(null);
  };

  return (
    <div id="careers-page" className="page active">
      <div className="container">
        <div className="page-header">
          <h2>Explore Career Paths</h2>
          <p>Discover various career options and find the perfect match for your skills and interests</p>
        </div>

        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search careers..."
            className="form-control"
            value={searchQuery}
            onChange={(e) => searchCareers(e.target.value)}
          />
        </div>

        <div className="filters">
          <div className="filter-group">
            <span className="filter-label">Filter by:</span>
            <select className="form-control" onChange={(e) => filterCareers('salary', e.target.value)}>
              <option value="">Salary Range</option>
              <option value="high">High Salary</option>
              <option value="medium">Medium Salary</option>
              <option value="low">Entry Level</option>
            </select>
          </div>
          <div className="filter-group">
            <select className="form-control" onChange={(e) => filterCareers('growth', e.target.value)}>
              <option value="">Growth Potential</option>
              <option value="high">High Growth</option>
              <option value="medium">Medium Growth</option>
              <option value="low">Stable</option>
            </select>
          </div>
          <div className="filter-group">
            <select className="form-control" onChange={(e) => filterCareers('skills', e.target.value)}>
              <option value="">Skill Level</option>
              <option value="beginner">Beginner Friendly</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="careers-grid">
          {displayedCareers.map(career => (
            <div key={career.id} className="career-card">
              <div>
                <h3>{career.title}</h3>
                <div className="skills-list">
                  {career.required_skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <p style={{flexGrow: 1}}>{career.description}</p>
              <div className="career-card-info">
                <span className="salary-range">{career.salary_range}</span>
                <button className="btn btn--primary btn--sm" onClick={() => showCareerDetails(career)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Details Modal */}
      <div className={`modal ${showModal ? '' : 'hidden'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>{selectedCareer?.title}</h3>
            <button className="modal-close" onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-body">
            {selectedCareer && (
              <div className="career-details">
                <div className="career-detail-section">
                  <h4>Overview</h4>
                  <p>{selectedCareer.description}</p>
                </div>
                <div className="career-detail-section">
                  <h4>Required Skills</h4>
                  <div className="skills-list">
                    {selectedCareer.required_skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="career-detail-section">
                  <h4>Salary Range</h4>
                  <p className="salary-range">{selectedCareer.salary_range}</p>
                </div>
                <div className="career-detail-section">
                  <h4>Future Outlook</h4>
                  <p>{selectedCareer.growth_outlook}</p>
                </div>
                <div className="career-detail-section">
                  <h4>Learning Path</h4>
                  <div className="learning-path">
                    {selectedCareer.learning_path.map((step, index) => (
                      <div key={index} className="learning-step">
                        <div className="step-number-small">{index + 1}</div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;