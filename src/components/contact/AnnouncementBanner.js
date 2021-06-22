import React from 'react';
import styled from 'styled-components';

const AnnouncementBanner = ({ toggleEmailSignup }) => {
    return(
        <Contact>
            <span>Experience Virtual Wellness Packages{"  "}</span><button className="purple" value="freebie" onClick={(e) => {toggleEmailSignup(e)}}>Free Meditation Offer</button>
            <a href="https://www.instagram.com/pranawellnessworks/" target="_blank" rel="noopener noreferrer" alt="instagram @pranawellnessworks">
                <img src="../instagram-icon.png" alt="IG"/>
            </a>
        </Contact>
    );
};

const Contact = styled.div`
    position: relative;
    width: 100vw;
    text-align: center;
    color: white;
    span {
        display: none;
    }
    button {
        height: 30px;
        font-size: 14px;
        line-height: 18px;
        padding: 6px 12px!important;
        margin-top: 8px;
        position: relative;
        z-index: 90;

        &:hover {
            background-color: rgba(255,255,255,.5);
        }
    }
    img {
        height: 30px;
        width: 30px;
        position: absolute;
        z-index: 10;
        right: 8px;
        top: 8px;
    }
    @media screen and (max-width: 945px){
        button {
            margin-top: 5px;
        }
        img {
            right: 5px;
            top: 5px;
        }
    }
`;

export default AnnouncementBanner;