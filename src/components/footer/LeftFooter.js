import React from 'react';
import styled from 'styled-components';

const LeftFooter = () => {
  return(
    <>
      <LogoBox className="logo-box">
        <img src="../icon_white.png" alt="icon-white" />
        <Prana className="pranaText">PRANA</Prana>
        <Wellness className="wellnessText">wellness</Wellness>
      </LogoBox>
    </>
  );
};

const LogoBox = styled.div`
  width: 200px;
  text-align: center;
  color: #FFF;
  img {
    margin: 0 auto -20px;
    width: 150px; 
  }
  @media screen and (max-width: 945px) {
    padding-left: .5vw;
    font-size: 3.5vw;
    margin-top: -6px;
    width: auto;
    height: auto;
    text-align: center;
    
    img {
      margin: auto;
      width: 20vw; 
    }
  }
`;

const Prana = styled.section`
  text-transform: uppercase;
  font-weight: 100;
  @media screen and (max-width: 945px) {
    font-size: 5vw;
    margin-top: -2vw;
    padding-left: .5vw;
  }
`;

const Wellness = styled.section`
  text-align: center;
  color: #FFF;
  font-family: 'Merriweather', sans-serif;
  font-style: italic;
  text-transform: lowercase;
  @media screen and (max-width: 945px) {
    font-size: 3.5vw;
    margin-top: -6px;
  }
`;

export default LeftFooter;