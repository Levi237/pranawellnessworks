import React, { Component } from 'react';
import styled from 'styled-components';

import NewPackageDisplay   from './NewPackageDisplay';
import PranaDifference      from './PranaDifference';

export default class CorporateMain extends Component {
  state = {
      deals: [{
        name: "Namaste",
        price: "300"
      },{
        name: "Karma",
        price: "250"
      },{
        name: "Guru",
        price: "200"
      },{
        name: "Samadhi",
        price: "100"
      }],
      duration: ["1","4","8","20"],
      totalMonthly: ["300", "1000", "1600", "2000"],
      details: [
        {
          product: "Mix and match classes",
          included: ["/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Hands-on guided classes",
          included: ["/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Monthly freebie", 
          included: ["checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Wellness events access", 
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "20% off Online Courses",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Monthly Lunch & Learn",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "In-office Coaching",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-purple.png"],
        },{
          product: "Team building day",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-purple.png"],
        } 
      ]
  };

  render(){
    const { details, duration, deals, totalMonthly } = this.state;

    return(
      <>
        <PranaDifference />
        <PackageTitle>Corporate Wellness Solutions</PackageTitle>
        <NewPackageDisplay deals={deals} details={details} totalMonthly={totalMonthly} duration={duration}/>
        <PurpleContainer>
          {this.props.children}
        </PurpleContainer>  
        <BenefitsDisplay src="../benefits.png" alt="benefits"/>
      </>
    );
  };
};
const PackageTitle = styled.h1`
  padding-top: 40px;
  position: relative;
`;
const BenefitsDisplay = styled.img`
  width: 100%;
`;
const PurpleContainer = styled.div`
  margin: -150px 0 0;
  height: 20vw;
  padding: 16vw 0 0;
  background-color: rgba(150,91,165,.6);
  @media screen and (max-width: 945px){
      margin: -40vw 0 0;
      height: 68vw;
      padding: 42vw 0 4vw;
  }
`;