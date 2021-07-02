import React from 'react';
import styled from 'styled-components';

 const HeaderComponent = ({textCopy}) => {
    return(<>
        <Container style={{ backgroundImage: `url(./header/${textCopy.image})` }}>
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
    z-index: 11;

    width: 80vw;
    height: 27vw;
    margin: 0 10vw;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    color: #fff;

    > div {
        z-index: 12;
        width: 80vw;
        height: 100%;

        text-align: center;

        > div {
            section {
                &:first-of-type {
                    padding-top: 8vw;

                    font-size: 3.5vw;
                    font-weight: light;
                    letter-spacing: .4vw;
                    text-align: center;
                    color: #fff !important;
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
        padding-top: 0;
        overflow: hidden;
        
        text-align: center;

        > div {
            > div {
                width: 100vw;

                section:first-of-type {
                    font-size: 5vw;
                }
                section:last-of-type {
                    font-size: 9vw;
                }
            }
        }
    }
`;





export default HeaderComponent;