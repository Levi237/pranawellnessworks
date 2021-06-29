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
                    <span>{i}</span>
                </div>
            );
        });

        return (
            <Container>
                <h1>GROWING YOUR BUSINESS</h1>
                <h3>Coaching Your Leadership Team to Greatness</h3>
                <section></section>
                <br/><br/>
                {list}
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
    border: 0 solid black;
    padding: 0 0 40px 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 2px 70px rgba(0,0,0,.1);
    > h1 {
        width: 100%;
        padding: 40px 0 5px;
        font-weight: 300;
        color: ${ArrowColor};
        background-color: ${ArrowBackgroundColor};
    }
    > h3 {
        width: 100%;
        margin: 0 auto;
        font-family: Merriweather;
        font-size: 23px;
        font-weight: 100;
        color: ${ArrowColor};
        padding-bottom: 10px;
        background-color: ${ArrowBackgroundColor};
    }
    > section {
        border-bottom: none;
        border-top: 50px solid ${ArrowBackgroundColor};
        border-left: 45vw solid transparent;
        border-right: 45vw solid transparent;
    }
    > div {
        font-size: 18px;
        width: 30vw;
        margin: 0 auto;
        text-align: left;
        padding: 10px;
        display: inline-block;
        img {
            width: 20px;
            padding-right: 10px;
        }
    }
    @media screen and (max-width: 800px) {
        width: 90vw;
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
            border-top: 10vw solid ${ArrowBackgroundColor};
            border-left: 45vw solid transparent;
            border-right: 45vw solid transparent;
        }
        > div {
            width: 220px;
            img {
            }
        }
    }    
`;