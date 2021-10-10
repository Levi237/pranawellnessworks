import React, { Component } from 'react';
import styled from 'styled-components';

import PackageDisplay       from '../corporate/PackageDisplay';
import ServiceDisplay       from '../services/ServiceDisplay';

export default class PersonalMain extends Component {
  state = {
    personalPlans: [{ 
        title: "Asana",
        price: "$80/hour",
        duration: "Private Yoga Instruction",
        details: ["Learn foundational poses", "Deepen your practice", "Find balance"],
        image: "asana.png",
    },{
        title: "Satya",
        price: "$80/hour",
        duration: "Meditation & Breathwork ",
        details: ["Discover mental & physical benefits", "Practice focus & concentration", "Learn techniques to de-stress"],
        image: "satya.png",
    },{
        title: "Ahimsa",
        price: "$150/hour",
        duration: "Yoga Therapy",
        details: ["Rehab an injury", "Increase flexibility", "Relieve pain & mental stress"],
        image: "ahimsa.png",
    }],
    services: [{ 
        smallText: "Achieve Work-LIfe",
        largeText: "Balance",
        image: "balance.png"
    },{
        smallText: "Reduce Stress + find",
        largeText: "Peace",
        image: "peace.png"
    },{
        smallText: "Increased Focus +",
        largeText: "Clarity",
        image: "clarity.png"
    }]
  };
  render(){

    const { personalPlans, services } = this.state;
    return(<>
      <div>
      <ServiceDisplay services={services}/>
      </div>
      <br/>      <br/>      <br/>
      <h1>subscribe to personal wellness</h1>
      <PackageDisplay pricePack={personalPlans}/>
    </>);
  };
};