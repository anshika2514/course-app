// services/courseService.js

export const fetchCourses = async () => {
  try {
    // Fetch data from the API (replace with your actual API URL)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    // Convert the response to JSON
    const data = await response.json();

    // Log the fetched data for debugging
    console.log('Fetched data:', data);

    // Transform the data to match the expected course structure
    const courses = data.map(item => ({
      id: item.id,
      name: item.title,         // Map the title to course name
      instructor: 'Anshika Tiwari',   // Placeholder instructor (replace as needed)
      dueDate: '2024-12-31',    // Placeholder due date (replace as needed)
      progress: Math.floor(Math.random() * 100), // Placeholder progress (random value for demo)
    }));

    // Return the transformed course data
    return courses;

  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
