import React, { Component } from 'react';
import styled from 'styled-components';

import PurpleContent from '../banners/PurpleContent';

export default class HeaderMessage extends Component {
  render(){
    const {toggleEmailSignup, textCopy} = this.props
    return(<>
      { (textCopy.backgroundColor === "purple")? <>
        <PurpleContainer className="wellness-main-content">
            <PurpleContent textCopy={textCopy} toggleEmailSignup={toggleEmailSignup}/>
        </PurpleContainer>
        {this.props.children}
      </> : <>
        <Container>
        {textCopy.header &&
          <h1 className="header">
          {textCopy.header}
          </h1>
          }
          {textCopy.message &&
          <section className="message">
          {textCopy.message}
          </section>
          }
          {textCopy.button && <><button value={textCopy.value} onClick={(e) => {toggleEmailSignup(e)}}>{textCopy.button}</button> 
          <br/><br/><br/><br/></>}
          {this.props.children}
        </Container>
      </>}
    </>);
  }
};
const PurpleContainer = styled.div`
  margin-bottom: 5vw;
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;
  background: rgb(191, 158, 200);
    @media screen and (max-width: 945px) {
      padding-top: 5vw;
    }
`;
const Container = styled.div`
  margin-bottom: 5vw;
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;
  > h1.header {
    padding-top: 4vw;
  }
  > section.message {
    font-style: normal;
    font-weight: 300;
    font-size: 1.6vw;
    width: 80vw;
    margin: 0vw 10vw;
    padding-bottom: 6vw;
    text-align: center;
    color: #4D3B5C;
  }
    @media screen and (max-width: 945px) {
      padding-top: 5vw;
      > h1.header {
        padding-top: 0vw;
        margin-block-start: 9vw;
        font-size: 7vw;
      }
      > section.message {
        width: 90vw;
        margin: 5vw;
        font-size: 2.6vw;
      }
    }
`;