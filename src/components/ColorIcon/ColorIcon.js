import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyleColorIcon = styled.div`
  padding: 0 24px;
  ${(props) => props.bgColor && `color: ${props.bgColor}`};
  .icon-color {
    display: flex;
    align-items: center;
    color: currentColor;
    text-decoration: none;
    .icon-color__font {
      width: 24px;
      height: 24px;
      line-height: 24px;
      padding-top: 1px;
      margin-right: 16px;
      border-radius: 3px;
      background-color: currentColor;
      font-size: 12px;
      text-align: center;
      svg {
        ${(props) => props.color && `fill: ${props.color}`};
      }
    }
    .icon-color__title {
      line-height: 40px;
      margin: 0;
      color: currentColor;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
    &--active {
      color: #fff;
      .icon-color__font {
        color: #fff;
      }
    }
  }
  &:hover {
    color: #fff;
    .icon-color__font {
      color: #fff;
    }
  }
`;
const ColorIcon = ({ color, bgColor, icon, title, href }) => {
  return (
    <StyleColorIcon color={color} bgColor={bgColor}>
      <NavLink
        to={href}
        className="icon-color"
        activeClassName="icon-color--active"
      >
        <div className="icon-color__font">{icon}</div>
        <h3 className="icon-color__title">{title}</h3>
      </NavLink>
    </StyleColorIcon>
  );
};

ColorIcon.propTypes = {};

export default ColorIcon;
