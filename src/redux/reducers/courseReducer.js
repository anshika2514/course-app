// redux/reducers/courseReducer.js

const initialState = {
    courses: [],           // Stores the list of available courses
    enrolledCourses: []     // Stores the list of enrolled courses
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COURSE':
        return {
          ...state,
          courses: [...state.courses, action.payload]  // Adds a new course to the list
        };
  
      case 'REMOVE_COURSE':
        return {
          ...state,
          courses: state.courses.filter(course => course.id !== action.payload)  // Removes a course by its ID
        };
  
      case 'SET_COURSES':
        return {
          ...state,
          courses: action.payload  // Sets or replaces the entire course list
        };
  
      case 'ENROLL_COURSE':
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload]  // Adds a course to enrolled courses
        };
  
      default:
        return state;
    }
  };
  
  export default courseReducer;
  