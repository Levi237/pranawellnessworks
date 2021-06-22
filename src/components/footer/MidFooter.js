import React from 'react';

import styled from 'styled-components';
import LeviEikoBrand from '../../levieiko'


 const MidFooter = () => {
    return(
    <>
        <TextBox>Have Questions?<br/>Stephanie@pranawellnessworks.com
        <div className="desktop-inline"><LeviEikoBrand/></div>
        </TextBox> 
    </>);
};

export default MidFooter;

const TextBox = styled.section`
    width: 100%;
    line-height: 160%;
    margin: 3vw auto 1vw auto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
    letter-spacing: .3vw;
    text-transform: uppercase;
    color: var(--lightgreen);
    text-align: center;
    @media screen and (max-width: 945px) {
        margin: 3vw auto 1vw auto;
        font-weight: bold;
        font-size: 2.8vw;
        letter-spacing: 3px;
        input {
            width: 90vw;
            height: 10vw;
            font-size: 5vw;
        }
    }
    > div > a {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;