import React, { Component } from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';

import * as routes          from '../../constants/routes';

import LotusDisplay         from './LotusDisplay';

import FloralBox            from '../banners/FloralBoxComponent';
import LogoDisplay          from '../banners/LogoDisplay';
import ServiceDisplay       from '../services/ServiceDisplay';

import Reviews              from '../banners/Reviews';
import GalleryCarousel from '../banners/GalleryCarousel/GalleryCarousel';

export default class HomeMain extends Component {
    state = {
        points: [{ 
            smallText: `Mindful`,
            largeText: `Breathing`,
            image: `mindful_breathing.png`,
            content: `Breathing practices that can have immediate impact on mind and body health.`,
        },{
            smallText: `Invigorating`,
            largeText: `Yoga`,
            image: `invigorating_yoga.png`,
            content: `All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.`,
        },{
            smallText: `relaxing`,
            largeText: `Meditation`,
            image: `meditate.png`,
            content: `Accessible guided meditations to calm, bring focus, and de-stress.`,
        },{
            smallText: `Lunch +`,
            largeText: `Learn`,
            image: `lunch_and_learn.png`,
            content: `Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.`,
        }],
        clients: [{
            name: `bpr-logo-landscape-highres.png`,
            link: null,
        },{
            name: `centric-logo.png`,
            link: null,
        },{    
            name: `AAP logo.png`,
            link: null,
        },{
            name: `CSUSM logo .png`,
            link: null,
        },{
            name: `Global communities logo.png`,
            link: null,
        },{
            name: `tiger-connect-logo.png`,
            link: null,
        },{
            name: `Zip logo.png`,
            link: null,
        },{
            name: `DocuSign_logo.png`,
            link: null,
        },{
            name: `KAPOW.png`,
            link: null,
        },{
            name: `LA-South-Chamber.png`,
            link: null,
        },{
            name: `salisian-lee-logo.png`,
            link: null,
        },{
            name: `bpr-logo-landscape-highres.png`,
            link: null,
        },{
            name: `centric-logo.png`,
            link: null,
        },{    
            name: `cross-campus-high-res-logo-stacked.png`,
            link: null,
        },{
            name: `DocuSign_logo.png`,
            link: null,
        },{
            name: `KAPOW.png`,
            link: null,
        },{
            name: `LA-South-Chamber.png`,
            link: null,
        },{
            name: `salisian-lee-logo.png`,
            link: null,
        }],
        features: [{
            name: `idea-world-logo-long.png`,
            link: null,
        },{
            name: `voyage_la.png`,
            link: null,
            // link: 'https://shoutoutla.com/stephanie-erazo-motivator-in-chief-prana-wellness-ryt/'
        },{
            name: `essence.png`,
            link: null,
            // link: 'https://www.essence.com/lifestyle/travel/this-fitness-guru-takes-travelers-on-international-voyages-to-pull-them-out-of-their-comfort-zones/'
        // },{
        //     name: `airbnb.png`,
        //     link: 'https://www.airbnb.com/experiences/799124'   
        }],
        floralbox: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            skills: [" "],
            services: ["none"],
            content: 
                "Determined to learn from the source, I traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. India challenged me both mentally and physically, and the knowledge that I gained was far beyond yoga poses. It gave me a new perspective on wellness.",
            image: "home-meet.png",
            boxOne: "right",
            boxTwo: "left",
            backgroundColor: "#FFF",
            subtitleColor: "#A0CD4D",
            route: "about",
            cta: "Learn More",
            ctaColor: "#FFF",
        }
    };

    render(){
        const { points, clients, features, floralbox} = this.state;
        const { scrollToTop } = this.props;
        return(
            <HomeContainer>
                <Quote>
                    <Center>
                        “Prana is Sanskrit for breath, considered as a life-giving force.
                            <br/>
                        Prana is seen as a universal energy, which flows in currents in and around the body.”
                    </Center>
                </Quote>
                <Header className="home-main-header">WELLNESS SERVICES</Header>
                <ServiceDisplay services={points}/>
                <NavLink to={routes.SERV}><button className="white mobile-fill add-btn-space">browse services</button></NavLink>
            
                <h1>Our Clients</h1>
                <LogoDisplay logos={clients} clients={clients}/>  
                <GalleryCarousel />
                <br/><br/>       
                <LotusDisplay scrollToTop={scrollToTop}/>
                <FloralBox passedInfo={floralbox} /> 
                <LogoHeader>As featured In</LogoHeader>
                <LogoDisplay logos={features}/>
                <br/><br/><br/>
                <ReviewsHeader>
                    see why people love prana
                </ReviewsHeader>
                <Reviews/>
                <br/><br/><br/>
            </HomeContainer>
        );
    };
};

const ReviewsHeader = styled.h1`
`;

const LogoHeader = styled.h1`
background-color: var(--lightestpurple);
margin-bottom: 0;
padding 40px 2vw 2vw;
@media and (max-width: 945px){
    position: relative;
}
`;

const HomeContainer = styled.div`
    .add-btn-space {
        margin: 40px auto 100px;
    }
    .service-box {
        transform: scale(.75);
        margin: -1.33vw!important;
    }    
    @media screen and (max-width: 945px) {
        .add-btn-space {
            margin: 100px auto;
        }
        .service-box {
            transform: scale(1);
            margin: -5vw 10vw !important;
        } 
    }
`;
const Quote = styled.div`
    font-family: 'Merriweather', sans-serif;
    position: relative;
    margin: -6vw auto;
    width: 90vw;
    height: 12vw;
    background: var(--purple);
    color: #FFF;
    font-style: italic;
    font-size: 1.6vw;
    text-align: center;
    display: flex;
    @media (max-width: 945px){
        width: 80vw;
        bottom: 0;
        padding: 0 10vw;
        font-size: 4.8vw;
        height: 40vw;
        margin: -10vh auto 0;
    }
`;

const Header = styled.h1`
    margin: 128px auto 50px auto; 
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #965ba5;
    @media screen and (max-width: 945px) {
      margin: 60px auto 50px auto;
    }
`;
const Center = styled.span`
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;