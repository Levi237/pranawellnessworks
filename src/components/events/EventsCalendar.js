import React, { useState } from 'react';
import styled from 'styled-components';

const EventsCalendar = () => {
  const [ eventList ] = useState([{
    title: `Prenatal Yoga`,
    location: `virtual`,
    info: `Guided movement for support, empowerment, and education.`,
    price: `donation based`,
    day: `Monday`,
    when: `Every`,
    time: `5p PT`,
    img: `/events/prenatal.png`,
    link: `https://mailchi.mp/8c8ba20bd281/prenatal-mondays`,
  },{
  //   title: `Postpartum Yoga`,
  //   location: `virtual`,
  //   info: `Build confidence, strengthen, and renew the body. `,
  //   price: `donation based`,
  //   day: `Tuesday`,
  //   when: `1st & 3rd `,
  //   time: `5p PT`,
  //   img: `/events/postpartum.png`,
  //   link: `https://mailchi.mp/fcd82697d0c7/postpartumtuesdays`,
  // },{
  //   title: `Yoga on the Harbor`,
  //   location: `in San Diego`,
  //   info: `Join us in person, for a fun community flow!`,
  //   price: `donation based`,
  //   day: `Wednesday`,
  //   when: `1st`,
  //   time: `6p PT`,
  //   img: `/events/harbor.png`,
  //   link: `https://yogaontheharbor.eventbrite.com`,
  // },{
    title: `Yoga Flow`,
    location: `virtual`,
    info: `Join us from anywhere! All levels yoga flow.`,
    price: `donation based`,
    day: `Thursday`,
    when: `Every`,
    time: `5p PT`,
    img: `/events/flow.png`,
    link: `https://mailchi.mp/f44d1c9f43d6/yogflowthursdays`,
  },{
    title: `Wellness Workshop`,
    location: `virtual`,
    info: `45 minutes`,
    price: `donation based`,
    day: `Friday`,
    when: `Last`,
    time: `10:30a PT`,
    img: `/events/meditation.png`,
    link: `https://thenalaverse.com/stephanie-singleton`,
  }]);

        const showDates = eventList.map((event, k) => {
          return(
            <a key={k} href={event.link} target="_blank" rel="noopener noreferrer">
              <h1>{event.day}</h1>
              <div className="hr"></div>
              <h2>{event.title}</h2>
              <h4>[ {event.location} ]</h4>
              <h3>
                {event.when} {event.day}
                <br/><span>&nbsp;</span>
                @ {event.time}
              </h3>
            </a>
          );
        });

    
        return(
            <CalendarWrapper>{showDates}</CalendarWrapper>
        );
    };

const CalendarWrapper = styled.div`
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 'mon tue wed thur fri';

  > a {
    text-decoration: none;
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