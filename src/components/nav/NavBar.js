import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';
import * as routes from '../../constants/routes'

const NavBar = ({ page, toggleHamburger }) => {
  
  return(
    <NavContainer style={(page === "home") ? {marginTop: "-40px"} : {marginTop: "0"}}>
      <div>
        <Link to={routes.ROOT}>
            <Logo src={ (page === "white" || page === "home") ? "icon_white.png" : "icon_fullcolor_light.png" } alt="pranayama yoga breath work" />
            <section>
              { page !== "home" && <>
                <h1 style={page === "white" ? {color: "white"} : {color: "var(--purple)"}}>Prana</h1>
                <br/>
                <h2 style={page === "white" ? {color: "white"} : {color: "var(--lightgreen)"}}>wellness</h2>
              </>}
            </section>
        </Link>
      </div>
      <div>

      </div>
      <div>
        <Hamburger 
          name="toggleHamburger" 
          onClick={(e) => toggleHamburger(e)}
          >
        { (page === "white" || page === "home") && <><HomePatties></HomePatties><HomePatties></HomePatties><HomePatties></HomePatties></> }
        { page === "global" &&<><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties></> }
        </Hamburger>
      </div>
    </NavContainer>);
};

const NavContainer = styled.div`
  position: absolute;
  top: 40px;
  height: 100px;
  width: 100vw;
  z-index: 8;
  > div {
    display: inline-block;
    &:first-of-type {
      width: 225px;
      margin-left: 10vw;
      text-align: left;

      > a {
        width: 100px;
        > img {
          display: inline-block;
          width: 100px;
        }

        > section {
          display: inline-block;
          vertical-align: top;
          margin-top: 20px;
          > h1,
          > h2 {
            text-align: left;
            font-weight: 100;
            display: inline-block;
            padding: 0;
          }
          > h1 {
            font-size: 32px;
          }
          > h2 {
            font-family: var(--fancy-font);
            margin-top: -10px;
          }
        }
      }
    }
    &:nth-of-type(2) {
      width: calc(80vw - 260px);
    }
    &:last-of-type {
      width: 35px;
      margin-right: 10vw;
      margin-top: 32px;
      vertical-align: top;
    }
  }
  @media screen and (max-width: 945px) {
    > div {
    
      &:first-of-type {
        width: 205px;
        margin-left: 10vw;
        > a {

          > img {
            width: 80px;
          }
  
          > section {
            margin-top: 20px;
  
            > h1 {
              font-size: 24px;
            }
            > h2 {
              font-size: 18px;
              margin-top: -8px;
            }
          }
        }
      }
      &:nth-of-type(2) {
        width: calc(80vw - 240px);
      }
      &:last-of-type {
        width: 35px;
        margin-right: 10vw;
        margin-top: 20px;
      }
    }
  }
`;

const Logo = styled.img`

  @media screen and (max-width: 945px) {

  }
`;

const Hamburger = styled.div`
  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
    transition: .3s ease;
  }
  &:hover > section {
    background-color: #669F35;
    cursor: pointer;
  }
  @media screen and (max-width: 945px) {

  }
`;
const HomePatties = styled.section`
  background-color: #fff;
`;
const GlobalPatties = styled.section`
  background-color: var(--purple);
`;


export default NavBar;