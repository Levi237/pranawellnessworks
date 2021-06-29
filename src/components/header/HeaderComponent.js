import React from 'react';
import styled from 'styled-components';

 const HeaderComponent = ({textCopy}) => {
    return(<>
        <Container style={{ backgroundImage: `url(${textCopy.image})` }}>
            <div>
                <div>
                    <section>{textCopy.title}</section>
                    <section>{textCopy.subtitle}</section>
                </div>
            </div>
        </Container>
        {(textCopy.backgroundColor === "purple") && <>
            <PurpleBox className="wellness-header-purple"></PurpleBox>
        </>}
    </>);
};

const PurpleBox = styled.div`
    position: relative;
    z-index: 0;
    margin-top: -15vw;
    height: 30vw;
    background-color: #bf9ec8;
`;
const Container = styled.div`
    position: relative;
    color: #fff;
    width: 80vw;
    height: 27vw;
    margin: 0 10vw;
    z-index: 11;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    > div {
        z-index: 12;
        width: 80vw;
        height: 100%;
        text-align: center;
        // background-color: rgba(0,0,0,.3);
        > div {
            section {
                &:first-of-type {
                    text-align: center;
                    letter-spacing: .4vw;
                    color: #fff !important;
                    font-size: 3.5vw;
                    font-weight: light;
                    padding-top: 8vw;
                }
                &:last-of-type {
                    font-family: 'Merriweather', sans-serif;
                    font-style: italic;
                    font-size: 7vw;
                  
                    text-align: center;
                    letter-spacing: .3vw;
                    color: #FFF;
                }
            }
        }
    }
    @media screen and (max-width: 945px) {
        width: 100vw;
        margin: 0;
        height: 30vw;
        text-align: center;
        overflow: hidden;
        padding-top: 0;
        > div > div {
            width: 100vw;
            section:first-of-type {
                font-size: 5vw;
            }
            section:last-of-type {
                font-size: 9vw;
            }
        }
    }
`;





export default HeaderComponent;