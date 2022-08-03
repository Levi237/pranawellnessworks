import React, { Component }            from 'react';
import styled           from 'styled-components';

import TeamMembers      from './TeamMembers';
import FloralBox        from '../banners/FloralBoxComponent';

export default class AboutMain extends Component {
  state = {
    aboutStephanie: { 
        title: "Stephanie Singleton",
        subtitle: "Meet the Founder",
        content: "After spending 7 years as a CNN producer, Stephanie traveled to Rishikesh, India to study traditional  practices of yoga, and now educates all of her clients from that unique, traditional perspective. Her business, Prana Wellness, was born in India in 2018, from Stephanie’s own need for wellness tools in a stressful world. Stephanie is an RYT 500hr yoga instructor and Clinical Yoga Therapist Rx. She studied Yoga Therapy under the renowned Dr. Larry Payne, at Loyola Marymount University, and is certified in trauma-conscious and perinatal yoga. She teaches specialized yoga to Active Duty military and Veterans. As a speaker, Stephanie has been called upon as an expert to speak at IDEA World Fitness Convention, and to organizations like Zip Recruiter, UCSD, USC, and IdeaFIT. She has been featured in Essence, and on BNC News!",
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