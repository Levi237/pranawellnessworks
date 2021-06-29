import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

// import './LotusDisplay.css';

import * as routes          from '../../constants/routes';


const lotusStyleOverride = {
    position: 'relative',
    overflow: 'hidden',
    height: 'auto'
}

export default class LotusDisplay extends Component {
    state = {

    };
    render(){

            return(<>
                <LotusContainer className="lotus-box" style={lotusStyleOverride}>
                    <div></div>
                    <div>
                       <section>ONSITE & ONLINE</section>
                       <section>with various options for incorporating Prana Wellness into your work and personal life, we can help you curate a healthy lifestyle that works for you.</section>
                    </div>

                    <section>
                        <img src="../lotus_half_pink.png" alt="Prana Yoga breath work" />
                        <div>Corporate Wellness</div>
                        <section>
                        Let us help you create an engaging and enjoyable wellness program to increase productivity, retention, and employee satisfaction. 
                        </section>
                        <NavLink to={routes.CORP}><button className="white lotus-desktop-button">explore workplace plans</button></NavLink>
                        <NavLink to={routes.CORP}><button className="white lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                    <section>
                        <img src="../lotus_half_white.png" alt="Prana Yoga breath work" />
                        <div>Individual Wellness</div>
                        <section>
                        We guide you and educate you, and help you identify ways to incorporate wellness practices in all areas of your life.
                        </section>
                        <NavLink to={routes.WELL}><button className="purple lotus-desktop-button">explore individual plans</button></NavLink>
                        <NavLink to={routes.WELL}><button className="purple lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                </LotusContainer>
                </>
            );
    };
};

const LotusContainer = styled.div`
    position: relative;
    overflow: hidden;

> div:first-of-type {
    background-color: var(--purple);
    width: 60vw;
    height: 60vw;
    border-radius: 100%;
    margin: -25vw 20vw;
    position: absolute;
}
> div > section {
    font-style: normal;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    width: 60vw;
    line-height: 3vw;
    position: absolute;
    z-index: 100;
    color: #FFF;
}
> div:last-of-type > section {
    &:first-of-type {
        font-size: 2.2vw;
        margin: 2vw 20vw;
    }
    &:last-of-type {
        font-size: 1vw;
        margin: 6vw 22vw;
        width: 56vw;
    }
}
> section {
    width: 43.5vw;
    display: inline-block;
    height: 75vw;
    position: relative;
    font-size: 2.4vw;

    &:first-of-type {
        background-color: transparent;
        text-align: right;
        padding: 0 2.5vw 0 4vw;
        > img {
            right: 0;
        }
        > div {
            text-align: right;
        }
        > section {
            color: #000;
        }
    }
    &:last-of-type {
        background-color: rgba(150, 91, 165, 0.6);
        text-align: left;
        padding: 0 4vw 0 2.5vw;
        > img {
            left: 0
        }
        > div {
            text-align: left;
        }
        > section {
            color: #FFF;
        }
    }
    > div {
        font-family: Merriweather;
        font-style: italic;
        font-weight: normal;
        font-size: 3vw;
        line-height: 3.2vw;
        margin-top: 40vw;
        margin-bottom: 2.2vw;
        color: #744A9E;
    }
    > section {
        font-size: 1.75vw !important;
        min-height: 15vw;
    }
}
img {
    position: absolute;
    z-index: 11;
    margin-top: 10vw;
    height: 30vw;
    width: 30vw;
}

button {
    margin-top: 4vw;
}

.lotus-desktop-button {
    display: inline-block;
}
.lotus-mobile-button {
    display: none;
}

@media screen and (max-width: 945px){
    > div > section {
        width: 80vw;
        line-height: 3vw;
    }
    > div:first-of-type {
        width: 80vw;
        height: 80vw;
        border-radius: 100%;
        margin: -30vw 10vw;
    }
    > div:last-of-type { 
        > section:first-of-type {
            font-size: 4vw;
            margin: 2vw 10vw;
        }
        > section:last-of-type {
            font-size: 1.4vw;
            margin: 6vw 12vw;
            width: 76vw;
        }
    }
    > section {
        height: 90vw;
        &:first-of-type {
            padding: 0 2.5vw 0 4vw;
        }
        &:last-of-type {
            padding: 0 4vw 0 2.5vw;
        }
        &:first-of-type > div, &:last-of-type > div {
            margin-top: 52vw;
        }
        > section {
            font-size: 2.2vw !important;
            min-height: 15vw;
        }
    }
    
    img {
        margin-top: 12vw;
        height: 40vw;
        width: auto;
    }
    
    button {
        margin-top: 4vw;
        font-size: 2.7vw;
        padding: 2vw 4vw;
    }
    .lotus-desktop-button {
        display: none;
    }
    .lotus-mobile-button {
        display: inline-block;
    }
}

`;