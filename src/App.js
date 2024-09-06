import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListingPage from './CourseListingPage';  
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';


function App() {
  const courses = [
    {
      id: 1,
    name: "React Basics",
    instructor: "Anshika Tiwari",
    description: "Learn the fundamentals of React, including components, state, and props.",
    enrollmentStatus: "Open",
    duration: "6 weeks",
    schedule: "Mon, Wed, Fri",
    location: "Online",
    prerequisites: ["JavaScript Basics", "HTML & CSS"],
    syllabus: [
      { week: 1, topic: "Introduction to React", content: "Understanding React components and JSX." },
      { week: 2, topic: "State and Props", content: "Managing state and passing props." },
      { week: 3, topic: "React Hooks", content: "Introduction to useState and useEffect hooks." },
      // More weeks...
    ]
  },
  {
    id: 2,
    name: "Advanced React",
    instructor: "Anshika Tiwari",
    description: "Dive deeper into React with advanced concepts like context, performance optimization, and testing.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Tue, Thu",
    location: "In-Person, Room 101",
    prerequisites: ["React Basics"],
    syllabus: [
      { week: 1, topic: "Context API", content: "Sharing state across components using the Context API." },
      { week: 2, topic: "Performance Optimization", content: "Optimizing React apps for better performance." },
      { week: 3, topic: "Testing React Components", content: "Using tools like Jest and React Testing Library." },
      // More weeks...
    ]
    }

  ];
  const enrolledCourses = [
    {
      id: 1,
      name: "React Basics",
      instructor: "Anshika Tiwari",
      dueDate: "2024-10-01",
      progress: 70,  // Progress for each enrolled course
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      instructor: "Anshika Tiwari",
      dueDate: "2024-11-15",
      progress: 45,
    }
  ];

return (
<Router>
      <div className="App">
        <Routes>
          {/* Main course listing page with dashboard */}
          <Route 
            path="/" 
            element={
              <div>
                <h1>Course App</h1>
                {/* Add StudentDashboard component to the main page */}
                <StudentDashboard enrolledCourses={enrolledCourses} />
                {/* Course listing below */}
                <CourseListingPage courses={courses} />
              </div>
            }
          />

          {/* Route for course details page */}
          <Route path="/courses/:courseId" element={<CourseDetails courses={courses} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
