import React from 'react';
import styled from 'styled-components';

import RightFooter          from './RightFooter';
import MidFooter            from './MidFooter';
import LeftFooter           from './LeftFooter';

const Footer = () => {
    return (
        <>
            <LeftFooterGrid className="grid-footer-left">
                <LeftFooter/>
            </LeftFooterGrid>
            <MidFooterGrid className="grid-footer-mid">
                <MidFooter/>
            </MidFooterGrid>
            <RightFooterGrid className="grid-footer-right">
                <RightFooter/>
            </RightFooterGrid>
        </>
    )
}
const FooterGrid = styled.div`
  background-color: var(--purple);
  padding-top: 2vw;
  position: relative;
`;

const LeftFooterGrid = styled(FooterGrid)`
  grid-area: footer-left;
  @media screen and (max-width: 945px) {
    text-align: center;
    div {
      margin-left: auto;
      margin-right: auto;
    }
`;

const MidFooterGrid = styled(FooterGrid)`
  grid-area: footer-mid;
  text-align: center;
  // section {
  //   margin: 3vw auto 1vw auto;
  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 1.2vw;
  //   letter-spacing: .3vw;
  //   text-transform: uppercase;
  //   color: var(--lightgreen);
  //   text-align: center;
  // }
  // @media screen and (max-width: 945px) {
  //   section {
  //     margin: 3vw auto 1vw auto;
  //     font-weight: bold;
  //     font-size: 2.8vw;
  //     letter-spacing: 3px;
  //   }
  //   input {
  //     width: 90vw;
  //     height: 10vw;
  //     font-size: 5vw;
  //   }
  // }
`;

const RightFooterGrid = styled(FooterGrid)`
  grid-area: footer-right;
`;

export default Footer;