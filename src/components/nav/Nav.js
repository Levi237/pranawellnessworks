import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

export default class Nav extends Component {


    render(){
        const { toggleHamburger } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    <CloseBtn className="close xClose" onClick={() => {toggleHamburger()}}>
                        x
                    </CloseBtn>
                    <br /><br /><br />
                    <NavLink activeClassName="nav-active" to={routes.ROOT} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.ABOUT} onClick={() => {toggleHamburger()}}>ABOUT US</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} onClick={() => {toggleHamburger()}}>WELLNESS SERVICES</NavLink>
                    <section>
                        <NavLink activeClassName="nav-active" to={routes.EVENT} onClick={() => {toggleHamburger()}}>EVENTS CALENDAR</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.WELL} onClick={() => {toggleHamburger()}}>PERSONAL WELLNESS</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.CORP} onClick={() => {toggleHamburger()}}>CORPORATE WELLNESS</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.YOGA} onClick={() => {toggleHamburger()}}>YOGA THERAPY</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.PREG} onClick={() => {toggleHamburger()}}>MATERNAL HEALTH</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.COACH} onClick={() => {toggleHamburger()}}>SPEAKING & COACHING</NavLink>
                    </section>
                    <NavLink activeClassName="nav-active" to={routes.FAQ} onClick={() => {toggleHamburger()}}>FAQ</NavLink>
                </div>
            </NavContainer>
        );
    };
};

const NavContainer = styled.div`
    position: fixed;
    right: 0;
    z-index: 111;

    width: 100%;
    height: 100%;
    overflow: hidden;
    
    background-color: var(--darkpurple);
    color: #FFF;
    
    font-size: 20px;
    text-align: center;

    > div {
        text-align: left;
        display: inline-block;
        width: auto;
        margin: 0 auto;
        > section {
            font-size: 80%;
            margin-left: 20px;
        }
    }
    a {
        text-decoration: none;
        display: block;
        height: 36px;
        padding-top: 10px;
        color: #FFF;
    }
    a:hover {
        color: var(--lightgreen);
    }
    
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
        font-size: 14px;
    }
    @media screen and (max-height: 500px) {
        font-size: 5vh;
        a {
            height: 9vh;
            padding-top: 0;
        }
    }
`;
const CloseBtn = styled.button`
    background-color: transparent;
    border: 1px solid white!important;
    border-radius: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;
    &:hover {
        border: 1px solid var(--lightgreen)!important;
        color: var(--lightgreen);
    }
`;