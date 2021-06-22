import React from 'react';
import styled from 'styled-components';

const PrenatalMain = () => {
    return(
      <>
        <Circle>
          <div></div>
          <section>
            <h1>Why Postpartum?</h1>
            <p>
            Postpartum yoga allows you to become confident in your new and powerful body. It helps to tone and strengthen, while providing support for the new parent, postnatal bonding with baby, and the guidance you need to move with ease in your own body again. Postpartum yoga focuses on the pelvic floor and abdominals, and toning of muscles that may have been affected during childbirth.
            </p>
          </section>
          <section>
            <h1>Why Prenatal?</h1>
            <p>
            Prenatal yoga supports the birthing body throughout pregnancy, birthing/laboring, and through the parenting process. Its benefits are physical, mental/spiritual, emotional, and educational. Prenatal Yoga promotes community, self-care, empowerment, and mental preparedness for pregnancy and beyond. A regular practice reduces stress in the pregnant body, and therefore creates a safe space for baby.
            </p>
          </section>
        </Circle>
        <PostCircle>
          <section>
            <img src="prenatal.png"/>
          </section>
          <section>
            <h2>
              BENEFITS:
            </h2>
            <ul>
              <li>Increased flexibility</li>
              <li>Reduce common discomforts</li>
              <li>Improves Sleep</li>
              <li>Reduces stress level</li>
              <li>Increased energy & focus</li>
              <li>Strengthen and tone</li>
              <li>Gain information about the birthing process</li>
            </ul>
            <p>
              Become empowered &amp; informed about your options and learn essential self-care practices to help your new family thrive.
            </p>
          </section>
        </PostCircle>
      </>);
};

const Circle = styled.section`
  position: relative;
  height: 38vw;
  h1 {
    font-family: 'Merriweather', sans-serif!important;
    text-transform: capitalize!important;
    padding: 2.5vw 4vw;
  }
  > div {
    background-color: #955EA4;
    width: 60vw;
    height: 60vw;
    border-radius: 100%;
    margin: -25vw 20vw;
    position: absolute;
    opacity: .25;
  }
  > section {
    display: inline-block;
    width: 50vw;
    height: 32vw;
    margin-top: 6vw;
    vertical-align: top;
  }
  > section:first-of-type {
    h1 {
      text-align: right;
    }
    p {
      text-align: right;
    }
  }
  > section:last-of-type {
    background-color: #C09EC8;
    h1 {
      text-align: left;
    }
    p {
      text-align: left;
      color: #fff;
    }
  }
  p {
    font-size: 1.6vw;
    padding: 0 8vw;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  @media screen and (max-width: 945px) {
    height: 54vw;
    h1 {
      font-size: 4.25vw;
    }
    p {
      font-size: 2vw;
    }
    > section {
      height: 50vw;
    }
  }
`;

const PostCircle = styled.div`
  background-color: #C09EC8!important;
  color: #fff;
  font-size: 1.6vw;
  width: 100vw;
  > section {
    display: inline-block;
    width: 50vw;
    height: 40vw;
    vertical-align: top;
  }
  h2 {
    text-align: left;
    padding: 2vw 5vw 0;
  }
  ul {
    text-align:left;
    margin-left: 7.25vw;
    line-height: 2.5vw;
    padding-inline-start: 40px;
  }
  p {
    padding: 2vw 5vw 0 0;
    font-style: italic;
  }
  img {
    width: 40vw;
    margin-top: 5vw;
  }
  @media screen and (max-width: 945px) {
    h2 {
      padding: 0 5vw 0;
    }
    ul {
      margin-left: 0;
      padding-inline-start: 9vw;
      font-size: 2vw;
    }
  }
`;
export default PrenatalMain;