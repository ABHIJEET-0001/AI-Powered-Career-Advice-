function CommunityPage() {
  return (
    <div id="community-page" className="page active">
      <div className="container">
        <div className="page-header">
          <h2>Career Community</h2>
          <p>Connect with mentors and peers in your field</p>
        </div>

        <div className="community-grid">
          <div className="community-card">
            <div className="community-card-header">
              <div className="community-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div>
                <h3>Discussion Forums</h3>
                <p>Join conversations about career paths</p>
              </div>
            </div>
            <div className="topic-list">
              <div className="topic-item">
                <div>
                  <h4>Transitioning to Data Science</h4>
                  <span>128 comments • 2 days ago</span>
                </div>
              </div>
              <div className="topic-item">
                <div>
                  <h4>UX Design Portfolio Tips</h4>
                  <span>64 comments • 5 days ago</span>
                </div>
              </div>
              <div className="topic-item">
                <div>
                  <h4>Cloud Certifications Worth It?</h4>
                  <span>42 comments • 1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-card">
            <div className="community-card-header">
              <div className="community-card-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div>
                <h3>Career Mentors</h3>
                <p>Connect with experienced professionals</p>
              </div>
            </div>
            <div className="mentor-list">
              <div className="mentor-item">
                <div className="mentor-avatar">AS</div>
                <div>
                  <h4>Anjali Sharma</h4>
                  <span>Data Scientist • 8 years experience</span>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-avatar">RK</div>
                <div>
                  <h4>Rahul Kapoor</h4>
                  <span>UX Lead • 10 years experience</span>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-avatar">PS</div>
                <div>
                  <h4>Priya Singh</h4>
                  <span>Software Engineer • 6 years experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-card">
            <div className="community-card-header">
              <div className="community-card-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div>
                <h3>Upcoming Events</h3>
                <p>Webinars and workshops to boost your career</p>
              </div>
            </div>
            <div className="topic-list">
              <div className="topic-item">
                <div>
                  <h4>AI Career Fair</h4>
                  <span>June 15, 2023 • Virtual</span>
                </div>
              </div>
              <div className="topic-item">
                <div>
                  <h4>Resume Review Workshop</h4>
                  <span>June 22, 2023 • 2:00 PM IST</span>
                </div>
              </div>
              <div className="topic-item">
                <div>
                  <h4>Tech Interview Preparation</h4>
                  <span>July 5, 2023 • 4:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;