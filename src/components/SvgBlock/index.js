import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  img {
    border-radius: 1rem;
    height:350px;
  }
  @media only Screen and (max-width: 48em) {
  width: auto;
  img {
    margin-top: 5rem;
    height:auto;
  }
  }
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  //console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;
