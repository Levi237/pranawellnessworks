import React, { Component } from 'react';
import styled               from 'styled-components';

const mobileMax = "650px";

export default class TwoColumnFeature extends Component {
    state = {
        leftInfo: {
            title: 'COMMON ISSUES TREATED',
            list1: [
                'Chronic pain',
                'Arthritis',
                'Hips',
                'Knees',
                'Shoulder',
                'Lower back',
            ],
            list2: [
                'Depression',
                'Anxiety',
                'Obesity',
                'Hypertension',
                'Accident recovery',
                'Post-surgery rehab',
            ]
        },
        rightInfo: {
            title: 'CUSTOMIZED THERAPY',
            list1: [
                'Thorough physical evaluation',
                'Custom "yoga prescription"',
                'Complimentary consult',
                'Weekly sessions',
                'Virtual and in-person',
                'Specialist referral network:',
                '(chiropractic, MD, physical therapy)'          
            ],
        }
    };

    render(){
        const { leftInfo, rightInfo } = this.state

        const leftListOne = leftInfo.list1.map((data) => {
            return (<li>{data}</li>)
        })
        const leftListTwo = leftInfo.list2.map((data) => {
            return (<li>{data}</li>)
        })
        const rightListOne = rightInfo.list1.map((data) => {
            return (<li>{data}</li>)
        })

        return(
            <Container>
                <LeftColumn>
                    <div>
                    <img src="chakras.png" alt="Prana Yoga breath work"/>
                        <h1>
                            {leftInfo.title}
                        </h1>
                        <ul>
                            {leftListOne}
                        </ul>
                        <ul>
                            {leftListTwo}
                        </ul>
                    </div>
                </LeftColumn>
                <RightColumn>
                    <div>                        
                    <img src="guru.png" alt="Prana Yoga breath work"/>
                        <h1>
                            {rightInfo.title}
                        </h1>
                        <ul>
                            {rightListOne}
                        </ul>
                    </div>    
                </RightColumn>
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: #C09EC8;
`;
const Column = styled.div`
    display: inline-block;
    font-size: 0;
    width: 50%;
    vertical-align: top;
    div {
        position: relative;
        display: inline-block;
        font-size: 3vw;
        color: white;
        height: 25vw;
        width: 35vw;
        margin: 5vw 2.5vw;
        text-align: center;
        background-color: #fff;
        color: black;
    }
    img {
        position: absolute;
        margin: 4vw auto;
        width: 15vw;
        border-radius: 100%;
        border: 1vw solid #C09EC8;
        background-color: #C09EC8;
    }
    h1 {
        font-size: 1.8vw;
        color: var(--green);
        margin-block-end: 1vw!important;
    }
    ul {
        display: inline-block;
        font-size: 1.25vw;
        color: #965ba5;
        text-align: left;
        line-height: 2.25vw;
        margin-block-start: 1vw;
        margin-block-end: 1vw;
        padding-inline-start: 3vw;
    }
    @media screen and (max-width: ${mobileMax}) {
        display: block;
        position: relative;
        width: 100%;
        div {
            height: 70vh;
            width: 90vw;
            margin: 30vw 5vw 10vw!important;
        }
        img {
            width: 36vw;
            border: 2vw solid #C09EC8;
            margin: 0;
            top: -21vw;
            right: calc(25vw)!important;
            left: calc(25vw)!important;
        }
        h1 {
            font-size: 5.5vw;
            margin-top: 25vw;
            margin-bottom: 5vw!important;
        }
        ul {
            display: block;
            font-size: 4vw;
            line-height: 6vw;
        }
    }
`;
const LeftColumn = styled(Column)`
        div {
            margin-left: 12.5vw;
        }
        img {
            left: -10vw;
        }
        ul:first-of-type {
            margin-left: 5vw;
        }
        @media screen and (max-width: ${mobileMax}) {
            ul {
                margin-left: 20vw!important;
            }
        }
`;
const RightColumn = styled(Column)`
        div {
            margin-right: 12.5vw;
        }
        img {
            right: -10vw;
        }
        ul {
            margin-right: 5vw;
        }
        li:last-of-type {
            list-style-type: none;
            font-size: 1.025vw;
        }
        @media screen and (max-width: ${mobileMax}) {
            ul {
                margin-left: 14vw!important;
                line-height: 10vw;
            }
            li:last-of-type {
                font-size: 3.5vw;
            }
        }
`;