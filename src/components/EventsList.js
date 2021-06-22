import React, { Component } from 'react';
import styled from 'styled-components';

export default class EventsList extends Component {
    state = {
        eventsList: [{
            title: "Virtual Prenatal Yoga",
            info: "Every Monday 5p PT- Virtual, donation based Prenatal Yoga",
            note: "(happening now)",
            link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
          },{
            title: "Virtual Postpartum Yoga",
            info: "Postpartum Yoga- every 1st & 3rd Tuesday virtual, donation based 5p PT",
            note: "(starting July 6th)",
            link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
          },{
            title: "Virtual Yoga Flow",
            info: "Thursdays Virtual Yoga Flow 5p PT- donation based",
            note: "(starting July 8th)",
            link: "https://mailchi.mp/f44d1c9f43d6/yogflowthursdays"
          },{
            title: "Meditation + Breathwork",
            info: "Fridays- Meditation + Breathwork with @thenalaverse -donation based",
            note: "(happening now)",
            link: "https://thenalaverse.com/get-lifted"
          },{
            title: "Yoga on the Harbor",
            info: "Yoga on the Harbor, every first Wednesday in San Diego",
            note: "(starting July 7th)",
            link: "https://yogaontheharbor.eventbrite.com"
          }]
    };
    render(){
        const { eventsList } = this.state;

        const showList = eventsList.map((event, k) => {
          return(
            <EventWrapper>
              <section>x</section>
              <section key={k}>
              <a href={event.link} alt={event.title}>{event.title}</a>
              <p>{event.info}</p>
              <p>{event.note}</p>
              <a href={event.link} alt={event.title}>
                  Sign Up&nbsp;
                  <span>→</span>
              </a>
              </section>
            </EventWrapper>
          );
        });
        return(
            <ListWrapper>{showList}</ListWrapper>
        );
    };
};

const EventWrapper = styled.div`

`;

const ListWrapper = styled.div`
  width: 100%;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    &:nth-of-type(even) {
      > section {
        &:first-of-type {
          grid-area: left;
          background-color: pink;
        }
        &:last-of-type {
          grid-area: right;
          background-color: blue;
        }
      }
    }
    &:nth-of-type(odd) {
      > section {
        &:first-of-type {
          grid-area: right;
          background-color: green;
        }
        &:last-of-type {
          grid-area: left;
          background-color: yellow;
        }
      }
    }
  }
`;