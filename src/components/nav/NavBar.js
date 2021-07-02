import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';
import * as routes from '../../constants/routes'

const NavBar = ({ page, toggleHamburger }) => {
  return(
    <NavContainer>
      <LogoIcon>
        <Link to={routes.HOME}>
          <LogoBox>
            <Logo src={ page === "home" ? "icon_white.png" : "icon_fullcolor_light.png" } alt="pranayama yoga breath work" />
          </LogoBox>
        </Link>
      </LogoIcon>
      <Hamburger 
        name="toggleHamburger" 
        onClick={(e) => toggleHamburger(e)}
        >
      { page === "home" && <><HomePatties></HomePatties><HomePatties></HomePatties><HomePatties></HomePatties></> }
      { page === "global" &&<><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties></> }
      </Hamburger>
    </NavContainer>);
};

const NavContainer = styled.div`
  position: absolute;
  top: 40px;
  height: 100px;
  width: 100vw;
  background-color: blue;
`;

const LogoIcon = styled.div`

  @media screen and (max-width: 945px) {
  }
`;
const LogoBox = styled.div`

  @media screen and (max-width: 945px) {

  }
`;
const Logo = styled.img`

  @media screen and (max-width: 945px) {

  }
`;

const Hamburger = styled.div`
  float: right;
  margin: 90px 10vw 0 0;
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

    margin: 25px 5vw 0 0;

  }
`;
const HomePatties = styled.section`
  background-color: #fff;
`;
const GlobalPatties = styled.section`
  background-color: var(--purple);
`;


export default NavBar;