import React from 'react';
import styled from 'styled-components';

const EventsCalendar = ({ eventsList }) => {

        const showDates = eventsList.map((event, k) => {
          return(
            <a href={event.link} key={k}>
              <h1>{event.day}</h1>
              <hr/>
              <h2>{event.title}</h2>
              <h4>[ {event.location} ]</h4>
              <h3>{event.when} {event.day}</h3>
              <h3>@ {event.time}</h3>
            </a>
          );
        });

    
        return(
            <CalendarWrapper>{showDates}</CalendarWrapper>
        );
    };

const CalendarWrapper = styled.div`
  margin-bottom: 80px;

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
    margin-block-start: 0;
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
  }
  h4 {
    font-weight: 100;
    font-size: 1.67vw;
    color: var(--lightgrey)!important;
  }
  hr {
    width: 18vw;
    border: 1px solid var(--green);
  }
`;

export default EventsCalendar;