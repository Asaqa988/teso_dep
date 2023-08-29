import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const coursesData = [
    {
      id: 1,
      title: 'Introduction to Mobile Development',
      instructor: 'John Doe',
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Jane Smith',
      duration: '1 week',
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'Web Design Fundamentals',
      instructor: 'Michael Johnson',
      duration: '6 weeks',
      level: 'Beginner',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Emily Williams',
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      id: 5,
      title: 'Introduction to Machine Learning',
      instructor: 'David Brown',
      duration: '12 weeks',
      level: 'Advanced',
    },
    {
      id: 6,
      title: 'Front-End Development Bootcamp',
      instructor: 'Anna Martinez',
      duration: '16 weeks',
      level: 'Intermediate',
    },
    {
      id: 7,
      title: 'Data Visualization with D3.js',
      instructor: 'William Lee',
      duration: '8 weeks',
      level: 'Intermediate',
    },
    {
      id: 8,
      title: 'Java Programming Fundamentals',
      instructor: 'Alex Johnson',
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      id: 9,
      title: 'UI/UX Design Principles',
      instructor: 'Sophia Wilson',
      duration: '6 weeks',
      level: 'Intermediate',
    },
    {
      id: 10,
      title: 'Full-Stack Web Development',
      instructor: 'Daniel Brown',
      duration: '20 weeks',
      level: 'Advanced',
    },
    // Add more course data here
  ];


  function Courses() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCourses = coursesData.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container mt-5">
        <h1 className="mb-4">Browse Courses</h1>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">Instructor: {course.instructor}</p>
                  <p className="card-text">Duration: {course.duration}</p>
                  <p className="card-text">Level: {course.level}</p>
                  <a href={`/course/${course.id}`} className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Courses;
