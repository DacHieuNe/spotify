import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./CustomIcon.scss";

const StyledCustomIcon = styled.div`
  width: 24px;
  height: 24px;
  line-height: 24px;
  padding-top: 1px;
  ${(props) => props.background && `background-color: ${props.background}`};
  font-size: 12px;
  text-align: center;
`;
const CustomIcon = ({ font, background }) => {
  return <StyledCustomIcon background={background}>{font}</StyledCustomIcon>;
};

CustomIcon.propTypes = {
  font: PropTypes.string.isRequired,
  background: PropTypes.string,
};

export default CustomIcon;
