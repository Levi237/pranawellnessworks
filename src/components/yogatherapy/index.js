import React from 'react';
import styled from 'styled-components';

import WhyYogaTherapy  from './WhyYogaTherapy';
import TwoColumnFeature  from './TwoColumnFeature';

const YogaTherapyMain = () => {
    return(
      <>
        <WhyYogaTherapy />
        <TwoColumnFeature />
        <VideoBox src="https://player.vimeo.com/video/488789376"></VideoBox>
      </>);
};

const VideoBox = styled.embed`
    width: 80vw;
    height: 33vw;
    max-width: 1600px;
    max-height: 660px;
    margin: 100px auto 0;
    @media screen and (max-width: 945px) {
      width: 100vw;
      height: 60vw;
      margin: 5vw auto 0;
    }
`;

export default YogaTherapyMain;