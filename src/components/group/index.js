import React, { Component }   from 'react';
import styled           from 'styled-components';

import BulletPoints           from './BulletPoints';

export default class GroupMain extends Component {
  state = {
    info: [{
      id: '1',
      style: 'arrow',
      header: 'What you’ll gain from The Joy Journey',
      subtext: 'Use the tools of yoga to overcome anxiety',
      list: [
        'Increased understanding of your mental and physical body',
        'Learn simple wellness practices to naturally eliminate anxiety',
        'Cultivate sustainable healthy habits for a more balanced life',
        'Make lifestyle changes that promote longevity and decrease stress'
      ]
    },{
      id: '2',
      subheader: 'How would you feel if you could:',
      style: 'check',
      list: [
        'Feel like yourself again',
        'Regain control of your health',
        'Grow confidence and trust in yourself',
        'Be comfortable doing the things you used to do, or have always wanted to',
        'Feel at ease in your own body',
        'Focus on the present, and release fear and anxiety about the future',
        'Experience more joy'
      ]
    },{
      id: '3',
      style: 'circle',
      subheader: '8 Week Program Includes:',
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
        <LocalWrapper>
          <Section>
            <BulletPoints info={info} id="1"/>
            <a href="https://buy.stripe.com/7sI5l38wLagD05W7st">
              <button className="white">
                Break Free From Anxiety
              </button>
            </a> 
          </Section>

          <Section className="purple-bg">
            <BulletPoints info={info} id="2" columns="two-columns" container="rounded"/>
            <a href="https://buy.stripe.com/7sI5l38wLagD05W7st">
              <button className="white">
                I Want to Feel Joy! 
              </button>
            </a> 
          </Section>

          <Section>
            <Paragraph>
              <img src="/group_2.jpg" alt="I Want to Feel Joy!" align="left" />
              <section> 
                <p>
                  Namaste! I’m Stephanie. I’m a clinical Yoga Therapist and RYT-500 Yoga instructor. I began my JOY Journey in 2018 when I left my job as a CNN producer after experiencing months of anxiety, and having a panic attack at work. From that day, I decided I needed to move differently. I traveled to Rishikesh, India to study yoga, and gained so much more. I got certified in trauma, and went back to school for Yoga Therapy, to learn how the tools of yoga heal mental and physical ailments. 
                </p>
                <p>
                  I get it. I have been there, living with the weight of anxiety in my body, not knowing if the wheel will ever stop spinning. I know what it feels like to not be at home in your own body. I cannot wait to help you find your way back, and begin your JOY JOURNEY.
                </p>
              </section>
            </Paragraph>
          </Section>

          <Section>
            <BulletPoints info={info} id="3"/>
            <a href="https://buy.stripe.com/7sI5l38wLagD05W7st">
              <button className="white">
                Join Now!
              </button>
            </a> 
          </Section>
        </LocalWrapper>
      );
  };
};

const LocalWrapper = styled.div`
  margin: -5vw auto 40px;
`;

const Section = styled.section`
  margin: 0px auto;
  width: 80%;
  padding: 40px 10%;
  clear: left;
  &.purple-bg {
    background-color: var(--lightpurple);
    padding: 40px 10%;

    div {
      background-color: #fff;
    }
  }
`;
const Paragraph = styled.div`

margin: 40px auto;
> img  {
  width: 100%;
  padding-bottom: 5%;
}
@media only screen and (min-width: 750px){
  > img  {
    width: 40%;
    padding-right: 5%;
    padding-bottom: 0;
   }
}

 p {
  text-align: left;
 }
 p + p {
  margin-top: 16px;
 }
`;