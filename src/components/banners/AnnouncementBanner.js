import React from 'react';
import styled from 'styled-components';

const AnnouncementBanner = ({ toggleEmailSignup }) => {
    return(
        <AnnouncementWrapper>
            <button className="purple" value="freebie" onClick={(e) => {toggleEmailSignup(e)}}>Free Meditation Offer</button>
            <a href="https://www.instagram.com/pranawellnessworks/" target="_blank" rel="noopener noreferrer" alt="instagram @pranawellnessworks">
                <img src="../instagram-icon.png" alt="pranayama yoga breath work"/>
            </a>
        </AnnouncementWrapper>
    );
};

const AnnouncementWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 40px;
    background-color: var(--purple);

    text-align: center;
    color: #fff;


    button {
        position: relative;
        height: 30px;
        padding: 6px 12px!important;
        margin-top: 5px;

        font-size: 14px;
        line-height: 18px;

        &:hover {
            background-color: rgba(255,255,255,.5);
        }
    }
    img {
        height: 30px;
        width: 30px;
        position: absolute;
        right: 8px;
        top: 5px;
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