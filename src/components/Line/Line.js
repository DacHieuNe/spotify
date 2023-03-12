import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleLine = styled.div`
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.color && `border-top: 1px solid ${props.color}`};
`;
const Line = ({ marginTop, marginBottom, marginLeft, marginRight, color }) => {
  return (
    <StyleLine
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      color={color}
    ></StyleLine>
  );
};

Line.propTypes = {
  marginTop: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
  marginLeft: PropTypes.string.isRequired,
  marginRight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Line;
