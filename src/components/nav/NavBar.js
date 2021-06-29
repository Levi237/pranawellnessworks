import React       from 'react';
import styled      from 'styled-components';
import { Link }    from 'react-router-dom';
import * as routes from '../../constants/routes'

const NavBar = ({ page, user, logout, toggleHamburger }) => {
  return(
    <NavContainer>
      <LogoIcon>
        <Link to={routes.HOME}>
          <LogoBox>
            <Logo src={page === "home" ? "icon_white.png" : "icon_fullcolor_light.png"} alt="Prana Yoga breath work" />
          </LogoBox>
        </Link>
      </LogoIcon>
      <Hamburger 
        name="toggleHamburger" 
        onClick={(e) => toggleHamburger(e)}
      >
      { page === "home" 
        ? <><HomePatties></HomePatties><HomePatties></HomePatties><HomePatties></HomePatties></>
        : <><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties><GlobalPatties></GlobalPatties></>
      }
      </Hamburger>
      {user && <button onClick={logout} style={{color:'#689E3C', float: 'right', margin: '20px'}}>LOGOUT</button>}
    </NavContainer>);
};

const NavContainer = styled.div`
  width: 90vw%;
 
 `;

const LogoIcon = styled.div`
  float: left;
  margin-left: 10vw;
  margin-top: 30px;
  @media screen and (max-width: 945px) {
    margin-left: 0;
    margin-top: 12px;

  }
`;
const LogoBox = styled.div`
  width: 150px;
  @media screen and (max-width: 945px) {
    width: 20vw;
    height: auto;
    text-align: center;
  }
`;
const Logo = styled.img`
  width: 100%;
  @media screen and (max-width: 945px) {
    width: 80px;
    margin-top: -10px;
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