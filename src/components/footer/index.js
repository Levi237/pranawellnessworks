import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

import LeviEikoBrand from '../../levieiko';

export default class Footer extends Component {

    render(){
        const { toggleEmailSignup, scrollToTop } = this.props;
        return (
            <FooterWrapper className="grid-footer">
                <QuickLinksSection>
                    <h1>QUICK links</h1>
                    <div>
                        <section>
                            <NavLink activeClassName="nav-active" to={routes.ROOT} onClick={scrollToTop}>HOME</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.EVNT} onClick={scrollToTop}>SCHEDULE</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.INFO} onClick={scrollToTop}>ABOUT US</NavLink>
                            <button className="link-btn"
                                name="contactForm" 
                                value="contactRequest" 
                                onClick={(e) => {toggleEmailSignup(e)}}
                                >
                                CONTACT US
                            </button>
                            <NavLink activeClassName="nav-active" to={routes.FAQS} onClick={scrollToTop}>FAQ</NavLink>
                        </section>
                        <section>
                            <NavLink activeClassName="nav-active" to={routes.SERV} onClick={scrollToTop}>WELLNESS SERVICES</NavLink>
                            <div>
                                <NavLink activeClassName="nav-active" to={routes.WELL} onClick={scrollToTop}>PERSONAL WELLNESS</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.CORP} onClick={scrollToTop}>CORPORATE WELLNESS</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.YOGA} onClick={scrollToTop}>YOGA THERAPY</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.PREG} onClick={scrollToTop}>MATERNAL HEALTH</NavLink>
                                <NavLink activeClassName="nav-active" to={routes.COAC} onClick={scrollToTop}>SPEAKING & COACHING</NavLink>
                            </div>
                        </section>
                    </div>
                    <div>
                        <LeviEikoBrand/>
                    </div>
                </QuickLinksSection>
                <LogoSection>
                    <div>
                        <img src="../icon_white.png" alt="pranayama yoga breath work" />
                        <Prana className="pranaText">PRANA</Prana>
                        <Wellness className="wellnessText">wellness</Wellness>
                    </div>
                </LogoSection>
                <ContactSection>
                    <h1>HAVE QUESTIONs?</h1>
                    <div>
                        <h3>Stephanie@pranawellnessworks.com</h3> 
                        <button 
                            className="purple"            
                            name="contactForm" 
                            value="contactRequest" 
                            onClick={(e) => {toggleEmailSignup(e)}
                            }>
                            SEND US A MESSAGE
                        </button>
                    </div>
                    <div>
                        <LeviEikoBrand/>
                    </div>
                    <div>
                        <a href="https://www.travelslay.co/" target="_blank" rel="noopener noreferrer">
                            <img src="../travel_slay_white.png" alt="Travel Slay"/>
                        </a>
                        <section>explore fitness and travel</section>
                    </div>
                </ContactSection>
            </FooterWrapper>
        )
    }
}


const ContactSection = styled.section`
    position: relative;
    grid-area: contact;
    > div {
        text-align: center;
        &:nth-of-type(2) {
            visibility: hidden;
            position absolute;
            bottom: 5vw;
            left: 5vw;
        }
        &:last-of-type {
            position: absolute;
            bottom: 2.5vw;
            right: 2.5vw;
            width: 15vw;
            text-align: center;
            > section {
                color: #fff;
                font-size: 1vw;
            }
            > a {
                > img {
                    width: 100%;
                    margin-bottom: -2vw;
                }
            }
        }

        > h3 {
            text-align: center;
            text-transform: uppercase;
            color: var(--lightestpurple);
            font-size: 1.6vw;
            font-weight: 100;
        }

        > button {
            margin-top: 2vw;
        }
    }
    @media screen and (max-width: 945px) {
        > div {
            &:first-of-type {
                padding-bottom: 40vw;
            }
            &:nth-of-type(2) {
                visibility: visible;
            }
            &:last-of-type {
                position: absolute;
                bottom: 5vw;
                right: 5vw;
                width: 35vw;
                text-align: center;
                > section {
                    color: #fff;
                    font-size: 2.5vw;
                }
                > a {
                    > img {
                        width: 100%;
                        margin-bottom: -2vw;
                    }
                }
            }
    
            > h3 {
                font-size: 4vw;
                margin-bottom: 5vw;
            }
    
            > button {
                margin-top: 2vw;
            }
        }
    }
`;

const LogoSection = styled.section`
    grid-area: logo;
    padding: 5vw 0!important;
    > div {
        text-align: center;

        > img {
            width: 90%;
            margin: 0 auto -3vw;
        }
    }
    @media screen and (max-width: 945px) {
        > div {
            > img {
                width: 40%;
                margin: 0 auto -2vw;
            }
        }
    }
`;
const QuickLinksSection = styled.section`
    grid-area: links;
    position: relative;
    .link-btn {
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }
    > div {
        &:first-of-type {      
            text-align: left;
            a {
                display: block;
                text-decoration: none;
                text-shadow: 0 0 15px rgb(0 0 0 / 25%);
                &:hover {
                    text-decoration: underline;
                }
            }
            > section {
                display: inline-block;
                vertical-align: top;
                
                button, 
                > a {
                    color: #fff;
                    font-size: 1.8vw;
                    padding-left: 2vw;
                    margin-bottom: 1vw;
                    letter-spacing: .05vw;
                }
                &:first-of-type {                    
                }
                &:last-of-type {                    
                    > div {
                        padding-left: 4vw;
                        font-size: 1.25vw;
                        > a {
                            color: var(--lightpurple)!important;
                            margin-bottom: .8vw;
                            letter-spacing: .025vw;
                        }
                    }
                }
            }
        }
        &:last-of-type {
            position: absolute;
            bottom: 2.5vw;
            left: 2.5vw;
        }
    }
    @media screen and (max-width: 945px) {

        > div {
            &:first-of-type {      
                a {
                    display: block;
                    text-decoration: none;
                }
                > section {
                    display: inline-block;
                    vertical-align: top;
                    
                    button, 
                    > a {
                        font-size: 6vw;
                        padding-left: 5vw;
                        margin-bottom: 2.5vw;
                        letter-spacing: .05vw;
                    }
                    &:first-of-type {                    
                    }
                    &:last-of-type {                    
                        > div {
                            padding-left: 10vw;
                            font-size: 5.25vw;
                            > a {
                                margin-bottom: 2vw;
                                letter-spacing: .025vw;
                            }
                        }
                    }
                }
            }
            &:last-of-type {
                visibility: hidden;
            }
        }
    }
`;
const Prana = styled.section`
    text-transform: uppercase;
    font-weight: 100;
    color: #fff;
    font-size: 3.5vw;
    -webkit-letter-spacing: .75vw;
    -moz-letter-spacing: .75vw;
    -ms-letter-spacing: .75vw;
    -webkit-letter-spacing: .5vw;
    -moz-letter-spacing: .5vw;
    -ms-letter-spacing: .5vw;
    letter-spacing: 0.5vw;
    margin: 0 auto -1.25vw;
  @media screen and (max-width: 945px) {
    font-size: 5.5vw;
    letter-spacing: .8vw;
  }
`;

const Wellness = styled.section`
  text-align: center;
  color: #FFF;
  font-family: 'Merriweather', sans-serif;
  font-style: italic;
  text-transform: lowercase;
  font-size: 2.5vw;
  letter-spacing: .2vw;
  @media screen and (max-width: 945px) {
    font-size: 3.33vw;
    letter-spacing: .3vw;
  }
`;

const FooterWrapper = styled.div`
    background-color: var(--purple);
    grid-area: footer;
    width: 100%;
    min-height: 400px;

    display: grid;
    grid-template-areas: 'links logo contact';
    grid-template-columns: 5fr 2fr 5fr; 

    > section {
        > h1 {
            color: var(--lightgreen);
            text-align: left;
            // border-bottom: 1px solid var(--green);
            padding: 0;
            font-size: 2.6vw;
            letter-spacing: .1vw;
            font-weight: 100;
            margin-bottom: 1.5vw;
        }
        padding: 2.5vw;
    }
    @media screen and (max-width: 945px) {
        grid-template-areas: 'logo' 'links' 'contact';
        grid-template-columns: 100vw; 
        grid-template-rows: auto auto auto;
        > section {
            > h1 {
                font-size: 8vw;
                letter-spacing: .3vw;
                margin-bottom: 5vw;
            }
            padding: 5vw;
        }
    }
`;