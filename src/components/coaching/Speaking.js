import React, { Component } from 'react';
import styled from 'styled-components';

export default class Speaking extends Component {
    state = {
        features: [{
            title: "Wellness for the Working Mind",
            description: "A toolbox for those seeking balance and calm at work",
            image: "coaching_wellness.jpg"
        },{
            title: "Motivation for Youth Entrepreneurs",
            description: "For eager and determined young minds",
            image: "coaching_class.jpg"
        },{
            title: "Wellness Business for Working Yogis",
            description: "For yoga instructors thinking beyond the local gym",
            image: "coaching_expand.jpg"
        },{
            title: "Scrappy Entrepreneurship",
            description: "For ANYONE with a dream, ready to take the leap",
            image: "coaching_marketing.jpg"
        }]
    };

    render(){
        const { features } = this.state;
        
        const featureList = features.map((feature, key) => {
            return (
                <div key={key} style={{ backgroundImage: `url(../features/${feature.image})` }}>
                    <div>
                        <div>
                            <div>
                            <section>{feature.title}</section>
                            <section>{feature.description}</section>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <FeatureContainer>
                {featureList}
            </FeatureContainer>
        );
    };
};

const FeatureContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    color: #fff;  
    > div {
        transition: all .3s ease-in-out;
        transition-delay: .5s!important;  
        &:hover > div > div > div > section:first-of-type {
            color: rgba(150,198,68,1);
            transition: all .8s ease-in-out;
        }
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        display: inline-block;
        width: 560px;
        height: 560px;
        margin: 20px;
        font-size: 0;
        > div {
            width: 560px;
            height: 560px;
            background-color: rgba(0,0,0,.5);
            position: relative;
            > div {
                position: absolute;
                top: 10%;
                left: 10%;
                width: 80%;
                height: 80%;
                border: 2px solid #fff;
                display: table;
                text-align: center;
                > div {
                    display: table-cell;
                    vertical-align: middle;
                    > section {
                        padding: 25px;
                        &:first-of-type {
                            font-size: 42px;
                            font-family: Merriweather;
                        }
                        &:last-of-type {
                            font-size: 32px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        width: 100vw;
        > div {
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            display: inline-block;
            width: 45vw;
            height: 45vw;
            margin: 2.5vw;
            font-size: 0;
            > div {
                width: 100%;
                height: 100%;
                > div {
                    > div {
                        > section {
                            padding: 2.5%;
                            &:first-of-type {
                                font-size: 4vw;
                            }
                            &:last-of-type {
                                font-size: 3vw;
                            }
                        }
                    }
                }
            }
    }
    @media screen and (max-width: 945px) {
        width: 100vw;
        > div {
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            display: inline-block;
            width: 90vw;
            height: 90vw;
            margin: 2.5vw 5vw;
            font-size: 0;
            > div {
                width: 90vw;
                height: 90vw;
                > div {
                    > div {
                        > section {
                            padding: 2.5%;
                            &:first-of-type {
                                font-size: 8vw;
                            }
                            &:last-of-type {
                                font-size: 6vw;
                            }
                        }
                    }
                }
            }
    }
   
`;