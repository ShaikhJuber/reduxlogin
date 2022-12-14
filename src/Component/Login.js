import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./style.css";

///////// Create state to handle the function

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="form-container">
      <h1 className="heading">
        <span>ΣM</span> Login
      </h1>

      <div className="login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-feild">
            <input
              type="name"
              placeholder="Enter a Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-feild">
            <input
              type="email"
              placeholder="Enter a Email first"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-feild">
            <input
              type="password"
              placeholder="Enter a Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-feild">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
