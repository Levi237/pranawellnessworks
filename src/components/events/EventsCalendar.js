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
  hr {
    width: 18vw;
    border: 1px solid var(--green);
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
    hr {
    }
  }
  @media screen and (min-width: 1440px){ 
    max-width: 1440px;
    margin: 0 auto;
  
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 34px;
      letter-spacing: 1px;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 28px;
    }
    hr {
      width: 20px;
    }
  }
`;

export default EventsCalendar;