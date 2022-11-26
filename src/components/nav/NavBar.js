import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';

import * as routes from '../../constants/routes';

const NavBar = ({ page, toggleHamburger }) => {
  
  return(
    <NavContainer className={page}>
      <div>
        { page !== "blog" &&
        <Link to={routes.ROOT}>
            <img className="nav-logo" src={ (page === "white" || page === "home" || page === "blogs") ? "/icon_white.png" : "/icon_fullcolor_light.png" } alt="pranayama yoga breath work" />
            <section>
              { ( page !== "blogs" && page !== "blog" && page !== "home" ) && <>
                <h1>Prana</h1>
                <br/>
                <h2>wellness</h2>
              </>}
            </section>
        </Link>
        }
      </div>
      
      <div>

      </div>
      <div>
        <Hamburger 
        className="hamburger"
          name="toggleHamburger" 
          onClick={(e) => toggleHamburger(e)}
          >
          <section></section><section></section><section></section>
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
  &:is(.blog) {
    top: 0px;
  }
  &:is(.home) {
    @media screen and (max-width: 945px) {
      top: 30px;
    }
  }
  &:is(.blog, .blogs) {
    @media screen and (max-width: 945px) {
      top: -10px;
    }
  }
  &:is(.global, .blog) {
    .nav-logo {
      h1 {
        color: var(--purple);
      }
      h2 {
        color: var(--lightgreen);
      }
    }
    .hamburger > section {
      background-color: var(--purple);
    }
  }
  &:-webkit-any(.home, .white, .blogs) {
    .nav-logo {
      h1 {
        color: #fff;
      }
      h2 {
        color: #fff;
      }
    }
    .hamburger > section {
      background-color: #fff;
    }
  } 
  &:is(.home, .white, .blogs) {
    .nav-logo {
      h1 {
        color: #fff;
      }
      h2 {
        color: #fff;
      }
    }
    .hamburger > section {
      background-color: #fff;
    }
  }

  &:is(.blog) {
    .hamburger > section {
      background-color: var(--purple);
    }
  }
  &:is(.blogs) {
  }
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
        margin-left: 5vw;
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
        width: calc(90vw - 240px);
      }
      &:last-of-type {
        width: 35px;
        margin-right: 5vw;
        margin-top: 20px;
      }
    }
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

export default NavBar;