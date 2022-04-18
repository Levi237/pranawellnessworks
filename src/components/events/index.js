import React, { Component }         from 'react';
import styled         from 'styled-components';
// import { Helmet }     from 'react-helmet';

// import EventsCalendar from './EventsCalendar';
import EventsList     from './EventsList';

export default class EventsMain extends Component {
  render(){
    const { eventsList } = this.props;
    return(
      <ListWrapper>
        <div id="th-schedule"></div>
        <iframe id="embedPackages" title="Recess Embed Iframe" width="100%" src="https://Prana-Wellnessworks.on.recess.tv/embed/checkout/explore/packages?hideMenu=true&displayClass=list&displayClassVod=tag&displayClassIrl=list" allowfullscreen webkitallowfullscreen mozallowfullscreen style={{border: 'none'}} />
          <iframe id="embedSchedule" title="Recess Embed Iframe" width="100%" src="https://Prana-Wellnessworks.on.recess.tv/embed/checkout/explore?hideMenu=true&displayClass=list&displayClassVod=tag&displayClassIrl=list&class_type=LIVE" allowfullscreen webkitallowfullscreen mozallowfullscreen style={{ border: 'none' }}/>
          <iframe id="embedInPerson" title="Recess Embed Iframe" width="100%" src="https://Prana-Wellnessworks.on.recess.tv/embed/checkout/explore?hideMenu=true&displayClass=list&displayClassVod=tag&displayClassIrl=list&class_type=IRL" allowfullscreen webkitallowfullscreen mozallowfullscreen style={{ border: 'none' }}/>
          <iframe id="embedOnDemand" title="Recess Embed Iframe" width="100%" src="https://Prana-Wellnessworks.on.recess.tv/embed/checkout/explore?hideMenu=true&displayClass=list&displayClassVod=tag&displayClassIrl=list&class_type=VOD" allowfullscreen webkitallowfullscreen mozallowfullscreen style={{border: 'none'}} />

        <h1>FIND WHAT WORKS FOR YOU</h1>
        <EventsList eventsList={eventsList}/>
       </ListWrapper>
    );
  }
};

const ListWrapper = styled.div`
  width: 100vw;
  > h1 {
    margin: 40px auto;
  }
`;