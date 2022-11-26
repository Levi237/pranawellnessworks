import React from 'react';
import styled from 'styled-components';

const ServiceDisplay = ({ services }) => {

    const showServices = services.map((service, key) => {
        const backgroundImageStyle = {
            'backgroundImage': `url(../service_image/${service.image})`
        }
        return(
            <ServiceBox key={key} className="service-box">
                <CardBox className={service.content ? "card-box card-hover" : "card-box"} style={backgroundImageStyle}>
                    <CardFront className="card-front">
                        <CardInfo className={service.content ? "card-front-data card-hover" : "card-front-data pop-hover"}>
                            <section>{service.smallText}</section>
                            <section>{service.largeText}</section>
                        </CardInfo>
                    </CardFront>
                
                </CardBox>
                <CardBack className="card-back">
                    <section>{service.content}</section>
                </CardBack>
            </ServiceBox>
        )
    });
    return(
        <ServicesContainer className="service-container">
            {showServices}
        </ServicesContainer>
    );
};

const ServicesContainer = styled.div`
    position: relative;
`;
const ServiceBox = styled.div`
    position: relative;
    height: 25vw;
    width: 25vw;
    display: inline-block;
    vertical-align: top;
    background-color: transparent;
    margin: 1.33vw;
    z-index: 1;
    transition: all .3s ease-in-out;
    @media screen and (max-width: 945px) {
        height: 80vw;
        width: 80vw;
        display: block;
        margin: -5vw 10vw !important;
    }
`;

const CardBox = styled.div`
    height: 25vw;
    max-width: 25vw;
    transition: all .5s ease-in-out;
    position: initial;
    transition-delay: .5s;
    background-size: cover;
    @media screen and (max-width: 945px) {
        height: 80vw;
        max-width: 80vw;
        margin: 15vw 0;
    }
`;

const CardFront = styled.div`
    img {
        height: 25vw;
        width: 25vw;
        position: relative;
        z-index: -1;
        transition: all .3s ease-in-out;
    }
`;

const CardInfo = styled.div`
    width: 19vw;
    height: 19vw;
    color: #FFF;
    border: 1px solid #FFF;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    margin: 3vw;
    transition: all .3s ease-in-out;
    transition-delay: .5s;
    section:first-of-type {
        font-size: 2vw;
        margin-top: 7vw;
    }
    section:last-of-type {
        font-family: 'Merriweather', sans-serif;
        font-style: italic;
        font-size: 3vw;

    }
    @media screen and (max-width: 945px) {
        width: 60vw;
        height: 60vw;
        margin: 10vw;
        section:first-of-type {
            font-size: 6vw;
            margin-top: 16vw;
        }
        section:last-of-type {
            font-size: 11vw;
        }
    }
`;


const CardBack = styled.div`
    margin-top: -20vw;
    margin-left: 2.5vw;
    margin-bottom: 2.5vw;
    position: relative;
    z-index: -1;
    color: var(--darkpurple);
    height: 20vw;
    width: 20vw;
    overflow: hidden;
    background-color: transparent;
    font-size: 1.8vw;
    transition: .3s ease;
    @media screen and (max-width: 945px) {
        height: 60vw;
        width: 60vw;
        margin-left: 10vw;
        margin-top: -70vw;
        font-size: 5vw;
    }
`;


export default ServiceDisplay;