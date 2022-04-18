import React, { Component } from 'react';
import styled from 'styled-components';

export default class Coaching extends Component {
    state = {
        coachingList: [
            "The Art of Pitching",
            "Sell like a closer ",
            "Targeted networking",
            "Pricing optimization",
            "Prove client ROI",
            "Motivate your team ",
            "Identify ideal clients ",
            "Resolve challenges"
        ]
    };

    render(){
        const { coachingList } = this.state;
        
        const list = coachingList.map((i, k) => {
            return (
                <div key={k}>
                    <img src="../checkmark/check-green.png" alt="pranayama yoga breath work"/>
                    <span>&emsp;{i}</span>
                </div>
            );
        });

        return (
            <Container>
                <h1>GROWING YOUR BUSINESS</h1>
                <h3>Coaching Your Leadership Team to Greatness</h3>
                <section></section>
                <section>
                    <div>
                        {list}
                    </div>
                    <div><div></div></div>
                </section>
            </Container>
        );
    };
};

const ArrowBackgroundColor = "rgba(150, 91, 165, 1)"
const ArrowColor = "#fff"
const Container = styled.div`
    width: 90vw;
    margin: 100px auto;
    text-align: center;
    border: 0 solid transparent;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 2px 70px rgba(0,0,0,.1);
    > h1 {
        width: 100%;
        font-size: 4vw;
        padding: 40px 0 5px;
        font-weight: 300;
        color: ${ArrowColor};
        background-color: ${ArrowBackgroundColor};
    }
    > h3 {
        width: 100%;
        margin: 0 auto;
        font-family: Merriweather;
        font-size: 2.6vw;
        font-weight: 100;
        color: ${ArrowColor};
        padding-bottom: 10px;
        background-color: ${ArrowBackgroundColor};
    }
    > section {
        &:first-of-type {
            border-bottom: none;
            border-top: 50px solid ${ArrowBackgroundColor};
            border-left: 45vw solid transparent;
            border-right: 45vw solid transparent;
            margin-bottom: -50px;
            z-index: 999;
            position: relative;
        }
        &:last-of-type {
            display: grid;
            grid-template-areas: 'list image';
            grid-template-columns: 1fr 1fr;
            > div {

                &:first-of-type {
                    grid-area: list;
                    > div > span {
                        font-size: 2.4vw;
                    }
                    margin: 0 auto;
                    text-align: left;
                    padding: 7vw 0 5vw;
                    > div {
                        padding: 1vw;
                    }
                    img {
                        width: 2.4vw;
                        padding-right: 10px;
                    }
                }
                &:last-of-type {
                    grid-area: image;
                    background-image: url(bamboo.jpg);
                    background-size: cover;
                }
            }
        }
    }
    
    @media screen and (max-width: 800px) {
        width: 90vw;
        padding: 0 0 0 0;
        > h1 {
            width: 100%;
            padding: 8vw 0 2vw;
            font-size: 7vw;
        }
        > h3 {
            width: 80%;
            margin: 0 auto;
            font-size: 5vw;
            padding: 0 10%;
        }
        > section {
            &:first-of-type {
                border-top: 10vw solid ${ArrowBackgroundColor};
                border-left: 45vw solid transparent;
                border-right: 45vw solid transparent;
            }
            &:last-of-type {
                grid-template-areas: 'list' 'image';
                grid-template-columns: 1fr;
                grid-template-rows: auto 80vw;
                > div {
                    width: 100%;
                    &:first-of-type {
                        padding: 15vw 0 9vw;
                        > div {
                            width: 65vw;
                            margin: 0 auto;
                            > span {
                                font-size: 5vw;
                            }
                        }
                        img {
                            width: 5vw;
                        }
                    }
                    &:last-of-type {
                        border-bottom-right-radius: 15px;
                        border-bottom-left-radius: 15px;
                        > div {
                            border-top: none;
                            border-bottom: 50px solid transparent;
                            border-left: 45vw solid white;
                            border-right: 45vw solid white;
                            height: 0px;
                        }
                    }
                }
            }
        }
    }    
`;