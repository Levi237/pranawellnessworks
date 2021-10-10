import React          from 'react';
import styled         from 'styled-components';

import EventsCalendar from './EventsCalendar';
import EventsList     from './EventsList';

const EventsMain = ({ eventsList }) => {
  return(
    <ListWrapper>
      <EventsCalendar eventsList={eventsList}/>
      <h1>FIND WHAT WORKS FOR YOU</h1>
      <EventsList eventsList={eventsList}/>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100vw;
  > h1 {
    margin: 40px auto;
  }
`;

export default EventsMain;