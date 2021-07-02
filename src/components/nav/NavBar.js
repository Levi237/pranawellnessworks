import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';
import * as routes from '../../constants/routes'

const NavBar = ({ page, toggleHamburger }) => {
  return(
    <NavContainer>
      <div>
        <Link to={routes.HOME}>
            <Logo src={ page === "home" ? "icon_white.png" : "icon_fullcolor_light.png" } alt="pranayama yoga breath work" />
        </Link>
      </div>
      <div>

      </div>
      <div>
        <Hamburger 
          name="toggleHamburger" 
          onClick={(e) => toggleHamburger(e)}
          >
        { page === "home" && <><HomePatties></HomePatties><HomePatties></HomePatties><HomePatties></HomePatties></> }
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

  > div {
    display: inline-block;
    &:first-of-type {
      width: 100px;
      margin-left: 10vw;

      > a {
        width: 100px;

        > img {
          width: 100%;
        }
      }
    }
    &:nth-of-type(2) {
      width: calc(80vw - 135px);
    }
    &:last-of-type {
      width: 35px;
      margin-right: 10vw;
      margin-top: 32px;
      vertical-align: top;
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