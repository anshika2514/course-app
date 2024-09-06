import React from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  console.log(enrolledCourses);
  return (
    <div>
      <h1>My Courses</h1>
      <div className="dashboard-courses">
        {enrolledCourses && enrolledCourses.length > 0 ? (
          enrolledCourses.map(course => (
            <div key={course.id} className="dashboard-course">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <label htmlFor={`progress-${course.id}`}>Progress: </label>
              <progress id={`progress-${course.id}`} value={course.progress} max="100">
                {course.progress}%
              </progress>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
