import React, { Component } from 'react';
import styled from 'styled-components';

export default class EventsList extends Component {
    state = {
        eventsList: [{
            title: "Prenatal Yoga",
            location: "virtual",
            info: "Guided movement for support, empowerment, and education.",
            price: "donation based",
            when: "Every Monday @ 5p PT",
            note: "(happening now)",
            img: "./events/prenatal.png",
            link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
          },{
            title: "Postpartum Yoga",
            location: "virtual",
            info: "Build confidence, strengthen, and renew the body. ",
            price: "donation based",
            when: "Every 1st & 3rd Tuesday @ 5p PT",
            note: "(starting July 6th)",
            img: "./events/postpartum.png",
            link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
          },{
            title: "Yoga Flow",
            location: "virtual",
            info: "Join us from anywhere! All levels yoga flow.",
            price: "donation based",
            when: "Every Thursday @ 5p PT",
            note: "(starting July 8th)",
            img: "./events/flow.png",
            link: "https://mailchi.mp/f44d1c9f43d6/yogflowthursdays"
          },{
            title: "Meditation + Breathwork",
            location: "virtual",
            info: "with @thenalaverse",
            price: "donation based",
            when: "Every Friday @ 10p PT",
            note: "(happening now)",
            img: "./events/meditation.png",
            link: "https://thenalaverse.com/get-lifted"
          },{
            title: "Yoga on the Harbor",
            location: "in San Diego",
            info: "Join us in person, for a fun community flow!",
            price: "donation based",
            when: "Every first Wednesday @ 6p PT",
            note: "(starting July 7th)",
            img: "./events/harbor.png",
            link: "https://yogaontheharbor.eventbrite.com"
          }]
    };
    render(){
        const { eventsList } = this.state;

        const showList = eventsList.map((event, k) => {
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
              <h1>EVENTS SCHEDULE</h1>
            {showList}
            </ListWrapper>
        );
    };
};

const EventWrapper = styled.div`
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
    color: var(--grey);
    padding: 0;
    margin: 1vw 0 0;
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
    a {
      &:last-of-type {
        font-size: 6vw;
      }
    }
  }
`;

const ListWrapper = styled.div`
  width: 100vw;

  > h1 {
    margin-bottom: 40px;
  }
  
  > div {
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

    > section {
      width: 50vw;
      height: 50vw;
    }
  }
  @media screen and (max-width: 640px){
    > div {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 
        'img' 
        'text'!important;
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
      > section {
        width: 100vw;
        height: 100vw;
      }
    }
  }
`;