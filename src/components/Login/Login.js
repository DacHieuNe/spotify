import React from "react";
import PropTypes from "prop-types";
import { loginURL } from "../../constant/constant";
import { images } from "../../assets/images/images";
import "./Login.scss";

const Login = (props) => {
  return (
    <div className="login">
      <div className="login-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <a className="login-link" href={loginURL}>
        LOGIN TO SPOTIFY
      </a>
    </div>
  );
};

Login.propTypes = {};

export default Login;
