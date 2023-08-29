import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'





function Home() {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1>Welcome to Online Courses Platform</h1>
                <p>Learn, Grow, Succeed</p>
                <a href="/courses" className="btn btn-primary btn-lg">
                    Browse Courses
                </a>
            </div>

            <section className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Explore Our Courses</h2>
                        <p>
                            Choose from a wide range of courses in various subjects. Whether
                            you're a beginner or looking to advance your skills, we have
                            something for you.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/10/15/18/54/pens-1743305_1280.jpg"
                            alt="Courses"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-light my-5 p-5">
                <h2>Why Choose Us?</h2>
                <div className="row">
                {/* <FontAwesomeIcon icon={faCoffee} /> Coffee icon */}

                    <div className="col-md-4">
                        <h4>Expert Instructors</h4>
                        <p>
                            Learn from industry experts who are passionate about teaching and
                            sharing their knowledge.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Flexible Learning</h4>
                        <p>
                            Study at your own pace and on your schedule. Access courses from
                            anywhere and on any device.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Interactive Content</h4>
                        <p>
                            Engaging video lectures, quizzes, assignments, and hands-on
                            projects to enhance your learning experience.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <h2>Featured Courses</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png"
                                alt="Course"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Course Title</h5>
                                <p className="card-text">
                                help students to the fundamentals of JavaScript programming and its application in web development. JavaScript is a versatile programming language that plays a pivotal role in creating interactive and dynamic web pages. Throughout the course, students will learn the core concepts of JavaScript, its integration with HTML and CSS, and how to build interactive web applications..
                                </p>
                                <a href="/course-details" className="btn btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="https://sites.lsa.umich.edu/qmss/wp-content/uploads/sites/793/2022/02/Screen-Shot-2022-04-18-at-3.06.16-PM.jpg"
                                alt="Course"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Course Title</h5>
                                <p className="card-text">
                                    A brief description of the course. This introductory course is designed to provide students with a comprehensive introduction to the Python programming language. Python is known for its simplicity and versatility, making it an excellent choice for beginners in programming. Throughout the course, students will learn the basics of Python syntax, data types, control structures, and simple programming concepts..
                                </p>
                                <a href="/course-details" className="btn btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src="https://img.freepik.com/premium-photo/cyber-security-concept-lock-symbol-protection-private-information-data-firewall-from-hacker-attack-generative-ai_1423-8835.jpg"
                                alt="Course"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Course Title</h5>
                                <p className="card-text">
                                This introductory course provides an overview of the fundamental concepts and principles of cybersecurity. It covers a wide range of topics related to securing computer systems, networks, and data from potential threats and attacks. Students will learn about the importance of cybersecurity in today's digital world and gain insights into the various types of cyber threats and vulnerabilities.
                                </p>
                                <a href="/course-details" className="btn btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
