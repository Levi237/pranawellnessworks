import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

import './Nav.css';

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
                    <NavMenu id="nav-menu" className="opacity" style={{}}>
                        <div>
                        <NavLink activeClassName="nav-active" to={routes.ROOT} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                        </div>
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
                            <BlogToggleBtn className="toggle-blog" onClick={() => {this.toggleBlogCategories()}}>
                            <i id="blog-btn-line" className="arrow down vert"/>
                                {/* <section></section><section id="blog-btn-line" className="vert"></section> */}
                                </BlogToggleBtn>
                            <section id="blog-categories" className="toggle hide">
                                <NavLink activeClassName="nav-active" to={routes.BLOGF} onClick={() => {toggleHamburger()}}>FUNCTIONAL FITNESS</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGM} onClick={() => {toggleHamburger()}}>MINDFULNESS & MEDITATION</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGN} onClick={() => {toggleHamburger()}}>NUTRITION</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.BLOGY} onClick={() => {toggleHamburger()}}>YOGA</NavLink>
                            </section>
                        </section>
                        <div>
                            <NavLink activeClassName="nav-active" to={routes.ABOUT} onClick={() => {toggleHamburger()}}>ABOUT US</NavLink>
                        </div>
                        <div>
                            <NavLink activeClassName="nav-active" to={routes.FAQ} onClick={() => {toggleHamburger()}}>FAQ</NavLink>
                        </div>
                    </NavMenu>
                </div>
            </NavContainer>
        );
    };
};

const NavMenu = styled.div`
    width: 260px;
    margin: 0 auto;
    padding-top: 80px; 
    display: inline-block;

    text-align: left;
    > div {
        border-bottom: 1px solid white;
    }
    > section {
        font-size: 80%;
        padding-left: 20px;
        margin-top: -1px;
        border-bottom: 1px solid white;
    }

    a {
        text-decoration: none;
        display: block;
        color: #FFF;
        padding: 8px 0px;
    }
    a:hover {
        color: var(--lightgreen);
    }

    @media screen and (min-width: 400px) {
        
    }
    @media screen and (max-width: 399px) {

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
    
    button.close {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
    }
`;

const BlogToggleBtn = styled.button`
    position: absolute;
    top: -26px;
    right: 12px;
    padding: 0;
    background: transparent;
    color: #fff;
    border: none;

    .horz {
        transform: rotate(225deg);
    }
    .vert {
        transform: rotate(45deg);
    }
    .arrow {
        --gauge: 1px;
        border: solid white;
        border-width: 0 var(--gauge) var(--gauge) 0;
        display: inline-block;
        padding: 4px;
        transition: .5s ease;
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