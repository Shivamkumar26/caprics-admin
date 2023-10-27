import React, { useState } from "react";
import "./Login.css";
import Logo from "./images/logo.png";
import RightImg from "./images/loginpage-img.png";
import ReCAPTCHA from "react-google-recaptcha";
import Maillogo from "./images/mail-logo.png";
import Passswordlogo from "./images/password-key.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    setUsername("");
    setPassword("");
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const blackIconStyle = {
    color: "black",
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="Logo" className="logo-image" />
        <div className="form">

        <h2 className="login-header">Login to your account</h2>
        <div className="form-pswd">
          <img src={Maillogo} alt="m" className="mail-logo"/>
          
          <input
            id="username"
            type="text"
            placeholder="Enter Email Address"
            className="input-field"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="form-pswd">
        <img src={Passswordlogo} alt="m" className="mail-logo"/>
          <input
            className="input-field-2"
            type={type}
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <Icon
              className=" eye absolute mr-10"
              icon={icon}
              size={20}
              style={blackIconStyle}
            />
          </span>
        </div>
        <Link to="/reset-password" className="forgot-password-link">
            Forgot Password ?
        </Link>
        <div className="captcha-checkbox">
          <ReCAPTCHA
            sitekey="6LcyM88oAAAAAPVa9jjK4zntyNdVoLiq4SDlNiMk"
            onChange={onChange}
          />
        </div>
        <div className="btn">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
        </div>
      </div>
      <div className="image-container">
        <img src={RightImg} alt="Right Image" className="right-image" />
      </div>
    </div>
  );
}

export default LoginPage;
