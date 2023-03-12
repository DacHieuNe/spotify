import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleSideDowload = styled.a`
  display: flex;
  align-items: center;
  padding: 0 24px;
  ${(props) => props.color && `color: ${props.color}`};
  text-decoration: none;
  &:hover {
    color: #fff;
  }
  .side-icon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    padding-top: 1px;
    margin-right: 16px;

    color: currentColor;
    font-size: 20px;
    text-align: center;
  }
  .side-title {
    line-height: 40px;
    color: currentColor;
    font-size: 14px;
  }
`;
const Dowload = ({ icon, title, color }) => {
  return (
    <StyleSideDowload
      href="https://www.spotify.com/vn-vi/download/windows/"
      target="_blank"
      color={color}
    >
      <span className="side-icon">{icon}</span>
      <span className="side-title">{title}</span>
    </StyleSideDowload>
  );
};

Dowload.propTypes = {};

export default Dowload;
