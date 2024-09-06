import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse } from '../redux/actions';



const CourseDetails = () => {
  const { courseId } = useParams();  // Get courseId from the URL
  const dispatch = useDispatch();  // Get the dispatch function
  const courses = useSelector((state) => state.courses.courses);  // Get courses from Redux state
  const course = courses.find(c => c.id === parseInt(courseId));  // Find the course by ID

  if (!courses.length) {
    return <div>Loading courses...</div>;  // Handle the case when courses are still loading
  }

  if (!course) {
    return <div>Course not found</div>;  // Handle invalid courseId
  }

  // Function to handle course enrollment
  const handleEnroll = () => {
    dispatch(enrollCourse(course));  // Dispatch enrollCourse action
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div>
        <h3>Syllabus</h3>
        <ul>
          {course.syllabus.map(week => (
            <li key={week.week}>
              <h4>Week {week.week}: {week.topic}</h4>
              <p>{week.content}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Add a button to enroll in the course */}
      <button onClick={handleEnroll}>Enroll in this course</button>
    </div>
  );
};

export default CourseDetails;
