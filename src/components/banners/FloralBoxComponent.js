import React from 'react';
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

const FloralBoxComponent = ({ passedInfo }) => {

    const skillsList = passedInfo.skills.map((skill, key) => {
        if (passedInfo.skills[0] !== "none"){
            return <span key={key}>{skill}</span>
        }
    });
    const servicesList =  passedInfo.services.map((service, key) => {
        if (passedInfo.services[0] !== "none"){
        return <li key={key}>{service}</li>
        }
    });
    
    return(
        <Container style={{ backgroundColor: `${passedInfo.backgroundColor}` }}>
            <div style={{ gridArea: `${passedInfo.boxOne}`, backgroundImage: "url('../../floral-background.png')" }}>
                <div id="floral-box" style={{ backgroundColor: `${passedInfo.backgroundColor}` }}>
                    <section>{passedInfo.title}</section>
                    <section style={{ color: `${passedInfo.subtitleColor}` }}>{passedInfo.subtitle}</section>
                    <section>{passedInfo.content}</section>
                    { passedInfo.route && 
                        <section>
                            <NavLink className={passedInfo.route} to={passedInfo.route}>
                                <button className={passedInfo.ctaColor}>
                                    {passedInfo.cta}
                                </button>
                            </NavLink> 
                        </section>
                    }
                    { (passedInfo.services[0] !== "none") && 
                        <>
                            <section className="test services">
                                {passedInfo.servicesTitle}
                                <ul>{ servicesList }</ul> 
                            </section>
                        </>
                    }
                    { (passedInfo.skills[0] !== "none") && <section className="test skills">{skillsList}</section> }
                </div>
            </div>
            <div style={{ gridArea: `${passedInfo.boxTwo}` }}>
                <img src={`${passedInfo.image}`} alt={passedInfo.title}/>
            </div>
        </Container>
    );
};

const Container = styled.div`
    white-space: pre-line;
    position: relative;
    height: 50vw;
    color: var(--purple);
    display: grid;
    grid-template-areas: 'left right';
    @media screen and (max-width: 945px) {
        display: block;
    }
    img {
        width: 50vw;
        height: 50vw;
    }
    span {
        display: block;
    }
    > div {
        width: 50vw;
        height: 50vw;

        &:first-of-type {
            background-blend-mode: screen;
            text-align: left;
        }

        > div {
            width: 32vw;
            height: 32vw;
            margin: 4vw;
            border: 1px solid var(--purple);
            padding: 3vw 5vw 7vw 5vw;
            text-align: left;
            position: relative;

            > section {
                font-style: normal;

                &:first-of-type {
                    font-family: Merriweather;
                    font-style: italic;
                    font-weight: 300;
                    font-size: 2.8vw;
                    line-height: 5vw;
                    letter-spacing: .33vw;
                    color: var(--purple);
                }
                &:nth-of-type(2) {
                    font-weight: bold;
                    font-size: 1.3vw;
                    line-height: 1.5vw;
                    letter-spacing: .3vw;
                    text-transform: uppercase;
                }
                &:nth-of-type(3) {
                    font-weight: 300;
                    font-size: 1.1vw;
                    line-height: 1.4vw;
                    color: var(--purple);
                    margin: 1vw 0;
                    min-height: 19vw;
                    max-height: 50vw;
                    overflow: auto;
                    background-color: transparent;
                    transition: all .3s ease-in-out;
                    transition-delay: .5s!important;
                }
                &:last-of-type {
                    font-weight: bold;
                    font-size: 1vw;
                    line-height: 1.4vw;
                    text-transform: uppercase;
                    position: absolute;
                    bottom: 4vw;
                }
            }
        }
    }
    
    ul {
        font-weight: bold;
        font-size: 1vw;
        line-height: 1.5vw;
        padding-inline-start: 2vw;
        text-transform: uppercase;
        color: var(--purple);
        transition: all .3s ease-in-out;

        > li:last-of-type {
            text-transform: lowercase!important;
            list-style-type: none;
        }
    }

    @media screen and (max-width: 945px) {
        height: 200vw;
        img {
            width: 100vw;
            height: 100vw;
        }
        span {
            display: inline-block; 
            padding: 1vw 0;
            font-size: 2.5vw;
            line-height: 1vw;
            &:nth-of-type(odd){

                padding-right: 2vw;
            }
        }

        > div {
            width: 100vw;
            height: 100vw;

            > div {
                width: 70vw;
                height: 70vw;
                margin: 10vw;
                padding: 5vw;
                display: inline-block;
                > section {
                    &:first-of-type {
                        font-size: 6vw;
                        letter-spacing: .33vw;
                    }
                    &:nth-of-type(2) {
                        font-size: 2.5vw;
                        line-height: 9vw;
                        letter-spacing: 0;
                    }
                    &:nth-of-type(3) {
                        font-size: 2.3vw;
                        line-height: 3vw;
                        margin: 0;
                    }
                    &:nth-of-type(4) {
                        font-size: 3.6vw;
                        line-height: 5vw;
                        margin-top: 3vw;
                    }
                    &:last-of-type {
                        bottom: 4vw;
                    }
                }
            }
        }
        ul {
            font-size: 2vw;
            line-height: 3.25vw;
        }
        a.about > button {
            margin-top: 18vw;
        }
    }
`;

export default FloralBoxComponent;