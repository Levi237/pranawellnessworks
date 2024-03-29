import React, { Component } from 'react';
import styled from 'styled-components';

import PurpleContent from '../banners/PurpleContent';

export default class HeaderMessage extends Component {
  render(){
    const {toggleEmailModal, textCopy} = this.props
    return(<>

      { (textCopy.backgroundColor === "purple")? <>
        <PurpleContainer className="wellness-main-content">
            <PurpleContent textCopy={textCopy} toggleEmailModal={toggleEmailModal}/>
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
          {(textCopy.button &&textCopy.link) && <><a href={textCopy.link} target="_blank" rel="noreferrer"><button value={textCopy.value}>{textCopy.button}</button></a>
          <br/><br/><br/><br/></>}
          {(textCopy.button &&!textCopy.link) && <><button value={textCopy.value} onClick={(e) => {toggleEmailModal(e)}}>{textCopy.button}</button> 
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
  background: var(--lightpurple);
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