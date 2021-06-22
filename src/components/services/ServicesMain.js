import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ServiceDisplay from './ServiceDisplay';

import * as routes from '../../constants/routes';

export default class ServicesMain extends Component {
    state = {
        services: [{ 
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png",
            content: "All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.",
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "meditate.png",
            content: "Accessible guided meditations to calm, bring focus, and de-stress.",
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "mindful_breathing.png",
            content: "Breathing practices that can have immediate impact on mind and body health.",
        }],
        otherServices: [{ 
            smallText: "Bootcamp",
            largeText: "Fitness",
            image: "bootcamp_fitness.png",
            content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png",
            content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
        },{
            smallText: "Corporate",
            largeText: "Massage",
            image: "corporate_massage.png",
            content: "Relaxing intuitive massage break from static postures.",
        },{
            smallText: "Work",
            largeText: "Play",
            image: "work_play.png",
            content: "Take time to play at work! Fun games that focus on leadership and team building.",
        },{
            smallText: "Wellness",
            largeText: "Retreats",
            image: "wellness_retreats.png",
            content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
        },{
            smallText: "Health",
            largeText: "Fairs",
            image: "health_fairs.png",
            content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
        }]
      };

    render(){
        const { toggleEmailSignup } = this.props;

        return(<>
            <Container>
                <ServiceDisplay services={this.state.services}/>
                <ButtonContainer className="optionBtn">
                    <NavLink to={routes.CORP}><button className="purple">Corporate Solutions</button></NavLink>
                    <NavLink to={routes.WELL}><button className="purple">Individual Solutions</button></NavLink>
                </ButtonContainer>
            </Container>
            <Header className="services-main-header">WELLNESS SERVICES</Header>
            <button className="white" name="contactForm" value="contactRequest" onClick={(e) => {toggleEmailSignup(e)}}>Bring Prana to You</button>
            <br/><br/><br/><br/>
                <ServiceDisplay services={this.state.otherServices}/>
                <ButtonContainer>
            <button className="white" name="contactForm" value="contactRequest" onClick={(e) => {toggleEmailSignup(e)}}>Request Quote</button>
            </ButtonContainer>
        </>);
    };
};
const Container = styled.div`
    margin-bottom: 5vw;
    margin-top: calc(25.86vw - 100vh + 196px);
    position: relative;
    z-index: 1;
    padding-top: 4vw;
    padding-bottom: 8vw;
    background: rgb(191, 158, 200);
    button {
    margin-left: 2vw;
    margin-right: 2vw;
    > section {
        color: #FFF;
        position: relative;
        z-index: 1;
      }
    }
    @media screen and (max-width: 945px) {
        margin-top: calc(32.3vw - 100vh + 58px);
        padding-top: 5vw;
        font-size: 8vw;
    }
`;
const Header = styled.h1`
    margin: 50px auto; 
`;

const ButtonContainer = styled.div`
    margin-top: 5vw;

    @media screen and (max-width: 945px) {
        margin-top: 15vw;

        button {
            margin: 2.5vw;
            width: 80vw;
            height: 68px;
            font-size: 4.125vw;
        }
    }
`;