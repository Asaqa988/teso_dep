import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCUoFJpH2CNKVliTxFkLshyKwnIRCAbqvs",
  authDomain: "two-two-6f06c.firebaseapp.com",
  projectId: "two-two-6f06c",
  storageBucket: "two-two-6f06c.appspot.com",
  messagingSenderId: "1061023401792",
  appId: "1:1061023401792:web:f8b8d0858ccaca0f899ca5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function SignUp() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [fullname, SetFullName] = useState("");

  const navigate = useNavigate();

  const handelSignUp = async (e) => {
    e.preventDefault();

    try {
    const userCred = await  createUserWithEmailAndPassword(auth, email, password);

      alert(`user has been registered ${userCred.user.email} `);

      console.log(userCred.user.email)
      navigate("/Courses");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handelSignUp}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={fullname}
            onChange={(e) => SetFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
