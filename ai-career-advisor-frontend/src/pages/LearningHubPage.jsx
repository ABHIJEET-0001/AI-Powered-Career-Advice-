import { appData } from '../data';

function LearningHubPage({ currentUser, updateUser }) {
  const enrollInCourse = (courseId) => {
    if (!currentUser) {
      alert('Please log in to enroll in courses.');
      return;
    }

    if (!currentUser.enrolledCourses) {
      currentUser.enrolledCourses = [];
    }

    if (currentUser.enrolledCourses.includes(courseId)) return;

    const newEnrolledCourses = [...currentUser.enrolledCourses, courseId];
    updateUser({ enrolledCourses: newEnrolledCourses });
  };

  return (
    <div id="learning-page" className="page active">
      <div className="container">
        <div className="page-header">
          <h2>Learning Hub</h2>
          <p>Explore courses and resources to develop your skills</p>
        </div>

        <div className="courses-grid">
          {appData.courses.map(course => {
            const isEnrolled = currentUser?.enrolledCourses?.includes(course.id);
            return (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-card-features">
                  {course.features.map((feature, index) => (
                    <span key={index}>
                      <i className="fas fa-check-circle" style={{color: 'var(--accent)'}}></i> {feature}
                    </span>
                  )).reduce((prev, curr) => [prev, ' • ', curr])}
                </div>
                <div className="course-card-info">
                  <div>
                    <span>{course.duration} • {course.level}</span><br />
                    <span className="course-card-rating">Rating: {course.rating} ★</span>
                  </div>
                  <button
                    className={`btn btn--primary btn--sm ${isEnrolled ? 'enrolled' : ''}`}
                    onClick={() => enrollInCourse(course.id)}
                    disabled={isEnrolled}
                  >
                    {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LearningHubPage;