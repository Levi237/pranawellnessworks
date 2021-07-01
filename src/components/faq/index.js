import React, { Component } from 'react';
import styled from 'styled-components';

export default class FAQMain extends Component {
    state = {
        faq: [{
            topic: `Practice`,
            info: [{
                question: `What does prana mean?`,
                answer: `Prana is Sanskrit for breath, considered as a life-giving force.`
                },{
                question: `What is pranayama?`,
                answer: `Pranayama is a yoga based practice focusing on breath through certain techniques and exercises.`
                },{
                question: `Call me silly, but what does "Yoga" mean?`,
                answer: `Yoga, Sanskrit for "yoking" or "union", is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India.`
            }]
        },{
            topic: `Health`,
            info: [{
                question: `How does prana yoga help me?`,
                answer: `The goal of pranayama is to strengthen the connection between your body and mind. According to research, pranayama can promote relaxation and mindfulness. It's also proven to support multiple aspects of physical health, including lung function, blood pressure, and brain function.`
            }]
        },{
            topic: `Career`,
            info: [{
                question: `How can prana yoga improve my career?`,
                answer: `prana yoga teaches you better focus and stress management, and strengthens your body to give you more energy and stamina`
            }]
        },{
            topic: `Spiritual`,
            info: [{
                question: `I thought this was just to make me physically healthier?`,
                answer: `The practice of yoga is a full-life experience allowing you to connect with your deeper self`
            }]
        }]
    }
    render(){
        const { faq } = this.state;

        const showFAQ = faq.map((topic, k) => {
            const showQA = topic.info.map((qa, k) => {
                return(
                    <section key={k}>
                        <h2>{qa.question}</h2>
                        <p>{qa.answer}</p>
                    </section>
                )
            })
            return(
                <div key={k}>
                    <div><h1>{topic.topic}</h1></div>
                    {showQA}
                </div>
            )
        })
        return(
            <FAQWrapper>
                {showFAQ}
            </FAQWrapper>
        );
    };
};

const FAQWrapper = styled.div`
margin-top: calc(194px + -90vh);
    > div {
        text-align: left;
        padding: 0 10vw 2.5vw;
        > div {
            > h1 {
                text-align: left;
                padding: 5vw 0 0;
                color: var(--green)!important;
            }
            > button {
                border: none;
                background-color: transparent;
            }
        }
        > section {
            > h2 {
                padding: 40px 0 20px;
                color: var(--darkpurple);
                font-family: var(--fancy-font);
            }
            p {
                color: var(--grey);
            }
        }
    }
`;