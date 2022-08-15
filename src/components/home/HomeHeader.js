import React from 'react';
import styled from 'styled-components';


const HomeHeader = ({toggleEmailSignup}) => {

    return(
    <>
      <VideoContainer className="video-container">
        {/* <img src="header/prana_hero.jpg" style={{objectFit: 'cover', width: '100%', height: '100%'}} alt="temporary hero"/> */}
        <VideoFrame
          playsInline
          autoPlay
          muted
          loop
          id="bgvid"
          ref={video => {
              if (!video) return;
              video.muted = true;
              video.play();
              video.playbackRate = .75;
          }}
        >
        <source
            src="https://firebasestorage.googleapis.com/v0/b/prana-wellness.appspot.com/o/PRANA%20With%20Out%20Speakers%20No%20Watermark%20V1.mp4?alt=media&token=f1577c3e-870f-48e3-8c59-990e8419e04a"
            type="video/mp4"
        />
        </VideoFrame>
      </VideoContainer>

      <WelcomeContainer>
        <section>WELCOME TO</section>
        <section>Prana</section>
        <section>wellness</section>
        <section>Wellness designed to work for you.</section>
        <ButtonWrapper>
          <a href="https://calendly.com/stephaniepranawellness/30min?back=1&month=2021-09" target="_blank" rel="noreferrer">
          <ButtonCTA 
            name="contactForm" 
            className="ctaBtn"
            value="contactRequest" 
            // onClick={(e) => {toggleEmailSignup(e)}}
          >
            Book a Call
          </ButtonCTA>
          </a>
        </ButtonWrapper>
      </WelcomeContainer>
    </>)
    ;
};


const WelcomeContainer = styled.div`
  color: #FFF;
  text-align: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-image: linear-gradient(180deg, #000, transparent, transparent 80%);
  overflow: hidden;

  > section {
    &:first-of-type {
      margin-top: 70px;
      font-size: 2.8vw;
      font-weight: bold;
      letter-spacing: .5vw;
    
      text-transform: uppercase;
      color: var(--lightgreen);

    }
    &:nth-of-type(2) {
      margin-top: -2vw;
      font-size: 10vw;
      font-weight: 100;
      letter-spacing: 2.5vw;
      text-transform: uppercase;
    
    }
    &:nth-of-type(3) {
      font-family: 'Merriweather',sans-serif;
      font-size: 7vw;
      margin-top: -4vw;
    
    }
    &:nth-of-type(4) {
      position: absolute;
      bottom: calc(5vh + 7.33vw + 42px);
      width: 100vw;
      margin: 0 auto;

      font-weight: 100;
      font-size: 2.4vw;
      text-shadow: 4px 4px 10px #000;
    }
    &:nth-of-type(5) {
      position: absolute;
      bottom: calc(3vh + 6vw);
      width: 100vw;
    }
    @media screen and (max-width: 945px) {
      &:first-of-type {
        font-size: 5vw;

      }
      &:nth-of-type(2) {
        font-size: 14vw;
        letter-spacing: 3vw;
      }
      &:nth-of-type(3) {
        font-size: 10vw;
      }
      &:nth-of-type(4){
        font-size: 5vw;
        bottom: calc(16vh + 1.33vw + 42px);
      }
      &:nth-of-type(5) {
        position: absolute;
        bottom: calc(5vh + 1.33vw + 42px);
        width: 100vw;
      }
    }
  }
`;

const ButtonWrapper = styled.section`
position: absolute;
bottom: calc(2vh + 7.33vw + 42px);
margin: 0 auto;
text-align: center;
width: 100vw;

@media screen and (max-width: 945px) {
  bottom: 12vh;
}
`;
const ButtonCTA = styled.button`
  font-size: 18px;
  margin: 0 auto;
  padding: 20px 0;
  width: 300px;
  color: #FFF;
  background-color: var(--lightgreen) !important;
  border-color: #669F35;
  transition: all .3s ease-in-out;

  :hover {
    background-color: #669F35 !important;
    transition: all .3s ease-in-out;
  }

  @media screen and (max-width: 945px) {
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: calc(100vh);
  overflow: hidden;
  position: absolute;
  top: 0px;

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {

  }
`;
  
const VideoFrame = styled.video`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {
      width: auto;
      height: 100%;
  }
  @media (min-aspect-ratio: 16/9) {
      width: 100vw;
      height: 56.25vw;
    }
  }
`;





export default HomeHeader;

