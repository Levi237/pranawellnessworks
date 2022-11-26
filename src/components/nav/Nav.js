import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

export default class Nav extends Component {
    toggleBlogCategories = () => {
        const dropdown = document.getElementById('blog-categories');
        dropdown.classList.toggle('show');
        dropdown.classList.toggle('hide');
        const rotateBtn = document.getElementById('blog-btn-line');
        rotateBtn.classList.toggle('horz');
        rotateBtn.classList.toggle('vert');
    };

    render(){
        const { toggleHamburger } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    <CloseBtn className="close xClose" onClick={() => {toggleHamburger()}}>
                        x
                    </CloseBtn>
                    {/* if screen width is greater than menu width, fix the sizes.  if it is less than, use calc with min-width 260px */}
                    <NavMenu id="nav-menu" className="opacity" style={{}}>
                        <NavLink activeClassName="nav-active" to={routes.ROOT} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.SERV} onClick={() => {toggleHamburger()}}>WELLNESS SERVICES</NavLink>
                        <section>
                            <NavLink activeClassName="nav-active" to={routes.GROUP} onClick={() => {toggleHamburger()}}>GROUP PROGRAMS</NavLink>
                            {/* <NavLink activeClassName="nav-active" to={routes.EVENT} onClick={() => {toggleHamburger()}}>EVENTS CALENDAR</NavLink> */}
                            <NavLink activeClassName="nav-active" to={routes.WELL} onClick={() => {toggleHamburger()}}>PERSONAL WELLNESS</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.CORP} onClick={() => {toggleHamburger()}}>CORPORATE WELLNESS</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.YOGA} onClick={() => {toggleHamburger()}}>YOGA THERAPY</NavLink>
                            {/* <NavLink activeClassName="nav-active" to={routes.PREG} onClick={() => {toggleHamburger()}}>MATERNAL HEALTH</NavLink> */}
                            <NavLink activeClassName="nav-active" to={routes.COACH} onClick={() => {toggleHamburger()}}>SPEAKING & COACHING</NavLink>
                        </section>
                        <NavLink activeClassName="nav-active" to={routes.BLOG} onClick={() => {toggleHamburger()}}>BLOG</NavLink>
                        <section className="toggle-blog-container">
                            <BlogToggleBtn className="toggle-blog" onClick={() => {this.toggleBlogCategories()}}><section></section><section id="blog-btn-line" className="vert"></section></BlogToggleBtn>
                            <section id="blog-categories" className="toggle hide">
                                <NavLink activeClassName="nav-active" to={routes.BLOGF} onClick={() => {toggleHamburger()}}>FUNCTIONAL FITNESS</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGM} onClick={() => {toggleHamburger()}}>MINDFULNESS & MEDITATION</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGN} onClick={() => {toggleHamburger()}}>NUTRITION</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGY} onClick={() => {toggleHamburger()}}>YOGA</NavLink>
                            </section>
                        </section>
                        <NavLink activeClassName="nav-active" to={routes.ABOUT} onClick={() => {toggleHamburger()}}>ABOUT US</NavLink>
                        <NavLink activeClassName="nav-active" to={routes.FAQ} onClick={() => {toggleHamburger()}}>FAQ</NavLink>
                    </NavMenu>
                </div>
            </NavContainer>
        );
    };
};

// if screen width is greater than menu width, fix the sizes.  if it is less than, use calc with min-width 260px
const NavMenu = styled.div`
    padding-top: 80px; 
    width: 260px;

        text-align: left;
        display: inline-block;
        width: auto;
        margin: 0 auto;
        > section {
            font-size: 80%;
            margin-left: 20px;
        }

    @media screen and (min-width: 400px) {
        
    }
    @media screen and (max-width: 399px) {

    }
`;

const BlogToggleBtn = styled.button`
    position: absolute;
    top: -32px;
    right: 0px;
    padding: 0;
    background: transparent;
    color: white;
    border: none;

    .horz {
        transform: rotate(0deg);
    }
    .vert {
        transform: rotate(90deg);
    }
    
    > section {
        height: 2px;
        width: 12px;
        background: white;
        &:first-of-type {
            margin-top: 5px
        }
        &:last-of-type {
            transition: transform .35s  ease-in-out;
            margin-top: -2px
        }
    }
`;


const NavContainer = styled.div`
    position: fixed;
    right: 0;
    z-index: 111;

    width: 100%;
    height: 100%;
    overflow: scroll;
    
    background-color: var(--darkpurple);
    color: #FFF;
    
    font-size: 20px;
    text-align: center;

    .toggle-blog-container {
        position: relative;
    }

    .toggle {
        transition: max-height 1s ease;
        height: auto;
    }
    .show {
        max-height: 600px;
        transition: max-height 1s ease;
        overflow: hidden;
    }
    .hide {
        max-height: 0px;
        overflow: hidden;
    }

    a {
        text-decoration: none;
        display: block;
        height: 36px;
        color: #FFF;
    }
    a:hover {
        color: var(--lightgreen);
    }
    
    button.close {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
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
    border-radius: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;
    &:hover {
        color: var(--lightgreen);
    }
`;