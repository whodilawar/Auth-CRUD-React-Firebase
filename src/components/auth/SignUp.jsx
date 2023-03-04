import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="login-box">
      <div className="left">
        <h1>Sign up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password2"
          placeholder="Retype password"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="submit"
          name="signup_submit"
          defaultValue="Sign me up"
          onClick={signUp}
        />
      </div>
      <div className="right" style={{"opacity":0.5}}>
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>
        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </div>
   
  );
};

export default SignUp;
