import React, { Component } from 'react';
import styled from 'styled-components';

import EventsCalendar from './EventsCalendar';
export default class EventsMain extends Component {
    render(){
        const { eventsList } = this.props;

        const showEvents = eventsList.map((event, k) => {
          return(
            <EventWrapper>
              <section style={{backgroundImage: `url(${event.img})`}}>
              </section>
              <section key={k}>
                <div>
                  <a href={event.link} alt={event.title}>
                    <h1>{event.title}</h1>
                  </a>
                  <h4>[ {event.location} ]</h4>
                  <p>
                    {event.info}
                    <small>{event.note}</small>
                  </p>
                  <h4>{event.day} @ {event.time}</h4>
                  <a href={event.link} alt={event.title} target="_blank">
                    <span></span>
                    &emsp;Sign Up&emsp;
                    <span></span>
                  </a>
                </div>
              </section>
            </EventWrapper>
          );
        });
        return(
            <ListWrapper>
              <EventsCalendar eventsList={eventsList}/>
              <br/><br/><br/><br/>
              <h1>FIND WHAT WORKS FOR YOU</h1>
              {showEvents}
            </ListWrapper>
        );
    };
};

const ListWrapper = styled.div`
  width: 100vw;

  > h1 {
    margin-bottom: 40px;
  }
`;

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
    &:nth-of-type(even) {
      grid-template-areas: 'img text';
      a > span:first-of-type {
        &::after {
          content: "<";
        }
      }
    }
    &:nth-of-type(odd) {
      grid-template-areas: 'text img';
      a > span:last-of-type {
        &::after {
          content: ">";
        }
      }
    }

  a {
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid var(--green);
    }
    &:last-of-type {
      font-size: 3vw;
      color: var(--purple);
      &:hover {
        color: var(--green);
      }
    }
  }

  h1 {
    font-size: 4.2vw;
    letter-spacing: .2vw;
    padding: 0;
  }
  h4 {
    font-size: 2.33vw;
    font-weight: 100;
    padding: 0;
    margin: 1vw 0 0;
    &:first-of-type {
      color: var(--lightgrey);
    }
    &:last-of-type {
      color: var(--grey);
    }
  }

  p {
    font-size: 2.8vw;
    padding: 0;
    margin: 2vw 0; 
    color: var(--grey);
    > small {
      display: block;
      font-weight: 100;
      marign-top: 1vw;
      color: var(--lightgrey);
    }
  }

  a > span::after {
    -webkit-transform:scale(1.0, 2.5);
    -moz-transform:scale(1.0, 2.5);
    -ms-transform:scale(1.0, 2.5);
    -o-transform:scale(1.0, 2.5);
    transform:scale(1.0, 2.5);
    font-weight: 100;
    display: inline-block;
  }

  > section {
    width: 50vw;
    height: 50vw;
    &:first-of-type {
      grid-area: img;
      background-size: 100%;
      background-position: center;
      transition: background-size 5s;
    }
    &:last-of-type {
      grid-area: text;
      display: flex;
      justify-content: center;
      align-items: center;

      > div {
        padding: 0 10%;
      }
    }
  }
  &:hover {
    > section {
      &:first-of-type {
        grid-area: img;
        background-size: 110%;
        transition: background-size 25s;
      }
    }
  }
  @media screen and (max-width: 640px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      'img' 
      'text'!important;      
    > section {
      width: 100vw;
      height: 100vw;
    }
      
    a {
      &:last-of-type {
        font-size: 6vw;
      }
    }
    a > span {
      &:first-of-type {
        &::after {
          content: "<"!important;
        }
      }
      &:last-of-type {
        &::after {
          content: ">"!important;
        }
      }
    }

    h1 {
      font-size: 7.5vw;
    }
    h4 {
      font-size: 4vw;
    }
    p {
      font-size: 6vw;
      margin: 5vw 0;
    }
  }
  @media screen and (min-width: 1440px){
    max-width: 1440px;
    margin: 0 auto;

    > section {
      width: 720px;
      height: 720px;
    }

    a {
      &:last-of-type {
        font-size: 40px;
      }
    }

    h1 {
      font-size: 72px;
      letter-spacing: 3px;
    }
    h4 {
      font-size: 36px;
      margin: 14px 0 0;
    }

    p {
      font-size: 40px;
      margin: 30px 0; 
      > small {
        marign-top: 14px;
      }
    }
  }
`;