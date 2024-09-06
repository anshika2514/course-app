import { fetchCourses } from './services/courseService';  // Keep this for API fetching
import { setCourses } from './redux/actions';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks

const CourseListingPage = () => {
  const dispatch = useDispatch();  // To dispatch actions
  const courses = useSelector((state) => state.courses.courses);  // Fetch courses from Redux state
  const [loading, setLoading] = useState(true);  // Local loading state
  const [error, setError] = useState(null);  // Local error state

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();  // Fetch courses from API
        dispatch(setCourses(data));  // Set the courses in Redux state
        setLoading(false);  // Stop loading once data is fetched
      } catch (error) {
        setError(error.message);  // Handle any error
        setLoading(false);  // Stop loading in case of error
      }
    };

    loadCourses();  // Call the function to load courses
  }, [dispatch]);  // Dependency on dispatch

  if (loading) {
    return <div>Loading...</div>;  // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if there's an error
  }

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map((course, index) => (  // Display the courses from Redux state
          <li key={index}>{course.name}</li>  // Render each course's name
        ))}
      </ul>
    </div>
  );
};

export default CourseListingPage;
