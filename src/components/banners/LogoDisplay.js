import React from 'react';
import styled from 'styled-components';

window.onload = function() {
    const carouselId = document.getElementById("scroll-id");

    const carouselStart  = () => carouselId && carouselId.classList.add("carousel");
    const carouselTimerOff = () => carouselId && carouselId.classList.remove("carousel");
    const carouselTimerOn = () => carouselId && carouselId.classList.add("carousel");
    
    carouselId && setTimeout(carouselStart, 1000);
    carouselId && setInterval(carouselTimerOff, 50000);
    carouselId && setInterval(carouselTimerOn, 100000);
};


const CustomerDisplay = ({ logos, clients }) => {

    const logoList = logos.map((logo, key) => {
        return(
            <Logo key={key}>
            {logo.link 
            ?   <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <img className={(logos === clients) ? "" : "static-img"} src={`./customer-logo/${logo.name}`} alt="pranayama yoga breath work"/>
                </a>
            : <img className={(logos === clients) ? "" : "static-img"} src={`./customer-logo/${logo.name}`} alt="pranayama yoga breath work"/>
            }
            </Logo>
        );
    });

    return(
        <ScrollMenu id={(logos === clients) ? "scroll-id" : "static-id"} className="scrollmenu">
            <LogoList>{logoList}</LogoList>
        </ScrollMenu>
    );
};

const ScrollMenu = styled.div`
    background-color: var(--lightestpurple);
    overflow: auto;
    white-space: nowrap;
    transition: all .3s ease-in-out;
    &:hover {
        background-color: var(--lightpurple);
        transition: all 5s ease-in-out;
    }
    &#scroll-id img {
        height: 60px;
    }
    &#static-id img {
        margin-top: 10px;
        height: 40px;
    }
    @media screen and (max-width: 945px){
        &#static-id img {
            margin-top: 3%;
            height: 5vw;
        }
    }
  `;
const LogoList = styled.div`
    transition: all 80s ease-in-out;
`;

const Logo = styled.section`
    height: 60px;
    display: inline-block;
    vertical-align: top;
    padding: 14px;
    margin: 10px;
    position: relative;
`;

export default CustomerDisplay