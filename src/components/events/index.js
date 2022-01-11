import React, { Component }         from 'react';
import styled         from 'styled-components';
import { Helmet }     from 'react-helmet';

// import EventsCalendar from './EventsCalendar';
import EventsList     from './EventsList';

export default class EventsMain extends Component {
  render(){
    const { eventsList } = this.props;
    return(
      <ListWrapper>
        <Helmet>
          <script charset="utf-8" src="https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0"></script>
        </Helmet>
        <div id="th-schedule"></div>
        <Helmet>
          <script>{`
              embedPage("https://www.thetalenthack.com/me/pranawellness/schedule", {elmId: "th-schedule"})
          `}</script>
        </Helmet>

        {/* <EventsCalendar eventsList={eventsList}/> */}
        <h1>FIND WHAT WORKS FOR YOU</h1>
        <EventsList eventsList={eventsList}/>
                {/* <Helmet>
          <script charset="utf-8" src="https://www.thetalenthack.com/assets/embed_script_asset.js?v=1.1.0"></script>
        </Helmet>
        <div id="on-demand-library"></div>
        <Helmet>
          <script>{`{embedPage("https://www.thetalenthack.com/me/pranawellness/embed_on_demand", {elmId: "on-demand-library"})}`}</script>
        </Helmet> */}
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