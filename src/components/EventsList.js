import React, { Component } from 'react';
import styled from 'styled-components';

export default class EventsList extends Component {
    state = {
        eventsList: [{
            title: "Prenatal Yoga",
            location: "virtual",
            info: "add more description here",
            price: "donation based",
            when: "Every Monday 5p PT",
            note: "(happening now)",
            img: "./events/prenatal.png",
            link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
          },{
            title: "Postpartum Yoga",
            location: "virtual",
            info: "add more description here",
            price: "donation based",
            when: "every 1st & 3rd Tuesday @5p PT",
            note: "(starting July 6th)",
            img: "./events/postpartum.png",
            link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
          },{
            title: "Yoga Flow",
            location: "virtual",
            info: "add more description here",
            price: "donation based",
            when: "Thursdays @ 5p PT",
            note: "(starting July 8th)",
            img: "./events/flow.png",
            link: "https://mailchi.mp/f44d1c9f43d6/yogflowthursdays"
          },{
            title: "Meditation + Breathwork",
            location: "virtual",
            info: "with @thenalaverse",
            price: "donation based",
            when: "Fridays",
            note: "(happening now)",
            img: "./events/meditation.png",
            link: "https://thenalaverse.com/get-lifted"
          },{
            title: "Yoga on the Harbor",
            location: "in San Diego",
            info: "add more description here",
            price: "donation based",
            when: "every first Wednesday",
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
              <section><img src={event.img} alt={event.title}/></section>
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
                    &nbsp;Sign Up&nbsp;
                    <span></span>
                  </a>
                </div>
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
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid grey;
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
  }
  p {
   font-size: 2.8vw;
   padding: 0;
   margin: 2vw 0; 
   color: var(--grey);
   > small {
     display: block;
     font-weight: 100;
   }
  }

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

    &:first-of-type {
      grid-area: img;
      > img {
        width: 100%;
      }
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
`;

const ListWrapper = styled.div`
  width: 100vw;
`;