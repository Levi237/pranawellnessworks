import React, { Component }            from 'react';
import styled           from 'styled-components';

import TeamMembers      from './TeamMembers';
import FloralBox        from '../banners/FloralBoxComponent';

export default class AboutMain extends Component {
  state = {
    aboutStephanie: { 
        title: "Stephanie Singleton",
        subtitle: "Meet the Founder",
        content: "After spending 7 years as a CNN producer, Stephanie decided to leave the newsroom chaos for a life of wellness. She traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. In India, Stephanie focused on the study of traditional root practices of yoga, and she now educates all of her clients from that unique perspective. Her business, Prana Wellness, was born in India. Stephanie is an RYT 500hr yoga instructor, Yoga Therapist Rx, and is certified in perinatal yoga and trauma conscious yoga. She studied Yoga Therapy at Loyola Marymount University, and is a member of the Philanthropic Leadership Board for EatREAL, a non-profit working to increase kids’ access to real food and education. As a speaker and wellness educator, Stephanie has been called upon as an expert to speak to organizations like Zip Recruiter, UCSD, USC, IDEA World, and Georgia Department of Public Health. She has been featured in Essence, and on BNC News!",
        image: "about-meet.png",
        skills: [
            `RYT-500`,
            `Yoga Therapist, YTRx `,
            `Prenatal and Postpartum Yoga Certified`,
            `Trauma Conscious Certified`
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
    return(
      <>
        <VideoBox src="https://player.vimeo.com/video/387594093"></VideoBox>
        <FloralBox passedInfo={this.state.aboutStephanie} /> 
        <TeamMembers />
      </>);
}
};
const VideoBox = styled.embed`
    width: 80vw;
    height: 33vw;
    max-width: 800px;
    max-height: 330px;
    margin: 0 auto 40px;
    @media screen and (max-width: 945px) {
      width: 100vw;
      height: 60vw;
    }
`;