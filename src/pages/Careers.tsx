import React, { useState } from 'react';
import { careers } from '../data/data';
import { Search } from 'lucide-react';

const Careers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [salaryFilter, setSalaryFilter] = useState('');
    const [growthFilter, setGrowthFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');
    const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

    const filteredCareers = careers.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            career.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSalary = salaryFilter ? career.salary_category === salaryFilter : true;
        const matchesGrowth = growthFilter ? career.growth === growthFilter : true;
        const matchesSkill = skillFilter ? career.skill_level === skillFilter : true;
        return matchesSearch && matchesSalary && matchesGrowth && matchesSkill;
    });

    const handleCareerClick = (id: number) => {
        // Ideally open modal, for now maybe just alert or navigate
        // Or implemented simplified modal here? 
        // Let's toggle details in place or simple alert as MVP
        // The original app used a global modal. State based modal is better
        setSelectedCareer(id);
    };

    const careerDetails = selectedCareer ? careers.find(c => c.id === selectedCareer) : null;

    return (
        <div id="careers-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="page-header">
                    <h2>Explore Career Paths</h2>
                    <p>Discover various career options and find the perfect match for your skills and interests</p>
                </div>

                <div className="search-bar">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search careers..."
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filters">
                    <div className="filter-group">
                        <span className="filter-label">Filter by:</span>
                        <select className="form-control" onChange={(e) => setSalaryFilter(e.target.value)} value={salaryFilter}>
                            <option value="">Salary Range</option>
                            <option value="high">High Salary</option>
                            <option value="medium">Medium Salary</option>
                            <option value="low">Entry Level</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <select className="form-control" onChange={(e) => setGrowthFilter(e.target.value)} value={growthFilter}>
                            <option value="">Growth Potential</option>
                            <option value="high">High Growth</option>
                            <option value="medium">Medium Growth</option>
                            <option value="low">Stable</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <select className="form-control" onChange={(e) => setSkillFilter(e.target.value)} value={skillFilter}>
                            <option value="">Skill Level</option>
                            <option value="beginner">Beginner Friendly</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                <div className="careers-grid">
                    {filteredCareers.map(career => (
                        <div key={career.id} className="career-card">
                            <div>
                                <h3>{career.title}</h3>
                                <div className="skills-list">
                                    {career.required_skills.slice(0, 3).map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <p style={{ flexGrow: 1 }}>{career.description}</p>
                            <div className="career-card-info">
                                <span className="salary-range">{career.salary_range}</span>
                                <button className="btn btn--primary btn--sm" onClick={() => handleCareerClick(career.id)}>Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCareer && careerDetails && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>{careerDetails.title}</h3>
                            <button className="modal-close" onClick={() => setSelectedCareer(null)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="career-details">
                                <div className="career-detail-section"><h4>Overview</h4><p>{careerDetails.description}</p></div>
                                <div className="career-detail-section"><h4>Required Skills</h4><div className="skills-list">{careerDetails.required_skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}</div></div>
                                <div className="career-detail-section"><h4>Salary Range</h4><p className="salary-range">{careerDetails.salary_range}</p></div>
                                <div className="career-detail-section"><h4>Future Outlook</h4><p>{careerDetails.growth_outlook}</p></div>
                                <div className="career-detail-section"><h4>Learning Path</h4>
                                    <div className="learning-path">
                                        {careerDetails.learning_path.map((step, index) => (
                                            <div key={index} className="learning-step"><div className="step-number-small">{index + 1}</div><span>{step}</span></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
