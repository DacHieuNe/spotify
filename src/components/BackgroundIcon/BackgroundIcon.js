import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyleBackgroundIcon = styled.div`
  padding: 0 24px;
  ${(props) => props.color && `color: ${props.color}`};
  .bg-icon {
    display: flex;
    align-items: center;
    color: currentColor;
    text-decoration: none;
    .bg-icon__font {
      width: 24px;
      height: 24px;
      line-height: 24px;
      padding-top: 1px;
      margin-right: 16px;
      border-radius: 3px;
      ${(props) => props.bgImage && `background-image: ${props.bgImage}`};
      font-size: 12px;
      text-align: center;
      opacity: 0.7;
    }
    .bg-icon__title {
      line-height: 40px;
      margin: 0;
      color: currentColor;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
    &--active {
      color: #fff;
      .bg-icon__font {
        opacity: 1;
      }
    }
  }
  &:hover {
    color: #fff;
    .bg-icon__font {
      opacity: 1;
    }
  }
`;

const BackgroundIcon = ({ color, bgImage, icon, title, href }) => {
  return (
    <StyleBackgroundIcon color={color} bgImage={bgImage}>
      <NavLink to={href} className="bg-icon" activeClassName="bg-icon--active">
        <div className="bg-icon__font">{icon}</div>
        <h3 className="bg-icon__title">{title}</h3>
      </NavLink>
    </StyleBackgroundIcon>
  );
};

BackgroundIcon.propTypes = {};

export default BackgroundIcon;
