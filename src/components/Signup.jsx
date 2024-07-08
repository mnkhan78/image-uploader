import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import './style.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !name || !password) {
      setErrmsg("fill all fields");
      return;
    }
    setErrmsg("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/home");
      })
      .catch((error) => setErrmsg(error.message));
  };

  return (
    <div className="container">
    <h1>Signup</h1>
      <input
        type="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <b>{errmsg}</b>
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account?{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
