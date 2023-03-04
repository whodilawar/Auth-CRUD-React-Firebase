import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error,setError] = useState(null)
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hundleNavigate = () => {
    navigate("/Signup");
  };

  return (
    <>
      {" "}
      <div id="login-box">
        <div className="left">
          <h1>Login </h1>
          {/* <h5  style={{"color":"red"}}>{error}</h5> */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            name="signup_submit"
            defaultValue="Login"
            onClick={signIn}
          />
        </div>
        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>
          <button className="social-signin facebook" onClick={hundleNavigate}>
            Register
          </button>
          {/* <button className="social-signin twitter">Log in with Twitter</button>
      <button className="social-signin google">Log in with Google+</button> */}
        </div>
        <div className="or">OR</div>
      </div>
    </>
  );
};

export default SignIn;
