import React, { useState } from "react";
import "./Login.css"; 
import Logo from "./images/logo.png";
import RightImg from "./images/loginpage-img.png";
import Maillogo from "./images/mail-logo.png";
import BackLogo from "./images/back-logo.png";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function ResetPswd() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleToggle = () => {
    if (type === "email") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("email");
    }
  };

  const blackIconStyle = {
    color: "black",
  };

  return (
    <div className="login-container">
      <div className="login-form-2">
        <img src={Logo} alt="Logo" className="logo-image" />
        <div className="form">

        <h2 className="login-header">Forgot Your Password?</h2>
        <div className="text-header">
            <p>Enter your email address and reset password Your Password.</p>
        </div>
        <div className="form-pswd">
        <img src={Maillogo} alt="m" className="mail-logo"/>
          <input
            className="input-field-2"
            type={type}
            id="email"
            name="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="btn">
          <button className="login-button" onClick={handleReset}>
            Reset Password
          </button>
        </div>
        <Link to="/" className="login-password-link">
            <img src={BackLogo} alt="-" />
            <p>Back to Login</p>
        </Link>
        </div>
      </div>
      <div className="image-container">
        <img src={RightImg} alt="Right Image" className="right-image" />
      </div>
    </div>
  );
}

export default ResetPswd;
