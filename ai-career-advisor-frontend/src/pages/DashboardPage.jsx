import { useState, useEffect } from 'react';
import { appData, dummyJobs } from '../data';

function DashboardPage({ currentUser, showPage, updateUser }) {
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobSearchQuery, setJobSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs);
  const [skillGapChart, setSkillGapChart] = useState(null);

  useEffect(() => {
    // Initialize Chart.js when component mounts
    if (typeof Chart !== 'undefined') {
      const ctx = document.getElementById('skillGapChart');
      if (ctx && !skillGapChart) {
        const chart = new Chart(ctx, {
          type: 'radar',
          data: {
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
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
              },
            },
          },
        });
        setSkillGapChart(chart);
      }
    }

    return () => {
      // Cleanup chart on unmount
      if (skillGapChart) {
        skillGapChart.destroy();
      }
    };
  }, []);

  const calculateCareerMatches = () => {
    if (!currentUser || !currentUser.profile) return appData.careers.slice(0, 3);
    return appData.careers.sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  const getProfileCompletion = () => {
    if (currentUser && currentUser.assessment) return '100%';
    if (currentUser && currentUser.profile) return '75%';
    return '25%';
  };

  const searchJobs = (query) => {
    setJobSearchQuery(query);
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) {
      setFilteredJobs(dummyJobs);
      return;
    }
    const filtered = dummyJobs.filter(job =>
      job.keywords.some(kw => kw.includes(lowerQuery)) ||
      job.title.toLowerCase().includes(lowerQuery)
    );
    setFilteredJobs(filtered);
  };

  const enrolledCourses = appData.courses.filter(course =>
    currentUser?.enrolledCourses?.includes(course.id)
  );

  const unEnrollCourse = (courseId) => {
    const newEnrolledCourses = currentUser.enrolledCourses.filter(id => id !== courseId);
    updateUser({ enrolledCourses: newEnrolledCourses });
  };

  return (
    <div id="dashboard-page" className="page active">
      <div className="container">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Welcome back, {currentUser?.name || 'User'}!</h1>
            <p>Here's your personalized career guidance</p>
          </div>

          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>{getProfileCompletion()}</h3>
              <p>Profile Completion</p>
            </div>
            <div className="stat-card">
              <h3>{calculateCareerMatches().length}</h3>
              <p>Career Matches</p>
            </div>
            <div className="stat-card">
              <h3>{currentUser?.profile?.skills?.length ? currentUser.profile.skills.length + 5 : 'N/A'}</h3>
              <p>Skills to Develop</p>
            </div>
            <div className="stat-card">
              <h3>{currentUser?.enrolledCourses?.length || 0}</h3>
              <p>Courses Enrolled</p>
            </div>
          </div>

          <div className="dashboard-actions">
            <div className="action-card" onClick={() => showPage('assessment')}>
              <div className="action-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="action-content">
                <h4>Career Assessment</h4>
                <p>Get personalized recommendations</p>
              </div>
            </div>
            <div className="action-card" onClick={() => showPage('learning')}>
              <div className="action-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="action-content">
                <h4>Learning Hub</h4>
                <p>Explore courses and grow your skills</p>
              </div>
            </div>
            <div className="action-card" onClick={() => showPage('resume')}>
              <div className="action-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="action-content">
                <h4>Resume Builder</h4>
                <p>Create a professional resume with AI</p>
              </div>
            </div>
            <div className="action-card" onClick={() => showPage('community')}>
              <div className="action-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="action-content">
                <h4>Community</h4>
                <p>Connect with mentors and peers</p>
              </div>
            </div>
            <div className="action-card" onClick={() => setShowJobModal(true)}>
              <div className="action-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="action-content">
                <h4>Job Search Simulator</h4>
                <p>Practice finding jobs that match your skills</p>
              </div>
            </div>
            <div className="action-card" onClick={() => showPage('community')}>
              <div className="action-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="action-content">
                <h4>Mentor Connect</h4>
                <p>Find and connect with industry mentors</p>
              </div>
            </div>
          </div>

          <div className="dashboard-main-content">
            <div className="dashboard-card">
              <h3>Career Recommendations</h3>
              <div>
                {calculateCareerMatches().map(career => (
                  <div key={career.id} className="topic-item" style={{cursor: 'pointer'}}>
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
              <div className="skill-gap-chart">
                <canvas id="skillGapChart"></canvas>
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
              <div>
                {enrolledCourses.length === 0 ? (
                  <p>You have not enrolled in any courses yet.</p>
                ) : (
                  enrolledCourses.map(course => (
                    <div key={course.id} className="topic-item">
                      <div>
                        <h4>{course.title}</h4>
                        <span>{course.provider}</span>
                      </div>
                      <button className="btn btn-danger btn--sm" onClick={() => unEnrollCourse(course.id)}>
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

      {/* Job Search Modal */}
      <div className={`modal ${showJobModal ? '' : 'hidden'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Job Search Simulator</h3>
            <button className="modal-close" onClick={() => setShowJobModal(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="search-bar" style={{marginBottom: '24px'}}>
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search for jobs (e.g., 'Data Scientist')"
                className="form-control"
                value={jobSearchQuery}
                onChange={(e) => searchJobs(e.target.value)}
              />
            </div>
            <div>
              {filteredJobs.length === 0 ? (
                <p>No jobs found matching your search.</p>
              ) : (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="topic-item"
                    style={{cursor: 'pointer'}}
                    onClick={() => alert(`Applied to ${job.title} at ${job.company}!`)}
                  >
                    <div>
                      <h4>{job.title}</h4>
                      <span>{job.company} • {job.location}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;