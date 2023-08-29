import React from 'react';

import '../component/aboutus.css'

function AboutUs() {
  return <div>


    <div class="about-section">
      <h1>About Us Page</h1>
      <p>This comprehensive course is designed to introduce students to the fundamentals of JavaScript programming and its application in web development. JavaScript is a versatile programming language that plays a pivotal role in creating interactive and dynamic web pages. Throughout the course, students will learn the core concepts of JavaScript, its integration with HTML and CSS, and how to build interactive web applications.</p>
    </div>

    <h2 >Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-high-school-logo-design_23-2149667303.jpg" alt="Jane" />
          <div class="container">
            <h2>Jane Doe</h2>
            <p class="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>jane@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cdn.vectorstock.com/i/preview-1x/76/90/stem-teacher-pixel-perfect-linear-icon-vector-46467690.webp" alt="Mike" />
          <div class="container">
            <h2>Mike Ross</h2>
            <p class="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cdn.vectorstock.com/i/preview-1x/53/57/international-teacher-rgb-color-icon-vector-46795357.webp" alt="John" />
          <div class="container">
            <h2>John Doe</h2>
            <p class="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>john@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>



  </div>;
}

export default AboutUs;
