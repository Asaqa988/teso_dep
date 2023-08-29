import React, { useState } from 'react';
import '../src/css/bondi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Courses from './component/Courses';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import LatestNews from './component/LatestNews';
import Home from './component/Home';
import SignUp from './component/Signup';
import LoginPage from './component/Login';




function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Tech online courses</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Courses">Courses</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Know More
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/contact-us">Contact Us</Link></li>
                    <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                    <li><Link className="dropdown-item" to="/latest-news">Latest News</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SignIn">SignIn</Link>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/Courses" element={<Courses />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />

          <Route path="/SignIn" element={<LoginPage />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/latest-news" element={<LatestNews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );



}

export default App;
