import React, { Component }   from 'react';

import BulletPoints           from './BulletPoints';

export default class GroupMain extends Component {
  state = {
    info: [{
      id: '1',
      style: 'none',
      list: [
        'Increased understanding of your mental and physical body',
        'Learn simple wellness practices to naturally eliminate anxiety',
        'Cultivate sustainable healthy habits for a more balanced life',
        'Make lifestyle changes that promote longevity and decrease stress'
      ]
    },{
      id: '2',
      style: 'none',
      list: [
        'Feel like yourself again',
        'Regain control of your health',
        'Grow confidence and trust in yourself',
        'Feel at ease in your own body',
        'Be comfortable doing the things you used to do, or have always wanted to',
        'Focus on the present, and release fear and anxiety about the future',
        'Experience more joy'
      ]
    },{
      id: '3',
      style: 'none',
      list: [
        'Weekly LIVE 1hr group coaching sessions',
        'Weekly accountability work to help you create sustainable habits',
        'Breathing, meditation, & movement practices to address anxiety in the moment',
        'Lessons on nourishing your body',
        'Lessons on protecting your energy',
        'Lessons on physical pain and trauma',
        'Option to add 1:1 VIP coaching at discounted rate',
      ]
    }]
  };
  render(){
    const { info } = this.state;
    return(
        <BulletPoints info={info} id="1"/>
      );
  }
};
