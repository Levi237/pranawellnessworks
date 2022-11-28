import React, { useState } from 'react';
import styled from 'styled-components';

import EventCard from './EventCard';

const EventsCalendar = () => {
  const eventsArray = [{
    title: `Prenatal Yoga`,
    location: `virtual`,
    info: `Guided movement for support, empowerment, and education.`,
    price: `donation based`,
    when: `Every`,
    day: `monday`,
    time: 1700,
    img: `/events/prenatal.png`,
    link: `https://mailchi.mp/8c8ba20bd281/prenatal-mondays`,
  // },{
  //   title: `Postpartum Yoga`,
  //   location: `virtual`,
  //   info: `Build confidence, strengthen, and renew the body. `,
  //   price: `donation based`,
  //   when: `1st & 3rd `,
  //   day: `tuesday`,
  //   time: 1700,
  //   img: `/events/postpartum.png`,
  //   link: `https://mailchi.mp/fcd82697d0c7/postpartumtuesdays`,
  // },{
  //   title: `Yoga on the Harbor`,
  //   location: `in San Diego`,
  //   info: `Join us in person, for a fun community flow!`,
  //   price: `donation based`,
  //   when: `1st`,
  //   day: `wednesday`,
  //   time: 1800,
  //   img: `/events/harbor.png`,
  //   link: `https://yogaontheharbor.eventbrite.com`,
  },{
    title: `Yoga Flow`,
    location: `virtual`,
    info: `Join us from anywhere! All levels yoga flow.`,
    price: `donation based`,
    when: `Every`,
    day: `thursday`,
    time: 1700,
    img: `/events/flow.png`,
    link: `https://mailchi.mp/f44d1c9f43d6/yogflowthursdays`,
  },{
    title: `Wellness Workshop`,
    location: `virtual`,
    info: `45 minutes`,
    price: `donation based`,
    when: `Last`,
    day: `friday`,
    time: 1030,
    img: `/events/meditation.png`,
    link: `https://thenalaverse.com/stephanie-singleton`,
  }];
// const daysOfTheWeek = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`];
  const eventList = eventsArray.sort((a, b) => a.time - b.time);
  
  const mondayList = eventList.filter(item => item.day === 'monday');
  const tuesdayList = eventList.filter(item => item.day === 'tuesday');
  const wednesdayList = eventList.filter(item => item.day === 'wednesday');
  const thursdayList = eventList.filter(item => item.day === 'thursday');
  const fridayList = eventList.filter(item => item.day === 'friday');

  const [ monday ] = useState(mondayList);
  const [ tuesday ] = useState(tuesdayList);
  const [ wednesday ] = useState(wednesdayList);
  const [ thursday ] = useState(thursdayList);
  const [ friday ] = useState(fridayList);
  
    return(
        <CalendarWrapper>
          <section>
            <h1>monday</h1>
            <div className="hr"></div>
            <EventCard dayEvents={monday}/>
          </section>
          <section>
            <h1>tuesday</h1>
            <div className="hr"></div>
            <EventCard dayEvents={tuesday} />
          </section>
          <section>
            <h1>wednesday</h1>
            <div className="hr"></div>
            <EventCard dayEvents={wednesday} />
          </section>
          <section>
            <h1>thursday</h1>
            <div className="hr"></div>
            <EventCard dayEvents={thursday}/>
          </section>
          <section>
            <h1>friday</h1>
            <div className="hr"></div>
            <EventCard dayEvents={friday} />
          </section>
        </CalendarWrapper>
    );
};

const CalendarWrapper = styled.div`
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 'mon tue wed thur fri';
  a {
    text-decoration: none;
  }
  >section {
    &:first-of-type {
      grid-area: mon;
    }
    &:nth-of-type(2) {
      grid-area: tue;
    }
    &:nth-of-type(3) {
      grid-area: wed;
    }
    &:nth-of-type(4) {
      grid-area: thur;
    }
    &:nth-of-type(5) {
      grid-area: fri;
    }
  }
  h1 {
    font-size: 2.66vw;
    padding: .5vw 0 0;
    color: var(--purple)!important;
    margin-block-start: 30px;
    margin-block-end: 0;
  }
  h2 {
    font-family: var(--fancy-font);
    font-size: 2.5vw;
    letter-spacing: .05vw;
    font-weight: 500;
    padding: .5vw 2vw .25vw;
    color: var(--grey)!important;
  }
  h3 {
    font-size: 1.8vw;
    font-weight: 500;
    color: var(--grey)!important;
    text-transform: capitalize;
    > span {
      display: none;
    }
  }
  h4 {
    font-weight: 100;
    font-size: 1.67vw;
    color: var(--lightgrey)!important;
  }
  .hr {
    display: inline-block;
    width: 12vw;
    height: 1px;
    margin: 10px 0 5px;
    background-image: linear-gradient(90deg, transparent, var(--green), transparent);
  }

  @media screen and (max-width: 640px){ 
    margin-bottom: 40px; 
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas: 'mon' 'tue' 'wed' 'thur' 'fri';
  
    h1 {
      font-size: 6vw;
    }
    h2 {
      font-size: 5.5vw;
    }
    h3 {
      font-size: 4.4vw;
      > br {
        display: none;
      }
      > span {
        display: inline-block;
      }
    }
    h4 {
      font-size: 3.33vw;
    }
    .hr {
      width: 30vw;
      margin: 5px 0;
    }
  }
  @media screen and (min-width: 1200px){ 
    max-width: 1200px;
    margin: 0 auto;
  
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 30px;
      letter-spacing: 1px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 20px;
    }
    .hr {
      width: 150px;
    }
  }
`;

export default EventsCalendar;