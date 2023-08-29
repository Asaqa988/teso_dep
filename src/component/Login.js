import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

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

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      alert(` you are welcome  ${userCred.user.email}`);
      navigate("/Courses");
    } catch (error) {
      alert(`sorry something went wrong ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
