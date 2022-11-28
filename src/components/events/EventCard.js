import React from 'react';


//==> CREATE A DAY CARD BY PASSGING INFO FROM DAY THEN MAPPING EVENTS OF THE DAY
const EventCard = ({dayEvents}) => {
    console.log(dayEvents, "<=>");
    const mondayList = dayEvents.map((event, k) => {
        console.log(dayEvents, "<=>", event);
      // convert military time number to standard string
      let time = event.time.toString();
      const minute = time.slice(2);
      let afternoon = false;
      
      time = time.slice(0,2) / 1;
      if ( time > 12 ) {
        time = time - 12;
        afternoon = true;
      }
      time = time.toString() + `:` + minute;
      
      return(<>
            <a className={event.day }key={k} href={event.link} target="_blank" rel="noopener noreferrer">    
              <h2>{event.title}</h2>
              <h4>[ {event.location} ]</h4>
              <h3>
                {event.when} {event.day}
                <br/><span>&nbsp;</span>
                @ {time}<small>{afternoon ? `PM` : `AM`} PCT</small>
              </h3>
            </a>
            </>);
    });
    return (<>
    {mondayList}
    </>)
}

export default EventCard;