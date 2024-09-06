// redux/actions.js

// Action to set the list of courses
export const setCourses = (courses) => {
    return {
      type: 'SET_COURSES',
      payload: courses   // Courses array to set in state
    };
  };
  
  // Action to enroll in a course
  export const enrollCourse = (course) => {
    return {
      type: 'ENROLL_COURSE',
      payload: course    // Single course to add to enrolledCourses
    };
  };

  // Action to add a new course
export const addCourse = (course) => {
    return {
      type: 'ADD_COURSE',
      payload: course    // Single new course to add to the list of courses
    };
  };
  
  // Action to remove a course by its ID
  export const removeCourse = (courseId) => {
    return {
      type: 'REMOVE_COURSE',
      payload: courseId  // Course ID to remove from the list of courses
    };
  };
  