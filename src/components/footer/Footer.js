import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

import LeviEikoBrand from '../../levieiko';

const Footer = ({  }) => {
    return (
        <FooterWrapper className="grid-footer">
            <QuickLinksSection>
                <h1>QUICK links</h1>
                <div>
                    <section>
                    <NavLink activeClassName="nav-active" to={routes.HOME}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.EVNT}>SCHEDULE</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO}>ABOUT US</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO}>CONTACT US</NavLink>
                    </section>
                    <section>
                        <NavLink activeClassName="nav-active" to={routes.SERV}>WELLNESS SERVICES</NavLink>
                        <div>
                            <NavLink activeClassName="nav-active" to={routes.WELL}>PERSONAL WELLNESS</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.CORP}>CORPORATE WELLNESS</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.YOGA}>YOGA THERAPY</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.PREG}>MATERNAL HEALTH</NavLink>
                            <NavLink activeClassName="nav-active" to={routes.COAC}>SPEAKING & COACHING</NavLink>
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
                    <button className="purple">SEND US A MESSAGE</button>
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

const ContactSection = styled.section`
    position: relative;
    > div {
        text-align: center;
        
        &:last-of-type {
            position: absolute;
            bottom: 2.5vw;
            right: 2.5vw;
            > section {
                color: #fff;
            }
            > a {
                > img {
                    width: 100%;
                }
            }
        }

        > h3 {
            text-align: center;
            text-transform: uppercase;
            color: var(--lightpurple);
            font-size: 1.4vw;
        }

        > button {
            margin-top: 2vw;
        }
    }
`;

const LogoSection = styled.section`
    > div {
        text-align: center;

        > img {
            width: 100%;
            margin: 0 auto;
        }
    }
`;
const QuickLinksSection = styled.section`
    position: relative;
    > div {
        &:first-of-type {      
            a {
                display: block;
                text-decoration: none;
            }
            > section {
                display: inline-block;
                vertical-align: top;
    
                > a {
                    color: #fff;
                    font-size: 1.6vw;
                    padding-left: 1vw;
                    margin-bottom: 1vw;
                    letter-spacing: .05vw;
                }
                &:first-of-type {                    
                }
                &:last-of-type {                    
                    > div {
                        padding-left: 2vw;
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
`;
const Prana = styled.section`
  text-transform: uppercase;
  font-weight: 100;
  color: #fff;
  @media screen and (max-width: 945px) {
    font-size: 5vw;
    margin-top: -2vw;
    padding-left: .5vw;
  }
`;

const Wellness = styled.section`
  text-align: center;
  color: #FFF;
  font-family: 'Merriweather', sans-serif;
  font-style: italic;
  text-transform: lowercase;
  @media screen and (max-width: 945px) {
    font-size: 3.5vw;
    margin-top: -6px;
  }
`;

const FooterWrapper = styled.div`
    background-color: var(--purple);
    grid-area: footer;
    width: 100%;
    height: 100%;
    min-height: 400px;

    display: grid;
    grid-template-areas: 'links logo contact';
    grid-template-columns: 5fr 3fr 5fr; 

    > section {
        > h1 {
            color: var(--lightgreen);
            text-align: left;
            border-bottom: 1px solid var(--lightgreen);
            padding: 0;
            font-size: 2.6vw;
            letter-spacing: .1vw;
            font-weight: 100;
            margin-bottom: 1.5vw;
        }
        padding: 2.5vw;
        &:first-of-type {

        }
        &:nth-of-type(2) {

        }
        &:nth-of-type(3) {
        }
    }
`;
export default Footer;