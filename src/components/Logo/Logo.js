import React from "react";
import PropTypes from "prop-types";
import { images } from "assets/images/images";
import "./Logo.scss";

const Logo = (props) => {
  return (
    <div className="logo">
      <a className="logo__link" href="#">
        <img src={images.logo} alt="logo" />
      </a>
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
