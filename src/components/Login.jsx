import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setErrmsg("fill all fields");
      return;
    }
    setErrmsg("");
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/home");
      })
      .catch((error) => setErrmsg(error.message));
  };

  return (
    <div className="container">
      <h1>Login</h1>
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
      <button onClick={handleSignup}>Login</button>
      <p>
        Don't have an account?{" "}
        <span>
          <Link to="/signup">Signup</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
