import React, { Component } from 'react';
import FloralBoxComponent   from '../FloralBoxComponent';

export default class AboutStephanie extends Component {
    state = {
        aboutStephanie: { 
            title: "Stepahnie Erazo",
            subtitle: "Meet the Founder",
            content: `After spending 7 years as a CNN producer and experiencing a scary panic attack, I decided to leave the fast pace of the newsroom for a life of wellness, and follow my passion for health and fitness. Prana Wellness was born in India, out of my own need for wellness in a challenging work environment. I am also passionate about food and health equity. \n I have been called upon to speak as a wellness expert for: Wonder Women Tech conference, GA Department of Public Health, Myridian Global, Youth Entrepreneurs, Mastermind Yoga Summit and more. I believe that a person’s physical and mental wellbeing can dictate their entire life, so I motivate people to prioritize all around wellness, by being their "Motivator in Chief."`,
            // content: `After spending 7 years as a CNN producer and experiencing a scary panic attack, Stephanie decided to leave the fast pace of the newsroom for a life of wellness, and follow her passion for health and fitness. Prana Wellness was born in India, out of Stephanie’s own need for wellness in a challenging work environment. She is also passionate about food and health equity. Stephanie is a member of the Philanthropic Leadership Board for EatREAL, a non-profit working to increase kids’ access to real food and education, as well as the Board of Directors for WIFA (Women in Fitness Association). Stephanie has been called upon as a wellness expert to be a speaker for: Wonder Women Tech conference, GA Department of Public Health, Myridian Global, Youth Entrepreneurs, Mastermind Yoga Summit and more. Her features include Essence Magazine, Voyage LA, ShoutoutLA, and various podcasts. Stephanie believes that a person’s physical and mental wellbeing can dictate their entire life, so she motivates people to prioritize all around wellness, by being their "Motivator in Chief."`,
            image: "about-meet.png",
            skills: [
                'Yoga Therapy RX',
                'Bootcamp Instructor',
                'RYT 300, Meditation + Breathwork',
                'Prenatal & Postpartum Yoga Certified',
            ],
            services: ["none"],
            boxOne: "left",
            boxTwo: "right",
            backgroundColor: "#E0CEE5",
            subtitleColor: "white",
            route: false,
            cta: "",
            ctaColor: "",
        }
    };

    render(){
        return( <FloralBoxComponent passedInfo={this.state.aboutStephanie} /> );
    };
};