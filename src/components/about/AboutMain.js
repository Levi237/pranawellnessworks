import React            from 'react';
import styled           from 'styled-components';

import AboutStephanie   from './AboutStephanie';
import TeamMembers      from './TeamMembers';

const AboutMain = () => {
    return(
      <>
        <VideoBox src="https://player.vimeo.com/video/387594093"></VideoBox>
        <AboutStephanie />
        <TeamMembers />
      </>);
};
const VideoBox = styled.embed`
    width: 80vw;
    height: 33vw;
    max-width: 800px;
    max-height: 330px;
    margin: 0 auto 40px;
    @media screen and (max-width: 945px) {
      width: 100vw;
      height: 60vw;
    }
`;

export default AboutMain;